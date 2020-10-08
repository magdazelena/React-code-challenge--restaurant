import React from 'react';
import Header from './components/layout/Header';
import { Route } from 'react-router-dom';
import Landing from './pages/Landing';
import './style/base.scss';
import PickDish from './pages/PickDish';
import PickDrink from './pages/PickDrink';
function App() {
  return (
    <div className="content">
      <div className="wrapper">
        <Header />
        <div className="content-page">
          <Route
            exact
            path="/"
            component={Landing}
          />
          <Route
            exact
            path="/pick-dish"
            component={PickDish}
          />
          <Route
            exact
            path="/pick-drink"
            component={PickDrink}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
