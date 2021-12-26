import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Cookie from './components/Cookie/Cookie.jsx';
import Glogg from './components/Glogg/Glogg.jsx';
import './App.scss';

function App() {
    const [visibleCookie, setVisibleCookie] = useState(true);

    return (
        <div className="App">
            <Header />
            {visibleCookie && (
                <Cookie
                    visibleCookie={visibleCookie}
                    setVisibleCookie={setVisibleCookie}
                />
            )}

            <Glogg />
        </div>
    );
}

export default App;
