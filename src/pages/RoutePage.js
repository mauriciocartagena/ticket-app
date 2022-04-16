import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Ingresar } from "./Ingresar";
import { Cola } from "./Cola";
import { Escritorio } from "./Escritorio";
import { CrearTicket } from "./CrearTicket";
import { useContext } from "react";
import { UiContext } from "../content/UiContext";
const { Content, Footer, Sider } = Layout;

export const RoutePage = () => {
  const { ocultarMenu } = useContext(UiContext);

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={ocultarMenu}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/ingresar">Ingresar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/cola">Cola de tickets</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="/crear">Crear ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes>
                <Route path="/ingresar" element={<Ingresar />} />
                <Route path="/cola" element={<Cola />} />
                <Route path="/crear" element={<CrearTicket />} />
                <Route path="/escritorio" element={<Escritorio />} />

                <Route path="*" element={<Escritorio />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
