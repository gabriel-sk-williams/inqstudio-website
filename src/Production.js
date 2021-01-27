import React, { Component } from 'react';
import NavTop from './NavTop';
import ThumbnailGrid from './ThumbnailGrid';
import Viewer from './Viewer';
import './Inqstyles.css';

class Production extends Component {

  constructor () {
    super();

    this.state = {
      viewer: false,
      index: 0,
      images:
      [{
        title: "Parking Analysis in Los Angeles",
        subtext: "With plans to construct their own new coliving development, Common commissioned our analysis on the massive municipal datasets for Culver City and Greater Los Angeles. Since most residents of Los Angeles are dependent on their cars, residential developers are forced to building expensive parking garages and pass along the cost to their tenants. The only way to break the cycle of auto-centricity is to build denser housing and promote walkability—by locating existing garages and referencing them with recent construction trends, Six Peak Capital could run improved calculations on the possibility of reduced parking.",
        thumb: ['culverSquare.jpg', 'culverSquare.jpg'],
        files: ['culver0.jpg'],
        index: 0
      },
      {
        title: "Auto Asphyxiation",
        subtext: "Detroit is America's most prominent illustration of urban decay: when the Motor City reached in economic and populous apex in 1950, it had seen a doubling of its African-American population, primarily in the city center, to meet demand for new manufacturing jobs over two decades of explosive growth. Racial tensions were crystallized in the Federal Home Loan Bank Board's Infamous 1939 'redlining' surveys, shown here overlayed by the 1955 'Yellow Book' drawing for the implementation of the Federal Aid Highway ACt. Notably, Detroit's 'Black Bottom' neighborhood was utterly dismembered by the construction of I-75 in the 60's and 70's [Aerial photos: 1949 and 1981].",
        thumb: ['detroitSquare.jpg', 'detroitSquare.jpg'],
        files: ['detroit0.jpg', 'detroit1.jpg', 'detroit2.jpg', 'detroit3.jpg', 'detroit4.jpg' ],
        index: 1
      },
      {
        title: "Powerlifting Trophies",
        subtext: "New York City's tech-adjacent powerlifting gym, S&S Strength, was looking for a distinguishing process for their tournament trophies. We scanned the winners of the previous competition with a Kinect and refined the mesh in Autodesk Maya. The trophies are now 3D resin-printed with their own hardware each year.",
        thumb: ['trophySquare.jpg', 'trophySquare.jpg'],
        files: ['trophy0.jpg', 'trophy1.jpg'],
        index: 2
      },
      {
        title: "The Crucifixion of Overtown",
        subtext: "By the end of the 1950's, Overtown was a burgeoning community of black-owned homes and businesses, and one of Miami's cultural epicenters for food, entertainment, and live jazz. The Sir John Hotel, highlighted in red, was a hub for black performers and the site of Cassius Clay's iconic pool workout spread for Life magazine. No surprise then, that Overtown was slated for redevelopment as part of the Federal-Aid Highway Act of 1956. There is a strong pattern of minority communities being razed for new Interstates across the US.",
        thumb: ['miamiSquare.jpg', 'miamiSquare.jpg'],
        files: ['miami0.jpg', 'miami1.jpg', 'miami2.jpg'],
        index: 3
      },
      {
        title: "West 104th Street",
        subtext: "Presentation renderings for affordable student housing in the Upper West Side, in collaboration with Radu Architects. Modeled and rendered in Autodesk Maya.",
        thumb: ['raduSquare.jpg', 'raduSquare.jpg'],
        files: ['radu0.jpg', 'radu1.jpg', 'radu2.jpg'],
        index: 3
      },
      {
        title: "codebasis alpha",
        subtext: "codebasis.nyc is an initial prototype for our forthcoming flagship product. The current New York City Zoning Code is a byzantine document, often requiring the consult of a land-use expert in the design of any new construction in the five boroughs. Seeing how the Code reduced architectural and urban design to an algorithm, we developed a web application that would visualize those constraints, and demostrate the potentially democratizing effect of a new platform.",
        thumb: ['codeSquare.jpg', 'codeSquare.gif'],
        files: ['code1.gif', 'code2.gif', 'code3.gif',],
        index: 4
      },
      {
        title: "Chicken Coop",
        subtext: "Part of a series of 'Craft-Inspired Pieces' for production and marketing on a commercial scale. This lightweight coop sits atop extruded aluminum to prevent wood rot; the rear opens up to allow egg collection and removal of the floor for cleaning and replacement. The cedar cladding is seared with the traditional Japanese 'shou sugi ban' method.",
        thumb: ['coopSquare.jpg', 'coopSquare.jpg'],
        files: ['coop0.jpg', 'coop1.jpg'],
        index: 5
      },
      {
        title: "Compact Desk",
        subtext: "The Compact Desk is an antithesis to global distribution models, which render opaque any sense of location, process, or human labor. The design is a modification of open-source furniture schematics to include a tray for mouse and keyboard. The plywood is sourced from a second-hand distributor, automatically CNC-milled in Bushwick, and transported via TaskRabbit to a nearby community woodshop, where the final assembly took place.",
        thumb: ['deskSquare.jpg', 'deskSquare.jpg',],
        files: ['desk0.jpg', 'desk.jpg', 'desk2.jpg', 'desk3.jpg'],
        index: 6
      },
      {
        title: "Infinite Field",
        subtext: "Award-winning architect Jacob Brillhart approached our studio with aims to develop a modular wall design in the spirit of Erwin Hauer, an Austrian sculptor known his for exercises in perpetual minimalism. When two-dimensional sketches proved insufficient, we turned to 3D-printed process models, from which a final design ultimately emerged.",
        thumb: ['fieldSquare.jpg', 'fieldSquare.jpg'],
        files: ['field0.jpg', 'field1.jpg', 'field2.jpg'],
        index: 7
      },
      {
        title: "A Woonerf in Maitland",
        subtext: "Canin Associates commissioned this project on behalf of the mayor of Maitland, Florida, who sought a new vision for the town's urban core. Five blocks of tired businesses, outdated architecture, and blazing hot parking lots would channel the woonerf: a Dutch street system where sidewalks and streets occur at the same elevation, blurring conventional boundaries and allowing vehicles, pedestrians, and cyclists to coexist.",
        thumb: ['maitlandSquare.jpg', 'maitlandSquare.jpg'],
        files: ['maitland0.jpg', 'maitland1.jpg', 'maitland2.jpg'],
        index: 8
      }]
    }
  }

  setImage = (id) => {
    if (id !== this.state.index) {
      this.setState({
        index: id,
        viewer: true
      }); 
    }else{
      this.setState({
        index: id,
        viewer: !this.state.viewer
      }); 
    }
  }

  render() {
    const { viewer, index, images } = this.state;
    const fileset = images[index];
    const disp = viewer ? "active-viewer" : "hidden-viewer"
    const displayClass = "col-12-12 half-break " + disp;
    return (
      <section>
        <div className="container table">
          <NavTop activePage="production" images={images} onClick={this.setImage} />
              <div className={displayClass}>
                <Viewer display={fileset} />
              </div>
              <div className="col-12-12">
                <ThumbnailGrid index={index} images={images} onClick={this.setImage} />
              </div>
        </div>
      </section>
    );
  }
}

export default Production;