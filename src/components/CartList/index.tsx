import { List } from "antd"

interface CartItem {
  id: number
  href: string
  title: string
  price: string
}

interface CartListProps {
  dataSource: CartItem[]
  itemTitle: (item: CartItem) => string
  itemQuantity: (item: CartItem) => number
  itemTotalPrice: (item: CartItem) => number
  id: (item: CartItem) => string
}

const CartList = ({
  dataSource,
  itemTitle,
  itemQuantity,
  itemTotalPrice,
  id,
}: CartListProps) => {
  return (
    <div className="border-b">
      <List
        key={id}
        className="pb-3"
        itemLayout="horizontal"
        size="small"
        dataSource={dataSource}
        renderItem={(item: CartItem) => (
          <div className="">
            <List.Item key={item.id}>
              <List.Item.Meta
                description={
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                      <a
                        className="text-md font-semibold text-gray-500"
                        href={item.href}
                      >
                        {itemTitle(item).slice(0, 20)}...
                      </a>
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
