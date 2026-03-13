const toMins = (timeStr) => {
	const [h, m] = timeStr.split(':').map(Number)
	return h * 60 + m
}

const nowMins = () =>{
	const now = new Date()
	return now.getHours() * 60 + now.getMinutes()
}

export function calcSunProgress(sunrise, sunset){

	const sunriseTime = toMins(sunrise)
	const sunsetTime = toMins(sunset)
	const currentTime = nowMins()
	const totalMinutesDay = 1440

	let percent = 0 
	let isDay = false


	 if(currentTime >= sunriseTime && currentTime < sunsetTime){
	 	const totalLenghtDay = sunsetTime - sunriseTime 
	 	percent =  ((currentTime - sunriseTime) / totalLenghtDay) * 100
	 	isDay = true
	 } else {
	 	let nightDuration = (totalMinutesDay - sunsetTime) + sunriseTime
	 	let timeSinceSunset
	 	isDay = false

	 	if (currentTime >= sunsetTime){
	 		timeSinceSunset = currentTime - sunsetTime
	 	} else {
	 		timeSinceSunset = (totalMinutesDay - sunsetTime) + currentTime
	 	}
	 	percent = (timeSinceSunset / nightDuration) * 100

	 }


	 return {
	 	progressPercent: Math.round(percent),
	 	isDay 
	 }
}

export function getSunStatus(sunrise, sunset){
	const sunriseTime = toMins(sunrise)
	const sunsetTime = toMins(sunset)
	const currentTime = nowMins() 

	let phase = '';

  
  if (currentTime >= sunsetTime || currentTime <= sunriseTime ) {
      phase = 'Sun below the horizon'; 
  } else {
      const timeBeforeSunset = sunsetTime - currentTime;
      const hours = Math.floor(timeBeforeSunset / 60);
      const mins = timeBeforeSunset % 60;      
      phase = `Time before sunset: ${hours}h ${mins}m`;
  }
  return {
      phase
  };
}

