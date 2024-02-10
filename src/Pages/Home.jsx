import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Home-Hero';
import Footer from './Components/Footer';
import './Styles/Global.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <br/>
      <br/>
      <br/>
      <Footer />
      </>
  );
};

export default Home;