import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import Visualizar from './components/Visualizar';

const App = () => {
  return (
    <div className="bodyContainer">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="contentContainer">
        <Container>
          <Content />
          <Visualizar />
        </Container>
      </div>
      <div className="footerContainer">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default App;
