import { Anchor } from "antd"
import CartButton from "../../components/CartButton"
import ListComponent from "../../components/ListComponent"
import {
  useGetMenuByCategoriesQuery,
  useGetMenuQuery,
} from "../../redux/slices/menuSlice"
import InfoCard from "./components/InfoCard"
import { useState } from "react"

type Item = string

const Menu = () => {
  const { data: menu, error, isLoading } = useGetMenuQuery()
  const {
    data: menuCategory,
    error: categoryError,
    isLoading: categoryLoading,
  } = useGetMenuByCategoriesQuery()

  const restaurantInfo = [
    {
      restName: "Prathamesh's Restaurant",
      ratings: "4.7 / 5",
      noOfRatings: "500+",
      basicAmountToSpend: 200,
      cuisine: "North Indian",
    },
  ]
  const [selectedCategory, setSelectedCategory] = useState()

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const cartItemCount = 4
  return (
    <div className="h-[100vh]">
      {/* RESTAURANT DETAILS DIV */}
      <div className="px-4 pt-4 pb-7">
        {restaurantInfo.map((restaurant, _i) => (
          <InfoCard
            key={_i}
            restName={restaurant.restName}
            ratings={restaurant.ratings}
            noOfRatings={restaurant.noOfRatings}
            basicAmountToSpend={restaurant.basicAmountToSpend}
            cuisine={restaurant.cuisine}
          />
        ))}
      </div>
      {/* END OF DETAILS DIV */}

      <ul>
        {/* <h1 className="py-3 px-6 text-xl font-bold">RECOMMENDED</h1> */}
        {menuCategory?.map((category) => (
          <div id={category} key={category}>
            <h2 className="py-3 px-6 text-xl font-bold">
              {category.charAt(0).toUpperCase() + category.slice(1)} (
              {menu?.filter((item) => item.category === category).length})
            </h2>
            <ListComponent
              category={category}
              key={category}
              loading={isLoading}
              dataSource={menu?.filter((item) => item.category === category)}
              itemTitle={(item: Item) => item.title}
              itemPrice={(item: Item) => item.price}
              itemDescription={(item: Item) =>
                item.description.length > 60
                  ? item.description.slice(0, 60)
                  : item.description
              }
              itemImageSource={(item: Item) => item.image}
              isLoading={isLoading}
            />
          </div>
        ))}
      </ul>

      {/* MENU LIST ITEMS */}

      {/* CART BUTTON */}
      {cartItemCount > 0 ? <CartButton cartItemsCount={cartItemCount} /> : ""}
      {/* CART BUTTON */}

      <div className="h-[5vh] bg-white w-full bottom-0 overflow-x-scroll fixed flex flex-row items-center">
        {menuCategory?.map((category, _i) => (
          <Anchor
            key={_i}
            items={[
              {
                key: `${category}`,
                href: `#${category}`,
                title: `${
                  category.charAt(0).toUpperCase() + category.slice(1)
                }`,
              },
            ]}
            // className={`border-[1px] border-gray-500 rounded-xl min-w-max px-2 py-0.5 mx-2`}
            className="p-2"
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Anchor>
        ))}
      </div>
    </div>
  )
}

export default Menu
