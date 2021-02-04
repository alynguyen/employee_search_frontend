import React from 'react';
import './App.css';
import { ContextProvider } from './ContextProvider';
import Home from './components/Home';

const App = () => {
	return (
		<ContextProvider>
			<Home />
		</ContextProvider>
	);
}

export default App;
