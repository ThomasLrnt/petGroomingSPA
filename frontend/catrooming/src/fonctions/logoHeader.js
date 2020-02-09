import React from 'react';
import img from '../ressources/catHeader.jpg';
import {Image} from 'react-bootstrap';

function LogoHeader() {
  // Retourne l'image dans les balises correspondantes
  return <div id="logo"><Image src={img}  fluid alt="Logo"/></div>;
}

export default LogoHeader;