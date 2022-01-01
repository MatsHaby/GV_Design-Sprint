import React, { useEffect, useState } from 'react';
import logo from '../../assets/svg/muledWine.svg';
import getWindowDimensions from './WindowDimensions';

const Navbar = ({ dropdownMenu, setDropdownMenu }) => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    // Get window dimensions
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {
        setDropdownMenu(!dropdownMenu);
        console.log(dropdownMenu)
    };

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-content'>
                <figure className='navbar-logo'>
                    <img src={logo} alt='Muled Wine Logo' /> 
                </figure>
                <div className='navbar-menu'>
                    {windowDimensions.width < 1024 && (
                        <div className={dropdownMenu ? 'menu-btn is-active' : 'menu-btn'} onClick={handleClick}>
                            <div className='menu-burger'/>
                        </div>
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
        </nav>
        <nav className={dropdownMenu ? 'dropdown-menu-wrap is-active' : 'dropdown-menu-wrap'}>
            <div className={dropdownMenu ? 'dropdown-menu is-active' : 'dropdown-menu'}>
                <ul className='menu-links dropdown'>
                    <li>Årets smaker</li>
                    <li>Tidigare års <br /> smaker</li>
                    <li>Om Glögga AB</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
