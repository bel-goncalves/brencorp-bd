import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bodyContainer">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="contentContainer">
        <Content />
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
