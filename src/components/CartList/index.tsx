import { deleteItemFromCart } from "../../redux/slices/cartSlice"
import { List, Popconfirm, message } from "antd"
import { useDispatch } from "react-redux"
import type { PopconfirmProps } from "antd"
import { DeleteOutlined } from "@ant-design/icons"

const CartList = ({
  dataSource,
  itemTitle,
  itemQuantity,
  itemTotalPrice,
  itemId,
}: any) => {
  const dispatch = useDispatch()
  const deleteItem = (itemId: any) => {
    dispatch(deleteItemFromCart(itemId))
  }
  // const confirm: PopconfirmProps["onConfirm"] = (item: any) => {
  //   message.success("Click on Yes")
  //   deleteItem(item.id)
  // }

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e)
    message.error("Click on No")
  }
  return (
    <div className="border-b">
      <List
        key={itemTitle}
        className="pb-3"
        itemLayout="horizontal"
        size="small"
        dataSource={dataSource}
        renderItem={(item: any) => (
          <div className="">
            <List.Item key={itemTitle(item)}>
              <List.Item.Meta
                description={
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between ">
                      <div>
                        <Popconfirm
                          title="Remove Item"
                          description="Are you sure you want to remove the item?"
                          onConfirm={() => {
                            message.success("Item removed from cart")
                            deleteItem(item.id)
                          }}
                          placement="right"
                          onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                        >
                          <DeleteOutlined className="pr-3 text-red-500" />
                        </Popconfirm>
                        <a
                          className="text-md font-semibold text-gray-500"
                          href={item.href}
                        >
                          {itemTitle(item).slice(0, 20)}...
                        </a>
                      </div>
                      <h1 className="text-md text-black font-light">
                        $ {itemTotalPrice(item)} (Qty: {itemQuantity(item)})
                      </h1>
                    </div>
                  </div>
                }
              />
            </List.Item>
          </div>
        )}
      />
    </div>
  )
}

export default CartList
