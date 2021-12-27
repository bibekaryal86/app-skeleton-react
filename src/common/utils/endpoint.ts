export const getEndpoint = (endpoint: string) => {
  const baseUrl = process.env.BASE_URL as string
  const baseUrlClean = baseUrl.replaceAll('"', '').trim()
  return baseUrlClean.concat('/', endpoint)
}
