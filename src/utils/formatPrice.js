export const formatPrice = (price) => {
  const str = price.toString()
  const arr = str.split('.')
  return arr.shift().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export const formatPriceCents = (price, zeroCents = false) => {
  const str = price.toString()
  const arr = str.split('.')
  return arr.length === 1 ? zeroCents ? '00' : '' : arr.pop()
}