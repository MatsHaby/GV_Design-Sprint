import React from 'react';

const Cookie = ({ visibleCookie, setVisibleCookie }) => {
    const acceptHandler = () => {
        setVisibleCookie(!visibleCookie);
    };

    return (
        <div className="cookie">
            <div className="cookie-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <button onClick={acceptHandler} className="btn cookie__button">
                Accept
            </button>
        </div>
    );
};

export default Cookie;