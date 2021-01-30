import React, { Component } from 'react';
import Research from './Research';
import Production from './Production';
import Profile from './Profile';
import NavTop from './NavTop';

class InqStudio extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activePage: props.activePage || "production",
            entries: props.entries || [],
            activeEntry: props.activeEntry || 0,
            projects: props.projects || [],
            activeProject: props.activeProject || 0,
            displayViewer: false
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                activePage: nextProps.activePage,
                activeEntry: nextProps.activeEntry
            });
        }
    }

    handleClick = (id) => {
        this.setState({
            activePage: "production",
            activeProject: id,
            displayViewer: true
        })
    }

    render() {
        const { activePage, entries, activeEntry } = this.state;
        const { projects, activeProject, displayViewer} = this.state;
        const component = activePage === "production"
            ? <Production 
                displayViewer={displayViewer}
                projects={projects} 
                activeProject={activeProject} 
            />
            : activePage === "research"
            ? <Research
                activeEntry={activeEntry} 
                entries={entries} 
              />
            : <Profile />

        return (
            <section>
                <div className="container table">
                    <NavTop 
                        activePage={activePage}
                        projects={projects} 
                        entries={entries} 
                        onClick={this.handleClick}
                    />
                    {component}
                </div>
            </section> 
        );
    }
}

export default InqStudio;