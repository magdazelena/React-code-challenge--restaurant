import React from 'react';
import Header from './components/layout/Header';
import { Route } from 'react-router-dom';
import Landing from './pages/Landing';
import './style/base.scss';
import PickDish from './pages/PickDish';
function App() {
  return (
    <div className="content">
      <div class="wrapper">
        <Header />
        <div class="content-page">
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
        </div>
      </div>
    </div>
  );
}

export default App;
