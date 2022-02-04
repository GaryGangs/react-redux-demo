import client from "./client"

const homeApi = {
  fetchRegisteredUsers() {
    return client.get(
      "https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers"
    )
  },

  fetchProjects() {
    return client.get(
      "https://5c3ce12c29429300143fe570.mockapi.io/api/projectmemberships"
    )
  }
}
export default homeApi
