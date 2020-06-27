import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'alertifyjs/build/css/alertify.min.css'
ReactDOM.render(
  <React.StrictMode>
    <div className="ml-5 mr-5">
    <Navbar />
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
