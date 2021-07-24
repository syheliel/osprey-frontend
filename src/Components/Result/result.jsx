import {
    Result, Button, notification,
    Space
} from 'antd';
import React from 'react'
const openNotificationWithIcon = (type) => {
    notification[type]({
        message: "程序运行成功",
        description:
            "运行结果为 average : 75\n已将钱转入对方账户",
    });
};
function MyResult() {
    return (
        <div className="result">
            <Result
                status="success"
                title="Successfully Purchased Cloud Server on Osprey!"
                subTitle="Order number: 2021424 Cloud server configuration takes 1-5 minutes, please wait."
                extra={[
                    <Button type="primary" key="console" href="/">
                        Go Console
      </Button>,
                    <Button key="buy" onClick={() => openNotificationWithIcon('success')}>Buy Again</Button>,
                ]}
            />
        </div>
    )
}

export default MyResult