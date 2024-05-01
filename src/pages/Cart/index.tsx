import { useSelector } from "react-redux"
import CartList from "../../components/CartList"
import Suggestions from "./components/Suggestions"
import BillDetails from "./components/BillDetails"
import ReviewOrder from "./components/ReviewOrder"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items)

  const getItemQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId)
    return item ? item.quantity : 0 
  }

  const individualItemPrice = (item) => {
    return item.price * getItemQuantity(item.id)
  }

  return (
    <>
      <div className="px-3 border-b">
        {cartItems?.map((menu: any) => (
          <CartList
          key={(item) => item.id}
            itemTitle={(item) => item.title}
            itemQuantity={(item) => getItemQuantity(item.id)}
            itemTotalPrice={(item) => individualItemPrice(item)}
            dataSource={[menu]}
          />
        ))}
        <Suggestions />
      </div>
      <div className="px-3">
        <BillDetails />
        <ReviewOrder />
      </div>
    </>
  )
}

export default Cart
