import { LeftOutlined, SearchOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { totalCartItems } from "../../../utils/globalUtils"

interface QuantityProps {
  state: string
  cart: {
    items: []
  }
  quantity: number
}

const Menu_Navbar = () => {
  const cartItems = useSelector((state: QuantityProps) => state.cart?.items)
  const totalQuantity = totalCartItems({ cartItems })
  return (
    <div className="h-[5vh] flex flex-row justify-between items-center px-8 py-7 text-xl">
      <LeftOutlined onClick={() => history.back()} className="" />
      <div className=" flex justify-center items-center ">
      
      {/* //? functionality to be added */}

      {/* <Link to="/search">
        <SearchOutlined />
      </Link> */}

      <Link to="/cart">
      <span className=" text-sm text-red-400 ml-3 ">View Cart ({totalQuantity})</span>
      </Link>
      </div>
    </div>
  )
}

export default Menu_Navbar
