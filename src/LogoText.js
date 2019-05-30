import React, { Component } from 'react';
 
class NavTop extends Component {

	constructor () {
    super();

    this.state = {
      menuStatus: false,
    }
  }

	handleClick = () => {
		this.menuToggle();
	}

	menuToggle = () => {
        this.setState({
            menuStatus: !this.state.menuStatus
        });
	}

	render() {
		const grey = '#3F3F3F';
        const black = '#5A5A5A';
    return 	(
        <div>
            <h1 style={{color:{grey}}}>machine</h1>
            <h1 style={{color:{black}}}>inq</h1>
            <h1 style={{color:{grey}}}>uiry</h1>
            <h1 style={{color:{black}}}>studio</h1>
        </div>
	);
  }
}





export default NavTop;