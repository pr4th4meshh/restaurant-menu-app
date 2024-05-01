import { List } from "antd"
import { useSelector } from "react-redux"
import { calculateTotalPrice, gstConversion } from "../../../utils/globalUtils"

const BillDetails = () => {
  const cartItems = useSelector((state) => state.cart?.items)
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const gstPercentage = 2;

  return (
    <div className="pt-6">
      <h1 className="text-xl font-semibold">Bill Details:</h1>
      <List className="pt-3">
        <div className="flex flex-row justify-between">
          <h1>Item total:</h1>
          <h1>$ {totalPrice}</h1>
        </div>
        <div className="flex flex-row justify-between pb-1">
          <h1>GST fee:</h1>
          <h1>$ {gstConversion(gstPercentage, totalPrice)}</h1>
        </div>
        <div className="flex flex-row justify-between border-t pt-1 font-bold">
          <h1>To Pay</h1>
        <h1>$ {calculateTotalPrice(totalPrice, gstPercentage )}</h1>
        </div>
      </List>
    </div>
  )
}

export default BillDetails
