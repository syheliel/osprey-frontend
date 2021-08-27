import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";
import { Card, Layout, Row, Col, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../Select/index.css";
import { Link } from "react-router-dom";
const { Content } = Layout;
const bounceAnimation = keyframes`${fadeInUp}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

const { Meta } = Card;
export default function Loading() {
  return (
    <div className="hzr-page" id="hzr-page">
      <div className="hzr-header" id="hzr-header">
        <div className="hzr-brand">
          <ArrowLeftOutlined style={{ margin: 20 }} />
          <Link to="/">返回</Link>
        </div>
        <div className="hzr-nav">
          <ul>
            <li>
              <Link to="/">关于Osprey</Link>
            </li>
            <li>
              <Link to="/">加入我们</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="hzr-text" className="hzr-text">
        请选择您意向的公司
        <p>以让我们为您提供定制化的服务</p>
      </div>
      <div className="hzr-content" id="hzr-content">
        <div id="cards" className="cards">
          <Row gutter={200}>
            <Col span={70}>
              <BouncyDiv>
                <a href="/code">
                  <Card
                    hoverable
                    style={{ width: 270, height: 480 }}
                    cover={
                      <img
                        alt="example"
                        src="https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fi.cheers.com.tw%2Farticle%2F202009%2Farticle-5f5600a32c542.jpg/?w=810&h=543&fit=fill"
                      />
                    }
                  >
                    <Divider plain></Divider>
                    以太坊钱包地址: 0x57128a8c478B3fEab65866a9c39d06408c243ce9
                    <Divider plain></Divider>
                    <Meta title="公司A   医疗数据"  />
                    <Meta description="数据来源：流感患者年龄数据" className="desciption"/>
                    <Meta description="数据格式：整数数组" className="desciption"/>
                    <Meta description="数据量级: 5条" className="desciption" />
                  </Card>
                </a>
              </BouncyDiv>
            </Col>
            <Col span={70}>
              <BouncyDiv>
                <a href="/code">
                  <Card
                    hoverable
                    style={{ width: 270, height: 480 }}
                    cover={
                      <img
                        alt="example"
                        src="https://www.bowtie.com.hk/blog/wp-content/uploads/2020/09/03122624/Start-up-Business-1024x683.jpg"
                      />
                    }
                  >
                    <Divider plain></Divider>
                    以太坊钱包地址: 0x57128a8c478B3fEab65866a9c39d06408c243ce9
                    <Divider plain></Divider>
                    <Meta title="公司B   轨道数据"  />
                    <Meta description="数据来源: 某干道车流量平均数据" className="desciption"/>
                    <Meta description="数据格式: Json数组" className="desciption"/>
                    <Meta description="数据量级: 5条" className="desciption" />
                  </Card>
                </a>
              </BouncyDiv>
            </Col>
            <Col span={70}>
              <BouncyDiv>
                <a href="/code">
                  <Card
                    hoverable
                    style={{ width: 270, height: 480 }}
                    cover={
                      <img
                        alt="example"
                        src="https://doqvf81n9htmm.cloudfront.net/data/crop_article/107301/shutterstock_1173479044.jpg_1140x855.jpg"
                        style={{height:178}}
                      />
                    }
                  >
                    {" "}
                    <Divider plain></Divider>
                    以太坊钱包地址: 0x57128a8c478B3fEab65866a9c39d06408c243ce9
                    <Divider plain></Divider>
                    <Meta title="公司C   气象数据"  />
                    <Meta description="数据来源: 上海气象数据" className="desciption"/>
                    <Meta description="数据格式: 整数数组" className="desciption"/>
                    <Meta description="数据量级: 5条" className="desciption" />
                  </Card>
                </a>
              </BouncyDiv>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
