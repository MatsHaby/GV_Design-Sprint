import React from 'react';

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
    <a href="#"><img src="../../img/instagram.png" alt="Besök vår Instagram sida" /></a>
    <a href="#"><img src="../../img/facebook.png" alt="Besök vår Facebook sida" /></a>
    <a href="#"><img src="../../img/twitter.png" alt="Besök vår Twitter sida" /></a>
    <a href="#"><img src="../../img/youtube.png" alt="Besök vår Youtube kanal" /></a>
   </div>
  </footer>
 )
}

export default Footer
