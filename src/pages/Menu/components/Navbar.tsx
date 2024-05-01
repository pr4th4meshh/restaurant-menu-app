import { LeftOutlined, SearchOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const Menu_Navbar = () => {
  return (
    <div className="h-[5vh] flex flex-row justify-between items-center px-8 py-7 text-xl">
      <LeftOutlined onClick={() => history.back()} className="" />
      <Link to="/search">
        <SearchOutlined className="" />
      </Link>
    </div>
  )
}

export default Menu_Navbar
