import React from 'react';
import img from '../ressources/catHeader.jpg';

function LogoHeader() {
  // Retourne l'image dans les balises correspondantes
  return <div id="imgLogo"><img src={img} alt="Logo"/></div>;
}

export default LogoHeader;