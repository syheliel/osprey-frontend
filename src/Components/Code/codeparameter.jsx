import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import io from 'socket.io-client'
const { Option } = Select;

var SUBSCRIBE_PREFIX = "/topic/public" // 设置订阅消息的请求前缀
var message2 = "";
var wsUrl = "ws://106.13.125.83:3498/compute_query";//必须以ws开头
//wsUrl = "ws://localhost:3498/compute_query";//必须以ws开头
let ws;

function Codeparameter(props) {
    // console.log(props)
    const [visible, setVisible] = useState(false);
    const [error, seterror] = useState("");
    const [channelConnected, setchannelConnected] = useState(false)
    let { compile_info, changeInfo, changeConnected } = props;
    const { userProgram } = props;
    const { verify_program } = props;
    // websocket 连接
    const connect = () => {
        changeInfo(" ")
        ws = new WebSocket(wsUrl);
        // console.log("websocket 状态",ws.readyState)
        // if (ws.readyState != 1){      //   WebSocket.OPEN 1 连接已开启并准备好进行通信；
        //     ws.close();
        //     ws.open();
        // }
        ws.onopen = function (evt) {
            console.log("lianjie", compile_info)
            console.log("连接开始")
            sendMessage();
            changeConnected(true)         // 修改连接状态
        }
        onMessageReceived();
        ws.onclose = function () {
            console.log("连接已关闭...");
            changeConnected(false)
        }
    }
    // websocket 接收后端消息
    const onMessageReceived = () => {
        changeInfo("")
        ws.onmessage = function (payload) {
            console.log('有消息过来');
            console.log(payload.data);
            compile_info += payload.data;
            console.log('ysnnb compiler', compile_info)
            // console.log('ysnnb message2',message2)
            changeInfo(compile_info);
        }
    }
    // websocket 设置待发送的消息内容
    const sendMessage = () => {
        var message3 = {
            "register_count": parseInt(values.register_count),
            "tinyram_input_size_bound": Number(values.tinyram_input_size_bound),
            "word_size": Number(values.word_size),
            "verify_program": verify_program,
            "tinyram_program_size_bound": Number(values.tinyram_program_size_bound),
            "program": userProgram,
            "time_bound": 64,
            "destination": SUBSCRIBE_PREFIX
        }
        ws.send(JSON.stringify(message3));
    }
    // 展示侧边栏抽屉
    const showDrawer = () => {
        changeInfo("")
        setVisible(true);
    };

    // 侧边栏 关闭连接
    const onClose = () => {
        setVisible(false);
    };

    const [values, setValues] = useState({
        register_count: 16,
        word_size: 16,
        tinyram_input_size_bound: 25,
        time_bound: 64,
        tinyram_program_size_bound: 20
    });

    const onChange = event => {
        setTimeout(() => {
            setValues({ ...values, [event.target.name]: event.target.value })
        }, 0);
    };

    const onSubmit = (e) => {
        if (compile_info == "") {
            connect();
            onClose();
            scrollToAnchor('result');
        }
        else
            console.log('fuck', compile_info)
    };
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                <PlusOutlined /> 输入运行参数
            </Button>
            <Drawer
                title="请输入即将运行的模拟参数"
                width={720}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit" onClick={onSubmit} >
                            Submit
                        </Button>
                    </div>
                }
            >
                <Form layout="vertical" noValidate >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="register_count"
                                label="Register_count"
                                rules={[{ required: true, message: 'Please enter Register count' }]}
                            >
                                <Input placeholder={values.register_count} value={values.register_count}
                                    onChange={onChange} name="register_count" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="word_size"
                                label="Word_size"
                                rules={[{ required: true, message: 'Please enter Word size(bit)' }]}
                            >
                                <Input placeholder={values.word_size} value={values.word_size}
                                    onChange={onChange} name="word_size" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="tinyram_input_size_bound"
                                label="Tinyram_input_size_bound"
                                rules={[{ required: true, message: 'Please enter Tinyram input size bound' }]}
                            >
                                <Input placeholder={values.tinyram_input_size_bound} onChange={onChange} name="tinyram_input_size_bound" value={values.tinyram_input_size_bound} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="tinyram_program_size_bound"
                                label="Tinyram_program_size_bound"
                                rules={[{ required: true, message: 'Please enter Tinyram_program_size_bound' }]}
                            >
                                <Input placeholder={values.tinyram_program_size_bound} onChange={onChange} name="tinyram_program_size_bound" value={values.tinyram_program_size_bound} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="time_bound"
                                label="Time_bound"
                                rules={[{ required: true, message: 'Please enter Time bound' }]}
                            >
                                <Input placeholder={values.time_bound} onChange={onChange} name="time_bound" value={values.time_bound} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={24}>
                            <Form.Item
                                name="verify_program"
                                label="verify_program"
                                initialValue={verify_program.toString()}
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter verify_program',
                                    },
                                ]
                                }
                            >
                                <Input.TextArea rows={25} placeholder={verify_program.toString()} onChange={onChange} name="verify_program" value={verify_program} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={24}>
                            <Form.Item
                                name="userProgram"
                                label="userProgram"
                                initialValue={userProgram.toString()}
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter userProgram',
                                    },
                                ]
                                }
                            >
                                <Input.TextArea rows={25} placeholder={userProgram.toString()} onChange={onChange} name="userProgram" value={userProgram} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
}
export default Codeparameter;