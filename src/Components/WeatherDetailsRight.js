import React from 'react';


const WeatherDetailsRight = (props) => {

let dateSunrise = new Date(props.sunrise * 1000);
let dateSunset = new Date(props.sunset * 1000);

let sunrise = dateSunrise.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
let sunset = dateSunset.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});


	return (
		<div className="card dashed-shadow right-card"> 
			<div className="column">
				<div className="row summary-container">
					<h1 className="temperature">{ props.temperature }</h1>

					<div className="column details-container">
						<h2>Details:</h2>
						<div className="details row">
							<p>Max:</p>
							<p>{ props.tempMax }</p>
						</div>
						<div className="details row">
							<p>Min:</p>
							<p>{ props.tempMin }</p>
						</div>
					</div>
				</div>
				<div className="misc-container">
					<div className="misc row">
						<p>Humidity:</p>
						<p>{ props.humidity } %</p>
					</div>
					<div className="misc row">
						<p>Wind speed:</p>
						<p>{ props.wind } mph</p>
					</div>
					<div className="misc row">
						<p>Sunrise:</p>
						<p>{ sunrise }</p>
					</div>
					<div className="misc row">
						<p>Sunset:</p>
						<p>{ sunset }</p>
					</div>
				</div>
	       </div>
		</div>
	);
}

export default WeatherDetailsRight;