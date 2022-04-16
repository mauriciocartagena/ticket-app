import { CloseCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";

const { Title, Text } = Typography;

export const Escritorio = () => {
  const history = useNavigate();

  const { socket } = useContext(SocketContext);

  const [usuario] = useState(getUsuarioStorage());
  const [ticket, setTicket] = useState(null);

  const salir = () => {
    localStorage.clear();
    history("/ingresar", { replace: true });
  };

  const siguienteTicket = () => {
    socket.emit("siguiente-ticket-trabajar", usuario, (ticket) => {
      setTicket(ticket);
    });
  };

  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate replace to="/ingresar" />;
  }
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">{usuario.escritorio} </Text>
        </Col>
        <Col span={4}>
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      {ticket && (
        <Row>
          <Col>
            <Text>Esta atendiendo el ticket número : </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.numero}
            </Text>
          </Col>
        </Row>
      )}

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
