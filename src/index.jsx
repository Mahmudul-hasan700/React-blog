// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'; // Your main CSS file

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// Add the following code to dynamically add or remove 'dark' class
const storedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
document.documentElement.classList.toggle('dark', storedDarkMode);