import { useSelector } from "react-redux";
import { calculateTotalPrice } from "../../../utils/globalUtils";

interface StateProps {
  state: string
  cart: {
    items: []
  }
}

const CheckoutButton = () => {
  const cartItems = useSelector((state: StateProps) => state.cart?.items)
  const totalPrice = cartItems.reduce((total, item: {price: number, quantity: number}) => {
    return total + item.price * item.quantity
  }, 0)

  const gstPercentage = 2;
  const totalCartPrice = calculateTotalPrice(totalPrice, gstPercentage)
  return (
    <div className="h-[10vh] bg-white w-full bottom-0 overflow-x-scroll fixed flex flex-row items-center">
      <h1 className="text-lg bg-orange-500 mx-3 w-full text-center p-2 text-white rounded-lg">Continue to Pay (${totalCartPrice})</h1>
    </div>
  )
}

export default CheckoutButton
