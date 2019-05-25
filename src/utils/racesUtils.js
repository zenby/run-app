import axios from 'axios';
import {URL} from './constants';

export function getRaces() {
  return axios.get(`${URL}/data/sync`)
    .then(({data}) => {
      /* eslint-disable no-console */
      console.log(data);
      return data.response.jogs;
    });
}