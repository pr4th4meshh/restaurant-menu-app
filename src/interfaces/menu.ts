export interface Menu {
    id: number
    title: string
    price: number
  }

  export interface MenuItem {
    id: string
    name: string
    image: string
    title: string
    price: number
    description: string
    category: string
    href: string
  }

  export type CategoryProps = string[]
