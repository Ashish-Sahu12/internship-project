import React from 'react';
import room from '../../public/room.jpg'; 
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


function Applayout() {
  return (
    <div
      className="img-background min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${room})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment : 'fixed',
      }}
    >
      <Header/>     
      <Outlet/> 
      <Footer/>

    </div>
  )
}

export default Applayout;
