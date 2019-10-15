import React, { useState } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import BubblePage from './components/BubblePage';
import Login from "./components/Login";

import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute
          exact
          path='/bubbles'
          component={BubblePage}
        />
      </div>
  );
}

export default App;
