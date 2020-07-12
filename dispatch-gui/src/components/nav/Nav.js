import React from 'react';
function Nav() {
    return (
        <div className="ui simple sidebar inverted vertical menu left uncover visible">
            <div className="item">
                <h1>Dispatch</h1>
            </div>
            <div className="item">
                <div className="header"> Menu</div>
                <a className="item">Welcome</a>
            </div>
        </div>
    );
}
export default Nav;