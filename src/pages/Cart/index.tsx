import { useSelector } from "react-redux"
import CartList from "../../components/lists/CartList"
import Suggestions from "./components/Suggestions"
import BillDetails from "./components/BillDetails"
import ReviewOrder from "./components/ReviewOrder"

interface CartItemProps {
  id: number
  price: number
  title: string
  quantity: number
}

interface StateProps {
  state: string
  cart: {
    items: CartItemProps[]
  }
}

const Cart = () => {
  const cartItems = useSelector((state: StateProps) => state.cart?.items)

  const getItemQuantity = (itemId: number) => {
    const item = cartItems.find((item: CartItemProps) => item.id === itemId)
    return item ? item.quantity : 0
  }

  const individualItemPrice = (item: CartItemProps) => {
    return item.price * getItemQuantity(item.id)
  }

  return (
    <>
      <div className="px-3 border-b">
        {cartItems?.map((menu) => (
          <CartList
            id={(item: CartItemProps) => item.id}
            itemTitle={(item: CartItemProps) => item.title}
            itemQuantity={(item: CartItemProps) => getItemQuantity(item.id)}
            itemTotalPrice={(item: CartItemProps) => individualItemPrice(item)}
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
