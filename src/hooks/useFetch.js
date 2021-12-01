// Asumsi URL sudah di-include parameter yang diperlukan
export async function useFetch(url, opts) {
  const { method, body, query } = opts
  const fetchOpts = { method: method.toUppercase() }
  let response

  if(body && !['GET', 'HEAD'].includes(method.toUppercase()))
    fetchOpts.body = JSON.stringify(body)

  if(query){
    const keys = Object.keys(query)
    url = `${url}?${keys.map(key => `${key}=${query[key]}`).join('&')}`
  }

  response = await fetch(url, fetchOpts)

  return await response.json()
}
