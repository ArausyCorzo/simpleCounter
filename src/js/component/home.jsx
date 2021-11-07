import React from "react";
import PropTypes from "prop-types";

const Home = props => {
	return (
		<div className="main">
			<div className="col">
				<i className="far fa-clock" />
			</div>
			<div className="six">{props.numSix}</div>
			<div className="five">{props.numFive}</div>
			<div className="four">{props.numFour}</div>
			<div className="three">{props.numThree}</div>
			<div className="two">{props.numTwo}</div>
			<div className="one">{props.numOne}</div>
		</div>
	);
};

Home.propTypes = {
	numOne: PropTypes.number,
	numTwo: PropTypes.number,
	numThree: PropTypes.number,
	numFour: PropTypes.number,
	numFive: PropTypes.number,
	numSix: PropTypes.number
};

export default Home;
