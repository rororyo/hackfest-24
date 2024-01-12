import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
