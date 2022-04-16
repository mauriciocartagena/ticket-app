import React, { useState } from "react";
import { CloseCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Button, Divider } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";

const { Title, Text } = Typography;

export const Escritorio = () => {
  const history = useNavigate();

  const [usuario] = useState(getUsuarioStorage());
  const salir = () => {
    localStorage.clear();
    history("/ingresar", { replace: true });
  };

  const siguienteTicket = () => {
    console.log("siguienteTicket");
  };

  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate replace to="/ingresar" />;
  }
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
