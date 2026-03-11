const toMins = (timeStr) => {
	const [h, m] = timeStr.split(':').map(Number)
	return h * 60 + m
}

const nowMins = () =>{
	const now = new Date()
	return now.getHours() * 60 + now.getMinutes()
}

function calcSunProgress(sunrise, sunset){

	const sunriseTime = toMins(sunrise)
	const sunsetTime = toMins(sunset)
	const currentTime = nowMins()

	return ((currentTime - sunriseTime) / (sunsetTime - sunriseTime) * 100)
}

function getSunStatus(sunrise, sunset){
	// sunset - current
	const sunsetTime = toMins(sunset)
	const currentTime = nowMins()
	const timeBeforeSunset = sunset - currentTime
	
	return `До заката осталось `

}

