import React, { Component } from 'react';
import Menu from './Menu';
import NavMobile from './NavMobile';
import { Link } from "react-router-dom";
 
class NavTop extends Component {

	constructor (props) {
    super(props);

    this.state = {
			menuStatus: false,
			activePage: props.activePage || "production",
			entries: props.entries || [],
			images: props.images || []
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
	
	activeImage = (id) => {
		this.props.onClick(id);
	}

	render() {
		const production = this.props.activePage === "production";
		const research = this.props.activePage === "research";
		const profile = this.props.activePage === "profile";

		const productClass = production ? "menu bold" : "menu";
		const resClass = research ? "menu bold" : "menu";
		const profileClass = profile ? "menu bold" : "menu";

		const homeClass = "nav-top";
		const hamburgerClass = "hamburger";
		const mobileClass = this.state.menuStatus ? "nav-mobile open" : "nav-mobile closed";

    return 	(
		<nav className={homeClass}>
			<NavMobile 	
				status={mobileClass} 
				menuToggle={this.menuToggle} 
				entries={this.state.entries}
				images={this.state.images}
				activeImage={this.activeImage}
			/>
			<ul className="flex">
				<li className="col-10-12 left">						
					<Link to='/'><h1 className="click grey">machine</h1><br/></Link>
					<Link to='/'><h1 className="click black">inq</h1></Link>
					<Link to='/'><h1 className="click grey">uiry</h1><br/></Link>
					<Link to='/'><h1 className="click black">studio</h1></Link>	
				</li>
				<li className="col-2-12 right">
					<Link to='/'><h2 id='nav' className={productClass}>production</h2></Link>
					<Link to='/research/000'><h2 id='nav' className={resClass}>research</h2></Link>
					<Link to='/profile/'><h2 id='nav' className={profileClass}>profile</h2></Link>
					<Menu x1="0" x2="80" className={hamburgerClass} onClick={this.handleClick} />
				</li>
			</ul>
		</nav>
	);
  }
}

export default NavTop;