import { RightOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl">This is HOME Page</h1>
      <Link to="/restaurant/anyrandomid">
      <h1 className="text-xl text-orange-500">
      Click here to view Menu <RightOutlined />
      </h1>
      </Link>
    </div>
  )
}

export default Home
