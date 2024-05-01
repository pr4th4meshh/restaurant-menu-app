import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../config/env"
import { Menu } from "../../interfaces/menu"

export const menuSlice = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMenu: builder.query<Menu[], void>({
      query: () => "/products",
    }),
    getMenuById: builder.query<Menu, number>({
      query: (id) => `/products/${id}`,
    }),
    getMenuByCategories: builder.query<Menu[], void>({
      query: () => `/products/categories`
    })
  }),
})

export const { useGetMenuQuery, useGetMenuByIdQuery, useGetMenuByCategoriesQuery } = menuSlice
