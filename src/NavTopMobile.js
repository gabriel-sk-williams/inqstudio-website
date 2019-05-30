import React, { Component } from 'react';
import ExitShape from './ExitShape';
 
class NavTopMobile extends Component {

	handleClick = () => {
        this.props.menuToggle();
	}

	render() {
        const exitClass = "exit-shape";

        return 	(
            <nav className="">
                <div className="nav-table">
                    <div className="mobile-left col-6-12"
                              onClick={this.handleClick}>
                    </div>
                    <div className="mobile-right col-6-12">
                        <ExitShape x1="0" x2="50" className={exitClass} onClick={this.handleClick} />
                    </div>
                </div>
            </nav>
        );
    }
}





export default NavTopMobile;