import './style.css';
import { processWeatherData } from './weatherData.js'

async function getWeather(city) {
	try{
		const api = process.env.API_KEY;

		const url  = new URL(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${api}`)
		
		const response = await fetch(url)

		if(!response.ok){
			throw Error(`Ooops... Error network: ${response.status} ${response.statusText}`)
		}

		const data = await response.json()
		const processData = processWeatherData(data)
		console.log(processData)

	} catch (error) {
		console.error("Damn, error:", error)
	}
}

getWeather('London')
