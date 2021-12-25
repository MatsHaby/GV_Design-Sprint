import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Cookie from './components/Cookie/Cookie.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.scss';

function App() {
    const [visibleCookie, setVisibleCookie] = useState(true);
    const [dropdownMenu, setDropdownMenu] = useState(false);

    return (
        <div className="App">
            <Navbar 
                dropdownMenu={dropdownMenu}
                setDropdownMenu={setDropdownMenu}/> 
            <Header />
            {visibleCookie && (
                <Cookie
                    visibleCookie={visibleCookie}
                    setVisibleCookie={setVisibleCookie}
                />
            )}
        </div>
    );
}

export default App;
