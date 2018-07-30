import { config } from '../config';
import { authHeader } from '../helpers';
import axios from 'axios'

export const weatherService = {
    fetchData: (startIndex) => {
        const url = `api/SampleData/WeatherForecasts?startDateIndex=${startIndex}`;
        return axios.get(url)
            .then(resp => {
                // handle success
                console.log('weather.fetchData', resp.data);
                return resp.data;
            })
            .catch(error => {
                console.log('weather.error', error);
            });
            
    }
};

