import React from 'react';

//Ui imports
import Hero from '../components/landing/Hero';
import Work from '../components/landing/Work';
import Logo from '../components/landing/Logo';
import Why from '../components/landing/Why';
import Cta from '../components/landing/Cta';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Logo />
      <Why />
      <Cta />
      <Footer />
    </>
  );
}
