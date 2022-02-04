async function client(route, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
  }
  const defaultOptions = { headers }
  const response = await fetch(route, {
    ...defaultOptions,
    ...options
  })

  if (response.status === 204) {
    return response.text()
  }

  if (response.ok || response.status === 200 || response.status === 409) {
    return response.json()
  }
  const responseJson = await response.json()
  throw new Error(responseJson.message || responseJson.error)
}

const api = {
  get(route) {
    return client(route, {
      method: "GET"
    })
  },

  post(route, data) {
    return client(route, {
      method: "POST",
      body: JSON.stringify(data)
    })
  },

  put(route, data) {
    return client(route, {
      method: "PUT",
      body: JSON.stringify(data)
    })
  },

  delete(route) {
    return client(route, {
      method: "DELETE"
    })
  }
}
export default api
