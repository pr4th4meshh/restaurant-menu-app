import { useSelector } from "react-redux"
import CartList from "../../components/CartList"
import Suggestions from "./components/Suggestions"
import BillDetails from "./components/BillDetails"
import ReviewOrder from "./components/ReviewOrder"

interface StateProps {
  state: string
  cart: {
    items: []
  }
}

interface ItemProps {
  id: number
  price: number
  title: (title: string) => string
}

const Cart = () => {
  const cartItems = useSelector((state: StateProps) => state.cart?.items)

  const getItemQuantity = (itemId: number) => {
    const item = cartItems.find((item: ItemProps) => item.id === itemId)
    return item ? item.quantity : 0
  }

  const individualItemPrice = (item: ItemProps) => {
    return item.price * getItemQuantity(item.id)
  }

  return (
    <>
      <div className="px-3 border-b">
        {cartItems?.map((menu) => (
          <CartList
            id={(item) => item.id}
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
