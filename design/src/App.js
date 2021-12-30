import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Glogg from './components/Glogg/Glogg.jsx';
import Cookie from './components/Cookie/Cookie.jsx';

import './App.scss';

function App() {

    const [visibleCookie, setVisibleCookie] = useState(true);

    return (
        <div className="App">
            <Header />
            <Glogg />
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
