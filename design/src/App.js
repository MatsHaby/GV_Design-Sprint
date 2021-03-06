import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Glogg from './components/Glogg/Glogg.jsx';
import Cookie from './components/Cookie/Cookie.jsx';

import Navbar from './components/Navbar/Navbar.jsx';

import './App.scss';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';

function App() {

    const [visibleCookie, setVisibleCookie] = useState(true);
    const [dropdownMenu, setDropdownMenu] = useState(false);

    return (
        <div className="App">
            <Navbar 
                dropdownMenu={dropdownMenu}
                setDropdownMenu={setDropdownMenu}/> 
            <Header />
            <Glogg />
            {visibleCookie && (
                <Cookie
                    visibleCookie={visibleCookie}
                    setVisibleCookie={setVisibleCookie}
                />
            )}
            <Form />
            <Footer />
        </div>
    );
}

export default App;
