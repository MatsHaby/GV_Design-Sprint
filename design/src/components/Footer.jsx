import React from 'react'

const Footer = () => {

 return (
  <footer className="footer">
   <div className="footer-item first">
    <p>GLÖGGA AB</p>
    <p>Glöggvägen 24<br />123 45 Glöggköping</p>
    <p>010-11 22 333<br />kundservice@glogga.se</p>
   </div>
   <div className="footer-item second">
    <a href="#">OM OSS</a>
    <a href="#">JOBBA HÄR</a>
    <a href="#">KÖPVILLKOR</a>
    <a href="#">FAQ</a>
   </div>
   <div className="footer-item third">
    <a href="#"><img src="images/instagram.png" alt="" /></a>
    <a href="#"><img src="images/facebook.png" alt="" /></a>
    <a href="#"><img src="images/twitter.png" alt="" /></a>
    <a href="#"><img src="images/youtube.png" alt="" /></a>
   </div>
  </footer>
 )
}

export default Footer
