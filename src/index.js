import React from 'react'; //syntax for loading and creating modules in js
//not supported in browsers and node.js

import App from './App';
import ReactDOM from 'react-dom';  //npm install react-dom
import './index.css';
import reportWebVitals from './reportWebVitals';
//import QuestionDetails from './components/QuestionDetails';
//import { QuestionDetails, AnswerDetails } from './components/QuestionDetails';
//import { AnswerDetails } from './components/AnswerDetails';
import QuestionShowPage from './components/QuestionShowPage';
import {QuestionIndexPage} from './components/QuestionIndexPage'

ReactDOM.render(
  //<QuestionShowPage />, //write component like they are html tags
  //<QuestionIndexPage />,
  <App />,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();