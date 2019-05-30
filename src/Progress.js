import React, { Component } from 'react';
import './Inqstyles.css';

class Progress extends Component {

  constructor () {
    super();

    this.state = {
      progress: 0,
    }
  }
  
  componentDidMount() {
  }

  render() {
    
    return (
        <div className="break right">
            {this.props.children}
        </div>
    );
  }
}

export default Progress;