import React from 'react';
import Champagne from "/Users/durreshewarmalik/repos/HTML_CSS/GV_Design-Sprint/design/src/assets/img/champagne.jpg";
import Pear from "/Users/durreshewarmalik/repos/HTML_CSS/GV_Design-Sprint/design/src/assets/img/berries.jpg";
import Berries from "/Users/durreshewarmalik/repos/HTML_CSS/GV_Design-Sprint/design/src/assets/img/margaret.jpg";
import Saffron from "/Users/durreshewarmalik/repos/HTML_CSS/GV_Design-Sprint/design/src/assets/img/saffron.jpg";





const Glogg = () => {
    return (
        <div className="glogg-container">
            <div className="glogg-row1">
                <h1 className="glogg-h1">Årets glöggsmaker</h1>
            </div>

            <div className="glogg-row2">
                <div className="glogg-ribbon">
                    <p className="glogg-ribbon-text">Passar till chokladälskare och miljömedvetna</p>
                </div>
                <p className="glogg-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="glogg-row3">
                <div className="glogg">
                    <img src={Champagne} alt="glogg1" width="300px" height="300px"/>
                    <div className="gloggText">
                        <h4>Champagne</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    </div>
                </div>
                <div className="glogg">
                    <img src={Berries} alt="glogg1" width="300px" height="300px"/>
                    <div className="gloggText">
                        <h4>Rönnbär</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    </div>
                </div>
                <div className="glogg">
                    <img src={Pear} alt="glogg1" width="300px" height="300px"/>
                    <div className="gloggText">
                        <h4>Päron</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    </div>
                </div>
                <div className="glogg">
                    <img src={Saffron} alt="glogg1" width="300px" height="300px"/>
                    <div className="gloggText">
                        <h4>Saffran</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Glogg;