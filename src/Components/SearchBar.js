import React from "react";

const Form = props => (
	<form className="container"onSubmit={props.getWeather}>
		<input type="text" name="zipCode" placeholder="Zip Code..."/>
		<button>go!</button>
	</form>
);

export default Form;