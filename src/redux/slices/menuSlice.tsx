import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../config/env"
import { CategoryProps, MenuItem } from "../../interfaces/menu"

export const menuSlice = createApi({
  reducerPath: "menuApi",
  tagTypes: ["Menu"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMenu: builder.query<MenuItem[], void>({
      query: () => "/products",
      providesTags: ["Menu"]
    }),
    getMenuById: builder.query<MenuItem, number>({
      query: (id) => `/products/${id}`,
      providesTags: ["Menu"]
    }),
    getMenuByCategories: builder.query<CategoryProps, void>({
      query: () => `/products/categories`,
      providesTags: ["Menu"]
    })
  }),
})

export const { useGetMenuQuery, useGetMenuByIdQuery, useGetMenuByCategoriesQuery } = menuSlice
