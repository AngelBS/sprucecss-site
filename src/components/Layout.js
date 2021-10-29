import React from 'react';
import { Helmet } from "react-helmet";

// Components
import Header from './Header';
import Footer from './Footer';

// Styles
import '../styles/main.scss';

function Layout(props) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&amp;display=swap" />
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
