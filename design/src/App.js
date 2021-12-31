import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Cookie from './components/Cookie/Cookie.jsx';
import './App.scss';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';

function App() {
    const [visibleCookie, setVisibleCookie] = useState(true);

    return (
        <div className="App">
            {/* <Header />
            {visibleCookie && (
                <Cookie
                    visibleCookie={visibleCookie}
                    setVisibleCookie={setVisibleCookie}
                />
            )} */}
            <Form />
        </div>
    );
}

export default App;
