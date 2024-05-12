import { LeftOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux"
import { totalCartItems } from "../../../utils/globalUtils"

interface StateProps {
  state: string
  cart: {
    items: []
  }
}

const Cart_Navbar = () => {
  const cartItems = useSelector((state: StateProps) => state.cart?.items)
  const totalQuantity = totalCartItems({ cartItems })
  return (
    <div className="h-[5vh] flex flex-row px-8 py-7 items-center">
      <LeftOutlined onClick={() => history.back()} className="pr-5" />
      <div className="flex flex-col">
        <h1 className="text-md font-semibold">Prathamesh's Restaurant</h1>
        <p className=" text-xs ">{totalQuantity} items in your cart</p>
      </div>
    </div>
  )
}

export default Cart_Navbar
