import React from 'react';
import icons from './icons.json';


const WeatherSummaryLeft = (props) => {

	let data = icons;
  	let prefix = 'wi wi-';
  	let code = props.weatherId;
  	let icon = data[code].icon;

	// If we are not in the ranges mentioned above, add a day/night prefix.
	if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
		icon = 'day-' + icon;
	}

	// Finally tack on the prefix.
	icon = prefix + icon;

	return (
		<div className="card dashed-shadow lef-card"> 
			<div className="column">
				<p className="city">{ props.city }, { props.country }</p>
				<i className={"icon " + icon}></i>
	         <p className="description">{ props.description }</p>
         </div>
		</div>
	);
}

export default WeatherSummaryLeft;