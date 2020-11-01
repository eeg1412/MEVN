export default function (api) {
  return {
    register (data) {
      return api.post('/register', data)
    },
  }
}
