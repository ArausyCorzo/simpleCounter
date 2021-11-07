//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "../styles/index.scss";

import Home from "./component/home.jsx";

let contador = 0;
setInterval(function() {
	const six = Math.floor(contador / 1000000) % 10;
	const five = Math.floor(contador / 100000) % 10;
	const four = Math.floor(contador / 10000) % 10;
	const three = Math.floor(contador / 1000) % 10;
	const two = Math.floor(contador / 100) % 10;
	const one = Math.floor(contador / 10) % 10;

	console.log(six, five, four, three, two, one);
	contador++;

	ReactDOM.render(
		<Home
			numSix={six}
			numFive={five}
			numFour={four}
			numThree={three}
			numTwo={two}
			numOne={one}
		/>,
		document.querySelector("#app")
	);
}, 100);
