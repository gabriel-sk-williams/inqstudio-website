import React, { Component } from 'react';
import I000 from './I000';
import I001 from './I001';
import I002 from './I002';
import I003 from './I003';
import I004 from './I004';
import EntryList from './EntryList';
import './Inqstyles.css';

class Research extends Component {

  constructor (props) {
    super(props);

    this.state = {
      activeEntry: props.activeEntry || 0,
      entries: props.entries || []
    }
  }

  componentWillUpdate(nextProps) {
    if(this.props !== nextProps) {
      this.setState({ activeEntry: nextProps.activeEntry });
    }
  }

  changeEntry = (index) => {
    this.setState({ activeEntry: index, });
    this.props.changeEntry(index);
  }

  render() {
    const { activeEntry, entries } = this.state;
    const content =
      activeEntry === 0 ? <I000 entries={entries} /> :
      activeEntry === 1 ? <I001 /> :
      activeEntry === 2 ? <I002 /> :
      activeEntry  === 3 ? <I003 /> :
      activeEntry  === 4 ? <I004 /> : null;

    const sidebar = activeEntry === 0
      ? null
      : <EntryList
          activeEntry={activeEntry} 
          entries={entries}
          onClick={this.changeEntry}
        />;

    const entry = entries[activeEntry];

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
    );
  }
}

export default Research;