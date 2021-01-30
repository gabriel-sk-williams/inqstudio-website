import React, { Component } from 'react';
import ClientList from './ClientList';
import './Inqstyles.css';

class Profile extends Component {

  description = () => {
    return (
      <div className="appear half-break">
        <h3>inqstudio is an interdisciplinary practice based in New York City, specializing in the development of products and services on the frontier of sustainability, design, and urbanism.</h3><br/><br/>
        <h3 className="bold">• urban research and visualization</h3>
        <h3>we are dedicated to cities and their infrastructures, bringing a deep wealth of practical, historical, and theoretical knowledge to bear on issues of housing, transport, access, and land-use.</h3><br/>
        <h3 className="bold">• app development</h3>
        <h3>specialized, internal-facing applications are becoming essential frameworks for organizations and institutions looking for a dynamic approach to new problems. marketing and production pipelines.</h3><br/>
        <h3 className="bold">• data analysis</h3>
        <h3>some project pipelines require the curation and maintenance of novel datasets in service of more complex insights. from simple database queries to multi-dimensional analytics, our process is collaborative and client-specific.</h3><br/>
        <h3 className="bold">• 3D modeling, rendering, prototyping and printing</h3>
        <h3>some ideas are best worked out in three dimensions. our firm provides the technical expertise to bring specialized installations, prototypes physical projects to fruition. art, architecture, and product</h3>
        <div className="col-12-12 grid-break">
          <ClientList/>
        </div>
      </div>
    );
  };

  render() { 
    return (
      <div className="flex table grid-break">
        <div className="main col-8-12">
          <h4 className="quick-appear">research | tech | cities | design | architecture</h4>
          {this.description()}
        </div>
        <div className="col-1-12" />
        <div className="slow-appear right col-3-12">
          <div className="mobile-break flex-right">
            <div className="mobile-destroy clear-divider col-6-12" />
            <div className="mobile-destroy divider col-6-12" />
          </div>
          <h5>Gabriel Williams</h5>
          <a href="mailto:gabrielskwilliams@gmail.com">
            <h5 className="link"> gabrielskwilliams@gmail.com </h5>
          </a>
          <h5>917.755.8500</h5>
          <div className="flex-right">
            <div className="clear-divider col-6-12" />
            <div className="divider col-6-12" />
          </div>
          <h5>Follow us on:</h5>
          <a rel="noopener noreferrer"
             href={"https://www.instagram.com/machineinquirystudio/?hl=en"}
             target="_blank">
            <h5 className="link">Instagram</h5>
          </a>
          <a rel="noopener noreferrer"
             href={"https://www.linkedin.com/in/gabriel-williams-50128040/"}
             target="_blank">
            <h5 className="link">LinkedIn</h5>
          </a>
          <a rel="noopener noreferrer"
             href={"https://twitter.com/FUTUREDOME3000"}
             target="_blank">
            <h5 className="link">Twitter</h5>
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;