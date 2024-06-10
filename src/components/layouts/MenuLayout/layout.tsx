import Menu_Navbar from "../../../pages/Menu/components/Navbar"
import { Outlet } from "react-router-dom"
import { Content } from "antd/es/layout/layout"
import { Layout } from "antd"

const Menu_Layout = () => {
  return (
    <div>
      <Layout className="min-h-[100vh] bg-white">
        <Content>
          <Menu_Navbar />
          <div className="content">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default Menu_Layout
