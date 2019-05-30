import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavTopMobile from './NavTopMobile';

class NavMobile extends Component {

    constructor (props) {
        super(props);
    
        this.state = {
            entries: props.entries || [],
            images: props.images || [],
        }
      }

    changeImage = (id) => {
        this.props.activeImage(id);
    }

    menuToggle = () => {
        this.props.menuToggle();
    }

    render() {
        const researchList = this.state.entries.map((entry, i) => {
            const link = entry.number;
            return (
                <Link to={link} key={i}>
                    <h4 className="click">{entry.number + ": " + entry.title}</h4>
                </Link>
            );
        })

        const imageList = this.state.images.map((img) => {
            const id = img.index;
            return (
                <h4 key={id} className="click" onClick={() => this.changeImage(id)}>{img.title}</h4>
            );
        })

	    return (
            <div id="nav-mobile" className={this.props.status}>
                <div className="mobile-container">
                <NavTopMobile menuToggle={this.menuToggle} onClick={this.menuToggle}/>
                    <ul className="flex-column triple-break">
                        <li className="left" onClick={this.menuToggle}>
                            <Link to='/'><h1 className="click grey">machine</h1><br/></Link>
                            <Link to='/'><h1 className="click black">inq</h1></Link>
                            <Link to='/'><h1 className="click grey">uiry</h1><br/></Link>
                            <Link to='/'><h1 className="click black">studio</h1></Link>
                        </li>
                        <li className="left half-break" onClick={this.menuToggle}>
                            <Link to='/'><h1>Research</h1></Link>
                            <div className="list-select">
                                {researchList}
                            </div>
                        </li>
                        <li className="left half-break" onClick={this.menuToggle}>
                            <Link to='/visual/'><h1>Visual</h1></Link>
                            <div className="list-select">
                                {imageList}
                            </div>
                        </li>
                        <li className="left half-break" onClick={this.menuToggle}>
                            <Link to='/contact/'><h1>Contact</h1></Link>
                        </li>
                    </ul>
                </div>
            </div>
	    );
    }
}

export default NavMobile;