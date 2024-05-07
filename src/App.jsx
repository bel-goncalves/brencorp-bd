import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import Visualizar from './components/Visualizar';
import { ProfileDataProvider } from './util/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <ProfileDataProvider>
        <div className="bodyContainer">
          <div className="headerContainer">
            <Header />
          </div>
          <div className="contentContainer">
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="visualizar" element={<Visualizar />} />
            </Routes>
          </div>
          <div className="footerContainer">
            <Container>
              <Footer />
            </Container>
          </div>
        </div>
      </ProfileDataProvider>
    </BrowserRouter>
  );
};

export default App;
