import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
export const CrearTicket = () => {
  const nuevoTickte = () => {
    console.log("Crear ticket");
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} style={{ textAlign: "center" }}>
          <Title level={3}>Presione el botón para un nuevo ticket</Title>

          <Button
            type="primary"
            shape="round"
            icon={<DownCircleOutlined />}
            size="large"
            onclick={nuevoTickte}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100, textAlign: "center" }}>
        <Col span={14} offset={6}>
          <Text level={2}>Su número</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            66
          </Text>
        </Col>
      </Row>
    </>
  );
};
