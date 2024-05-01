import { Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Menu from "./pages/Menu"
import Home from "./pages/Home"
import Menu_Layout from "./layouts/MenuLayout/layout"
import Search from "./pages/Search"
import Cart_Layout from "./layouts/CartLayout/layout"

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]
  return (
    <>
      <Routes>
        <Route element={<Menu_Layout />}>
          <Route element={<Menu />} path={`/restaurant/:id`} />
        </Route>
        <Route element={<Cart_Layout />}>
          <Route element={<Cart />} path={`/cart`} />
        </Route>
        {routes.map((route) => (
          <Route key={route.path} element={route.element} path={route.path} />
        ))}
      </Routes>
    </>
  )
}

export default App
