import { Outlet } from "react-router-dom"
import { Content } from "antd/es/layout/layout"
import { Layout } from "antd"
import CheckoutButton from "../../../pages/Cart/components/CheckoutButton"
import Cart_Navbar from "../../../pages/Cart/components/Navbar"
import { useSelector } from "react-redux"
import { totalCartItems } from "../../../utils/globalUtils"
import { LeftOutlined } from "@ant-design/icons"

interface StateProps {
  state: string
  cart: {
    items: []
  }
}

const Cart_Layout = () => {
  const cartItems = useSelector((state: StateProps) => state.cart?.items)
  const totalQuantity = totalCartItems({ cartItems })

  return (
    <div>
      {totalQuantity > 0 ? (
        <Layout className="min-h-[100vh] bg-white">
          <Content>
            <Cart_Navbar />
            <div className="content">
              <Outlet />
            </div>
            <CheckoutButton />
          </Content>
        </Layout>
      ) : (
        <div className="h-[90vh] text-2xl flex flex-col justify-center items-center ">
          <h1>YOUR CART IS EMPTY</h1>
          <h1 className="text-orange-500 text-sm" onClick={() => history.back()}> <LeftOutlined /> Click here to go back</h1>
        </div>
      )}
    </div>
  )
}

export default Cart_Layout
