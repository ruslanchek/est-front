import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';
import { managers } from './managers';

ReactDOM.render(React.createElement(App), document.getElementById('app'));

window.managers = managers;

let timer = null;

window.addEventListener('scroll', () => {
	clearTimeout(timer);

	if (!document.body.classList.contains('disable-hover')) {
		document.body.classList.add('disable-hover');
	}

	timer = setTimeout(() => {
		document.body.classList.remove('disable-hover');
	}, 100);
}, false);