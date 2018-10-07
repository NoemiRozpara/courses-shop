import '@mdi/font/css/materialdesignicons.min.css';
import '@mdi/font/fonts/materialdesignicons-webfont.eot';

import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import {AppState, actions} from './app';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={AppState} actions={actions}/>, document.getElementById('root'));
registerServiceWorker();