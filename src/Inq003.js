import React, { Component } from 'react';
import Research from './Research';
import './Inqstyles.css';

class Inq003 extends Component {

  constructor () {
    super();

    this.state = {
      activeEntry: 3,
      progress: 0,
    }
  }

  render() {
    const page = this.state.activeEntry;    
    return (
      <section>  
        <Research activeEntry={page} progress={false} />
      </section>
    );
  }
}

export default Inq003;