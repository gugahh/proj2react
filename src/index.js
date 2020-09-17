// Import React and ReactDOC Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create the React Component
const App = () => {

	const buttonText = { 
		description: 'Kenobi', 
		age: 15,
		toString : function () {
			return this.description; 
		}
	};

	const style = { 
		color: 'white', 
		backgroundColor: 'blue' 
	};

	return (
		<div>
			<label htmlFor="name" className="label">Nome:</label>
			<input type="text" id="name"/>
			<button style={style}>
				{buttonText.toString()}
			</button>
		</div>
	);
}

// Take the react component and show it on Screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
