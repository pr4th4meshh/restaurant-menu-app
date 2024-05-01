import { FileOutlined, ClockCircleOutlined, HourglassOutlined, UsergroupAddOutlined, ApartmentOutlined } from "@ant-design/icons"
import { List } from "antd"

const ReviewOrder = () => {
  return (
    <div className="pt-6">
      <List className="pt-3">
        <List.Item>
          <div className="flex flex-row text-sm">
            <FileOutlined className="text-xl pr-3 text-orange-500" />
            <h1> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae.</h1>
          </div>
        </List.Item>
        <List.Item>
          <div className="flex flex-row">
            <ClockCircleOutlined className="text-xl pr-3 text-orange-500" />
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo.</h1>
          </div>
        </List.Item>
        <List.Item>
          <div className="flex flex-row">
            <HourglassOutlined className="text-xl pr-3 text-orange-500" />
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem!</h1>
          </div>
        </List.Item>
        <List.Item>
          <div className="flex flex-row">
            <UsergroupAddOutlined className="text-xl pr-3 text-orange-500" />
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas!</h1>
          </div>
        </List.Item>
        <List.Item>
          <div className="flex flex-row">
            <ApartmentOutlined className="text-xl pr-3 text-orange-500" />
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias.</h1>
          </div>
        </List.Item>
      </List>
    </div>
  )
}

export default ReviewOrder
