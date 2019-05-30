import React, { Component } from 'react';
import Menu from './Menu';
import NavMobile from './NavMobile';
import { Link } from "react-router-dom";
 
class NavTop extends Component {

	constructor (props) {
    super(props);

    this.state = {
			menuStatus: false,
			activePage: props.activePage || "HOME",
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
		const research = this.props.activePage === "research";
		const visual = this.props.activePage === "visual";
		const contact = this.props.activePage === "contact";

		const resClass = research ? "menu bold" : "menu";
		const visClass = visual ? "menu bold" : "menu";
		const conClass = contact ? "menu bold" : "menu";

		const homeClass = "nav-top";
		const hamburgerClass = "hamburger";
		const mobileClass = this.state.menuStatus ? "nav-mobile open" : "nav-mobile closed";

    return 	(
			<nav className={homeClass}>
				<NavMobile 	status={mobileClass} 
										menuToggle={this.menuToggle} 
										entries={this.state.entries}
										images={this.state.images}
										activeImage={this.activeImage}
										/>
				<ul className="flex">
					<li className="col-9-12 left">						
						<Link to='/'><h1 className="click grey">machine</h1><br/></Link>
						<Link to='/'><h1 className="click black">inq</h1></Link>
						<Link to='/'><h1 className="click grey">uiry</h1><br/></Link>
						<Link to='/'><h1 className="click black">studio</h1></Link>	
					</li>
					<li className="col-3-12 right">
						<Link to='/'><h2 id='nav' className={resClass}>research</h2></Link>
						<Link to='/visual/'><h2 id='nav' className={visClass}>visual</h2></Link>
						<Link to='/contact/'><h2 id='nav' className={conClass}>contact</h2></Link>
						<Menu x1="0" x2="60" className={hamburgerClass} onClick={this.handleClick} />
					</li>
				</ul>
			</nav>
		);
  }
}

export default NavTop;