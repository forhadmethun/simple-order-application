import React from 'react';
import Nav from "./nav/Nav";
import Order from "./order/order";
function HomePage() {
    return (
        <div>
            <Nav/>
            <div className="pusher">
                <div className="ui padded grid" style={{maxWidth: '85%', paddingLeft: '25px'}}>
                    <div className="equal width row">
                        <div className="column">
                          <Order/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;