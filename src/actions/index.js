//This is an action creator
import axios from 'axios';
const API_KEY ='5178011fdd1f65e9cc4a70d978cdff54'

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER';
//Note Action creators always have to return an action.
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  //redux promise manages this and will 
  //not leave it through to the reducers until the promise has been resolved
  //Then the actual data can flow through to the reducers.
  //Reducers only care about data. They have no idea what to do with a primise.
  //redux-promise is a middleware which we inserted to intersecpt the promise
  // and wait until the promise gets resolved before it proceedes.
  const request = axios.get(url);
  // console.log("Request:", request)
  return {
    type: FETCH_WEATHER,
    payload : request
  }
}


