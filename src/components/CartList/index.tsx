import { List } from "antd"

const CartList = ({ dataSource, itemTitle, itemQuantity, itemTotalPrice }: any) => {
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
            <List.Item
              key={itemTitle(item)}
            >
              <List.Item.Meta
                description={
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between">
                    <a className="text-md font-semibold text-gray-500" href={item.href}>
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
