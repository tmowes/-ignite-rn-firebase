export type FileDataProps = {
  name: string
  path: string
}

export type FileProps = {
  data: FileDataProps
  onShow?: () => void
  onDelete?: () => void
}
