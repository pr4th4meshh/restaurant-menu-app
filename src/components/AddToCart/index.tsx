import { Button, message } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { addItemToCart, removeItemFromCart } from "../../redux/slices/cartSlice"

interface ButtonProps {
  item: {
    id: string
    name: string
    price: number
  }
}

interface StateProps {
  cart: {
    items: {
      id: string
      name: string
      price: number
      quantity: number
    }[]
  }
}

const AddToCartButton = ({ item }: ButtonProps) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: StateProps) => state.cart.items)
  const [messageApi, contextHolder] = message.useMessage()

  if (!item || !item.id) {
    console.error("Invalid item passed to AddToCartButton")
    return null
  }

  const currentItem = cartItems.find((cartItem) => cartItem.id === item.id)
  const quantity = currentItem ? currentItem.quantity : 0

  const onAddItem = () => {
    dispatch(addItemToCart({ item, quantity: 1 }))
    messageApi.open({
      type: "success",
      content: `Item added to cart`,
    })
  }

  const onRemoveItem = () => {
    if (quantity > 0) {
      dispatch(removeItemFromCart({ item, quantity: 1 }))
      messageApi.open({
        type: "info",
        content: `Item removed from cart`,
      })
    }
  }

  return (
    <div className="flex flex-row items-center min-w-10 border rounded-md ">
      {contextHolder}
      <Button
        className="bg-red-500 text-white"
        onClick={onRemoveItem}
        disabled={quantity === 0}
      >
        -
      </Button>
      <h1 className="px-3 text-md">{quantity || "Add"}</h1>
      <Button className="bg-green-500 text-white" onClick={onAddItem}>
        +
      </Button>
    </div>
  )
}

export default AddToCartButton
