export const formatDateTime = (options) => {
  const date = new Date()
  return new Intl.DateTimeFormat('en', options).format(date)
}
