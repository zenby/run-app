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

export function updateRace(race) {
  return axios.put(`${URL}/data/jog`, {
    ...race,
    jog_id: race.id,
    date: new Date(race.date * 1000)
  })
  /* eslint-disable no-console */
    .catch((error) => console.error(error));
}
