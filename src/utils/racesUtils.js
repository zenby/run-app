import axios from 'axios';
import {URL} from './constants';

export function syncRaces() {
  axios.get(`${URL}/data/sync`)
    .then(({data}) => {
      /* eslint-disable no-console */
      console.log(data);
    });
}