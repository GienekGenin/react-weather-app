import { FETCH_CITIES } from './types';

export const fetchCities = () => dispatch => {
        fetch('http://api.openweathermap.org/data/2.5/box/city?bbox=14,49,24,54,10&appid=25c9190b6b69b92ab596169bc23fa52c')
            .then(res => res.json())
            .then(cities => dispatch({
                type: FETCH_CITIES,
                payload: cities
            }));
}