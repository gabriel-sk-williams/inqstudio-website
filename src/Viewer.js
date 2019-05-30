import React, { Component } from 'react';
import Image from './Image';
import IconArrow from './IconArrow';
import './Inqstyles.css';

class Viewer extends Component {

  constructor (props) {
    super(props);

    this.state = {
      activeImage: props.activeImage || 0,
      images: props.images || [],
      selected: props.selected || 0,
      animated: false
    }
  }

  imageSelect = (index) => (event) => {
    this.setState({
      selected: index,
      animated: true
    }, () => {
      requestAnimationFrame(()=> {
        this.setState({
          animated: false
        })
      })
    })
  }

  incrementRight = () => {
    this.setState((prevState) => ({
      activeImage: prevState.activeImage+1,
    }))
  }

  incrementLeft = () => {
    this.setState((prevState) => ({
      activeImage: prevState.activeImage-1,
    }))
  }

  componentWillUpdate(nextProps) {
    if(this.props !== nextProps) {
      this.setState({
        activeImage: nextProps.activeImage,
        selected: 0,
        animated: true
      }, () => {
        requestAnimationFrame(()=> {
          this.setState({
            animated: false
          })
        })
      })
    }
  }
  
  render() {
    const { images, activeImage, selected } = this.state;
    const img = images[activeImage];
    const files = img.files;

    const rightArrow = img.index < images.length-1 ? 
      <div className="right-arrow" onClick={this.incrementRight}>
        <IconArrow type="right"  />
      </div> : null;

    
    const leftArrow = img.index > 0 ? 
    <div className="left-arrow" onClick={this.incrementLeft}>
      <IconArrow type="left"  />
    </div> : null;
    
    const fileMap = files.map((img, i) => {
      return (
        <h6 className="pad-select click" key={i} onClick={this.imageSelect(i)}>
        {i+1}
        </h6>
      );
    })

    const container = this.state.animated ? <div/> :
      <div className="image-container">
        {leftArrow}
        <Image  src={require("./" + files[selected] + ".jpg")}
                className={"quick-appear center-fit"} />;
        {rightArrow}
      </div>
                
    return (
        <section>  
          {container}
          <div className="half-break" />
          <div className="flex table">
            <div className="col-10-12">
              <h4>{img.title}</h4>
              <h5><i>{img.subtext}</i></h5>
            </div>
            <div className="col-2-12 right">
              {fileMap}
            </div>
          </div>
        </section>  
    );
  }
}

export default Viewer;