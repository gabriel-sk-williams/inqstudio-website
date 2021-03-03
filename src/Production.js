import React, { Component } from 'react';
import ThumbnailGrid from './ThumbnailGrid';
import Viewer from './Viewer';
import './Inqstyles.css';

class Production extends Component {

  constructor (props) {
    super(props);

    this.state = {
      displayViewer: props.displayViewer || false,
      projects: props.projects || [],
      activeProject: props.activeProject || 0
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props !== nextProps) {
      if (this.props.activeProject !== nextProps.activeProject) {
        this.setState({ 
          displayViewer: true,
          activeProject: nextProps.activeProject
        });
      }else{
        this.setState({ displayViewer: false });
      }
    }
  }

  setProject = (id) => {
    if (id !== this.state.activeProject) {
      this.setState({
        activeProject: id,
        displayViewer: true
      }); 
    }else{
      this.setState({
        activeProject: id,
        displayViewer: !this.state.displayViewer
      }); 
    }
    window.scrollTo(0,0);
  }

  render() {
    const { displayViewer, projects, activeProject } = this.state;
    const fileset = projects[activeProject];
    const disp = displayViewer ? "active-viewer" : "hidden-viewer"
    const displayClass = "col-12-12 half-break " + disp;
    return (
      <section>  
        <div className={displayClass}>
          <Viewer display={fileset} />
        </div>
        <div className="col-12-12">
          <ThumbnailGrid 
            activeProject={activeProject} 
            projects={projects} 
            onClick={this.setProject} 
          />
        </div>
      </section>
    );
  }
}

export default Production;