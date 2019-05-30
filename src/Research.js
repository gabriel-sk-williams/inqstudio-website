import React, { Component } from 'react';
import NavTop from './NavTop';
import I001 from './I001';
import I002 from './I002';
import I003 from './I003';
import EntryList from './EntryList';
import Progress from './Progress';
import './Inqstyles.css';

class Research extends Component {

  constructor (props) {
    super(props);

    this.state = {
      activeEntry: props.activeEntry || 0,
      progressBar: props.progress || 0,
      entries:
        [{
          number: "001",
          title: "Limits to Sustainability",
          date: "6 March 2019",
          tags: "perpetual motion, Enlightenment ecosystems",
          index: 1
        },
        { 
          number: "002",
          title: "Baby Steps",
          date: "13 April 2019",
          tags: "language, noumena, post-structuralism",
          index: 2
        },
        { 
          number: "003",  
          title: "In Defense of Fahrenheit",
          date: "27 May 2019",
          tags: "metrology, scale, granularity",
          index: 3
        }]
    }
  }

  changeEntry = (index) => {
    this.setState({
      activeEntry: index,
    })
    this.props.changeEntry(index);
  }

  render() {
    const { activeEntry, progressBar, entries } = this.state;
    const content = activeEntry === 1 ? <I001 /> :
                    activeEntry === 2 ? <I002 /> :
                    activeEntry  === 3 ? <I003 /> : null;

    
    const sidebar = progressBar ? <Progress /> :
                                  <EntryList  onClick={this.changeEntry} 
                                              activeEntry={activeEntry} 
                                              entries={entries}/>;                                   
    const entry = entries[activeEntry-1];
    const renderTitle = () => {
      return (
        <div className="quick-appear grid-break" key={entry.index}>
          <h1>{entry.number + ": " + entry.title}</h1>
          <h2>{entry.date}</h2>
          <h2 className="italic">{entry.tags}</h2>
        </div>
      )
    };

    return (
        <section>
          <div className="container table">
            <NavTop activePage="research" entries={this.state.entries} />
          <div className="flex table">
                <div className="main col-8-12">
                  {renderTitle()}
                  {content}
                </div>
                <div className="gap col-1-12"/>
                <div className="sidebar col-3-12">
                  {sidebar}
                </div>
              </div>
          </div>
        </section>  
    );
  }
}

export default Research;