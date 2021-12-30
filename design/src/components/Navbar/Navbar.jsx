import React, { useEffect, useState } from 'react';
import logo from '../../assets/svg/muledWine.svg';
import getWindowDimensions from './WindowDimensions';



const Navbar = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  // Get window dimensions
  useEffect(() => {
    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <figure className='navbar-logo'>
                    <img src={logo} alt='Muled Wine Logo' /> 
                </figure>
                <div className='navbar-menu'>
                    {windowDimensions.width < 1024 && (
                        <div className='menu-burger'></div>
                    )}
                    {windowDimensions.width >= 1024 && (
                        <ul className='menu-links'>
                            <li>Årets smaker</li>
                            <li>Tidigare års smaker</li>
                            <li>Om Glögga AB</li>
                            <li>Kontakt</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
