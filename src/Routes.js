import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '2.jsx/App';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};
export default Routing;
