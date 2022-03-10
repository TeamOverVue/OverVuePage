import React from 'react';
import ReactDOM from 'react-dom';
import { Body } from "./containers/Body";
import { Footer } from "./containers/Footer";
import { Header } from "./containers/Header";

import * as serviceWorker from './serviceWorker';

const App = () => (
  <div id="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

/** If you want your app to work offline and load faster, you can change
//  unregister() to register() below. Note this comes with some pitfalls.
//  Learn more about service workers: https://bit.ly/CRA-PWA **/
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
