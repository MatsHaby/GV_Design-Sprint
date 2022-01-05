import React from 'react';
import Twitter from '../assets/img/twitter.png';
import Facebook from '../assets/img/facebook.png';
import Instagram from '../assets/img/instagram.png';
import Youtube from '../assets/img/youtube.png';


const Footer = () => {

 return (
  <footer className="footer">
   <div className="footer-item first">
    <p>GLÖGGA AB</p>
    <p>Glöggvägen 24<br />123 45 Glöggköping</p>
    <p>010-11 22 333<br />kundservice@glogga.se</p>
   </div>
   <div className="footer-item second">
    <a href="www.omoss.se">Om oss</a>
    <a href="www.jobba.se">Jobba här</a>
    <a href="www.vilkor.se">Köpvilkor</a>
    <a href="#">Faq</a>
   </div>
   <div className="footer-item third">
    <a href="#"><img src={Instagram} alt="Besök vår Instagram sida" /></a>
    <a href="#"><img src={Facebook} alt="Besök vår Facebook sida" /></a>
    <a href="#"><img src={Twitter} alt="Besök vår Twitter sida" /></a>
    <a href="#"><img src={Youtube} alt="Besök vår Youtube kanal" /></a>
   </div>
  </footer>
 )
}

export default Footer
