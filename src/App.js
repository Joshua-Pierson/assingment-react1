import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './components/Registration';


function App() {
  const products = ['Laptop', 'Phone'];

  return (
    <>
      <Header />
      <Registration items={products} />
      <Footer />
    </> 
  );
}

export default App;
