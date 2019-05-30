import React, { Component } from 'react';
import NavTop from './NavTop';
import Thumbnails from './Thumbnails';
import Viewer from './Viewer';
import './Inqstyles.css';

class Visual extends Component {

  constructor (props) {
    super(props);

    this.state = {
      activeImg: 0,
      images: 
      [{
        title: "Powerlifting Trophies",
        subtext: "3D resin-printed body scans with S&S Barbell.",
        thumb: 'trophySquare.jpg',
        files: ['trophy0', 'trophy1'],
        index: 0
      },
      {
        title: "Chicken Coop",
        subtext: "Product design with McKenzie Craft, Miami.",
        thumb: 'coopSquare.jpg',
        files: ['coop0', 'coop1'],
        index: 1
      },
      {
        title: "Compact Desk",
        subtext: "CNC-Milled assembly for compact spaces.",
        thumb: 'deskSquare.jpg',
        files: ['desk0', 'desk1', 'desk2', 'desk3'],
        index: 2
      },
      {
        title: "Infinite Field",
        subtext: "Modular wall design with Jacob Brillhart, AIA.",
        thumb: 'fieldSquare.jpg',
        files: ['field0', 'field1', 'field2'],
        index: 3
      }]
    }
  }

  changeSelected = (id) => {
    this.setState({ 
      activeImg: id,
    })
  }

  render() {
    const { images, activeImg } = this.state;
    return (
      <section>
        <div className="container table">
          <NavTop activePage="visual" images={images} onClick={this.changeSelected} />
          <div className="visual flex table grid-break">
            <div className="main col-9-12">
              <Viewer images={images} activeImage={activeImg} />
            </div>
            <div className="col-2-12"/>
            <div className="sidebar">
              <Thumbnails onClick={this.changeSelected} images={images} activeImage={activeImg} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Visual;