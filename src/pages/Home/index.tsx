import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl text-yellow-600">This is HOME/ <br />LANDING page</h1>
      <Link to="/restaurant/anyrandomid">
      <h1 className="text-xl">
      Click this to go to RESTAURANT page
      </h1>
      </Link>
    </div>
  )
}

export default Home
