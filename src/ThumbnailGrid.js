import React, { Component } from 'react';
// import Image from './Image';
import './Inqstyles.css';

class ThumbnailGrid extends Component {

  constructor (props) {
    super(props);

    this.state = {
      activeImg: props.activeImg || 0,
      images: props.images || [],
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateTranslateValue);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateTranslateValue);
  }

  handleClick = (index) => (event) => {
    this.setState({
      activeImg: index,
    })
    this.props.onClick(index);
  }

  render() {

    const thumbClass = this.state.images.map((img, i) => "thumbnail appear-" + i);
    const thumbs = this.state.images.map((image, i) => {
      const [ stillThumb, gifThumb ] = image.thumb;
      return (
        <div key={i} className="thumb-container" onClick={this.handleClick(i)}>
          <img  
            src={require("./images/" + stillThumb)}
            onMouseOver={e => (e.currentTarget.src = require("./images/" + gifThumb))}
            onMouseOut={e => (e.currentTarget.src = require("./images/" + stillThumb))}
            alt="ja boy"
            className={thumbClass[i]}
          />
        </div>
      );
    });

    return (
      <section className="mobile-touch white-break">
        <div className="flex-grid">
          {thumbs}
        </div>
      </section>
    );
  }
}

export default ThumbnailGrid;

/*
return (
  <div key={i} className="thumb-container" onClick={this.handleClick(i)}>
    <Image  
      src={require("./images/" + stillThumb)}
      onMouseOver={require("./images/" + gifThumb)}
      onMouseOver={require("./images/" + gifThumb)}
      className={thumbClass[i]}
    />
  </div>
);
*/