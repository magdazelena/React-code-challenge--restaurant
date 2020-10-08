import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Page from './components/layout/Page';
import './style/base.scss';
function App() {
  return (
    <div className="content">
      <div class="wrapper">
        <Header />
        <Page />
        <Footer />
      </div>
    </div>
  );
}

export default App;
