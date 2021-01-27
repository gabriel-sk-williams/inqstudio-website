import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Inqstyles.css';

class EntryList extends Component {

  constructor (props) {
    super(props);

    this.state = {
      entries: props.entries || [],
      activeEntry: props.activeEntry || 1
    }
  }
  
  handleClick = (index) => (event) => {
    this.setState({
      activeEntry: index,
    });
    this.props.onClick(index);
  }

  render() {
    const list = this.state.entries.map((entry) => {
      const i = entry.index;
      const link = "/research/" + entry.number;
      
      if (i !== this.state.activeEntry){
        return(
          <Link to={link} key={i}>
            <div className="slow-appear grid-break right">
              <h3 className="click">{entry.number + ": " + entry.title}</h3>
              <h2 className="italic">{entry.tags}</h2>
            </div>
          </Link>               
        );
        }else{
          return null;
        }
    })

    return (
      <div>
          {list}
      </div>
    );
  }
}

export default EntryList;