import React from "react";

//include images into your bundle
import Counter from "./Counter";

//create your first component
const Home = (props) => {
	return (
		<>
		<Counter
		digitOne={props.digitOne}
		digitTwo={props.digitTwo}
		digitThree={props.digitThree}
		digitFour={props.digitFour}
		digitFive={props.digitFive}
		digitSix={props.digitSix}
	
		/>
		</>
	);
};

export default Home;
