import axios from 'axios'

const URL = 'https://jogtracker.herokuapp.com/api/v1/auth'

function setAuthorizationData(token) {
  console.log(token)
  window.localStorage.setItem('Authorization', `Bearer ${token}`)
}

export function loginUser() {
  axios.post(`${URL}/uuidLogin`, {uuid: 'hello'})
    .then(({data, status}) => {
      if (status === 201) {
        setAuthorizationData(data.response.access_token)
      }
    })
    .catch((error) => console.error(error))
}