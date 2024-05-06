import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import Visualizar from './components/Visualizar';
import { ProfileDataProvider } from './util/Profile';

const App = () => {
  return (
    <ProfileDataProvider>
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
    </ProfileDataProvider>
  );
};

export default App;
