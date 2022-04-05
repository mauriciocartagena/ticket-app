import React from "react";
import { CloseCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button, Divider } from "antd";

const { Title, Text } = Typography;

export const Escritorio = () => {
  const salir = () => {
    console.log("salir");
  };

  const siguienteTicket = () => {
    console.log("siguienteTicket");
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Mauricio</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">5</Text>
        </Col>
        <Col span={4}>
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col>
          <Text>Esta atendiendo el ticket número : </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={18}>
          <Button onClick={siguienteTicket} shape="round" type="primary">
            <RightCircleOutlined />
            Siguiente Ticket
          </Button>
        </Col>
      </Row>
    </>
  );
};
