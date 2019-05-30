import React, { Component } from 'react';
import Research from './Research';
import './Inqstyles.css';

class Inq002 extends Component {

  constructor () {
    super();

    this.state = {
      activeEntry: 2,
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

export default Inq002;