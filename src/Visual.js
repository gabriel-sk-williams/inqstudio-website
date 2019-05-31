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
        title: "Auto Asphyxiation",
        subtext: "Studies of Detroit before and after the construction of its interstate highway system.",
        thumb: 'detroitSquare.jpg',
        files: ['detroit0', 'detroit1', 'detroit2', 'detroit3', 'detroit4', ],
        index: 0
      },
      {
        title: "Powerlifting Trophies",
        subtext: "3D resin-printed body scans with S&S Barbell.",
        thumb: 'trophySquare.jpg',
        files: ['trophy0', 'trophy1'],
        index: 1
      },
      {
        title: "The Crucifixion of Overtown",
        subtext: "Studies of Overtown, an historically black neighborhood in Miami, after the construction of I-95",
        thumb: 'miamiSquare.jpg',
        files: ['miami0', 'miami1', 'miami2'],
        index: 2
      },
      {
        title: "codebasis.nyc - Alpha",
        subtext: "A three.js application for visualizing the New York City Zoning Code",
        thumb: 'codeSquare.jpg',
        files: ['code0'],
        index: 3
      },
      {
        title: "Chicken Coop",
        subtext: "Product design with McKenzie Craft, Miami.",
        thumb: 'coopSquare.jpg',
        files: ['coop0', 'coop1'],
        index: 4
      },
      {
        title: "Compact Desk",
        subtext: "CNC-Milled assembly for compact spaces.",
        thumb: 'deskSquare.jpg',
        files: ['desk0', 'desk1', 'desk2', 'desk3'],
        index: 5
      },
      {
        title: "Infinite Field",
        subtext: "Modular wall design with Jacob Brillhart, AIA.",
        thumb: 'fieldSquare.jpg',
        files: ['field0', 'field1', 'field2'],
        index: 6
      }]
    }
  }

  changeSelected = (id) => {
    this.setState({ 
      activeImg: id,
    })
  }

  calcMaxDrag = () => {
    const images = (this.state.images.length-1)*180;
    const breaks = (this.state.images.length-2)*60;
    return -(images + breaks - 600);
  }

  render() {
    const { images, activeImg } = this.state;
    const maxDrag = this.calcMaxDrag();
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
              <Thumbnails onClick={this.changeSelected} 
                          images={images} 
                          activeImage={activeImg} 
                          maxDrag={maxDrag} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Visual;