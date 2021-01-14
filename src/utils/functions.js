export const validateField = field => {
  var reg = /^[a-z ]+$/i
  if (!reg.test(field)) {
    throw new Error('Invalid format')
  }
  if (field === '') {
    throw new Error('All filed required!')
  }
}

export const uuid = () => {
  return Math.random().toString(36).substr(1, 5)
}
