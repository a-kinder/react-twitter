import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './components/NotFound'
import App from './components/App';
import { BrowserRouter, Match, Miss } from 'react-router'
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
		)
}

ReactDOM.render (<Root/>, document.querySelector('#root'));
