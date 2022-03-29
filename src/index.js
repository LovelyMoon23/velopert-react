import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from 'Routes';

ReactDOM.render(
  // ref나 componentWillMount등 나중에 사라질 옛날 기능을 사용했을 때 경고를 출력. 리애긑 레거시 기능 사용하지 못하게 함.
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
