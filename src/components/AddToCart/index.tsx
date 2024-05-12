import { Button } from "antd"
import { useSelector } from "react-redux"
import { totalCartItems } from "../../utils/globalUtils"

interface ButtonProps {
  onRemoveItem: () => void
  onAddItem: () => void
}

interface StateProps {
  state: string
  cart: {
    items: []
  }
}

const AddToCartButton = ({ onRemoveItem, onAddItem }: ButtonProps) => {
  const cartItems = useSelector((state: StateProps) => state.cart?.items)
  const totalQuantity = totalCartItems({ cartItems })

  return (
    <div className="flex flex-row items-center min-w-10 border rounded-md ">
      <Button
        className="bg-red-500 text-white"
        onClick={onRemoveItem}
        disabled={totalQuantity === 0}
      >
        -
      </Button>
      <h1 className="px-3 text-md">{totalQuantity || "Add"}</h1>
      <Button className="bg-green-500 text-white" onClick={onAddItem}>
        +
      </Button>
    </div>
  )
}

export default AddToCartButton
