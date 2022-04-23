import axios from 'axios';

import {URL} from './constants';

function setAuthorizationData(token) {
  window.localStorage.setItem('Authorization', `Bearer ${token}`);
}

function setInterceptor() {
  axios.interceptors.request.use(config => {
    config.headers = {
      ...config.headers,
      Authorization: window.localStorage.getItem('Authorization')
    };

    return config;
  });
}

export function loginUser() {
  return axios.post(`${URL}/auth/uuidLogin`, {uuid: 'hello'})
    .then(({data, status}) => {
      if (status === 201) {
        setAuthorizationData(data.response.access_token);
        setInterceptor();
      }
    })
    /* eslint-disable no-console */
    .catch((error) => console.error(error));
}
