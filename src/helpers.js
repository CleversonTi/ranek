export function serialize(obj) {
  let queryString = ''
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`
  }
  return queryString
}
export function serializeNew(obj) {
  let queryString = ''
  console.log('Iniciou')
  for (let key in obj) {
    console.log(obj)
    queryString += `${obj[key]}`
    console.log(queryString)
  }
  return queryString
}
