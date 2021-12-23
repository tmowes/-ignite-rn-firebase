export type ProductDataProps = {
  id: string
  description: string
  quantity: number
  done: boolean
}

export type ProductProps = {
  data: ProductDataProps
}

export type TitleProps = {
  done: boolean
}
