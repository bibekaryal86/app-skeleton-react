export const getStartOfTheMonth = (): string => {
  const year = new Date().getFullYear()
  let month = (new Date().getMonth() + 1).toString()
  if (month.length == 1) {
    month = '0' + month
  }
  return year + '-' + month + '-01'
}

export const getStartOfTheYear = (): string => new Date().getFullYear() + '-01-01'
