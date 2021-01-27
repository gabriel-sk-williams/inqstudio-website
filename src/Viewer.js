import React, { Component } from 'react';
import Image from './Image';
import './Inqstyles.css';

class Viewer extends Component {

  constructor (props) {
    super(props);

    this.state = {
      display: props.display,
      index: 0
    }
  }

  select = (index) => (event) => {
    this.setState({
      index: index,
    });
  }

  increment = () => {
    this.setState((prevState) => ({
      index: (prevState.index + 1) % prevState.display.files.length
    }))
  }

  componentWillUpdate(nextProps) {
    if(this.props !== nextProps) {
      this.setState({
        display: nextProps.display,
        index: 0
      });
    }
  }

  render() {
    const { title, subtext, files } = this.state.display;
    const index = this.state.index;

    const fileClass = files.map((f, i) => 
      i === index ? "pad-select click bold" : "pad-select click");

    const fileMap = files.map((img, i) =>
      <h6 key={i} className={fileClass[i]} onClick={this.select(i)}>
        {i+1}
      </h6>
    );

    const container = this.state.animated 
      ? <div/> 
      : <div className="image-container" onClick={this.increment}>
          <Image
            src={require("./images/" + files[index])}
            className={"quick-appear center-fit"}
          />;
        </div>
                
    return (
        <section>
          {container}
          <div className="half-break" />
          <div className="flex table">
            <div className="col-9-12">
              <h4>{title}</h4>
              <h5><i>{subtext}</i></h5>
            </div>
            <div className="col-3-12 right">
              {fileMap}
            </div>
          </div>
        </section>  
    );
  }
}


export default Viewer;