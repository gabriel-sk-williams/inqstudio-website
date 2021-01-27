import React, { Component } from 'react';
import Image from './Image';
import './Inqstyles.css';

class Thumbnails extends Component {

  constructor (props) {
    super(props);

    this.state = {
      activeImg: props.activeImg || 0,
      images: props.images || [],
      translateValue: 0,
      maxDrag: props.maxDrag || -500
    }
  }

  // FPS Limit
  startTime;
  fpsInterval = 100 / 60;
  // Drag & Drop
  lastEvt;
  deltaY = 0;
  accelY = 0;
  accelCheck = false;
  dragStartY = 0;
  dragged = false;
  translateValue = 0;
  threshold = 0.075;
  mouseDown = false;

  componentDidMount() {
    window.addEventListener("resize", this.updateTranslateValue);
    window.addEventListener("mouseup", this.onDragEndMouse);
    window.addEventListener("mousedown", this.onMouseDown);
    window.addEventListener("touchend", this.onDragEndTouch);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateTranslateValue);
    window.removeEventListener("mouseup", this.onDragEndMouse);
    window.removeEventListener("mousedown", this.onMouseDown);
    window.removeEventListener("touchend", this.onDragEndTouch);
  }

  slideHeight = () => {
    let queryClass = "slider-wrapper";
    const slideimgElement = document.querySelector('.' + queryClass);
    if (slideimgElement) {
      return slideimgElement.clientHeight;
    } else {
      return false;
    }
  }

  onDragStartMouse = (evt) => {
    this.onDragStart(evt.clientY);
    window.addEventListener("mousemove", this.onMouseMove);
  }

  onDragStart = (clientY) => {
    this.dragged = true;
    this.dragStartY = clientY;
    this.startTime = Date.now();
    requestAnimationFrame(this.updatePosition);
  }

  onMouseMove = (evt) => {
    this.lastEvt = evt;
    this.accelY = this.lastEvt.clientY - this.dragStartY - this.deltaY;
    this.deltaY = this.lastEvt.clientY - this.dragStartY;
    this.translateValue = this.deltaY;
  }

  check = () => {
    if (this.lastEvt) this.onMouseMove(this.lastEvt);
  }

  onMouseDown = () => {
    setInterval(this.check, 200);
  }

  

  onDragEndMouse = (evt) => {
    window.removeEventListener("mousemove", this.onMouseMove);
    this.onDragEnd();
  }

  onDragEnd = () => {
    if (this.dragged) {
      this.dragged = false;
      this.deltaY = 0;
      clearInterval(this.accelCheck);
    }
  }


  updatePosition = () => {
    if (this.dragged) requestAnimationFrame(this.updatePosition);
    const slideHeight = this.slideHeight();
    if (slideHeight) {
      const current = this.state.translateValue;
      const q = this.accelY;
      const val = this.translateValue*.5;
      const maxDrag = this.state.maxDrag;

      if (val+current > 1) {
        this.setState({ translateValue: 0 });
      }else if (val+current < maxDrag) {
        this.setState({ translateValue: maxDrag });
      }else if (q !== 0) {
        this.setState((prevState) => ({ 
          translateValue: prevState.translateValue+val
        }));
      }
    }
  }

  handleClick = (index) => (event) => {
    this.setState({
      activeImg: index,
    })
    this.props.onClick(index);
  }

  renderList = () => {
    return (
      <div className="slider">
        <div  className="slider-wrapper" 
              style={{  transform: `translateY(${this.state.translateValue}px)`,
                        transition: 'transform ease .8s' }} >
          {this.renderThumbs()}
        </div>
      </div>
    );
  }

  renderThumbs = () => {
    const thumbs = this.state.images.map((image, i) => {
      if (image.index !== this.state.activeImg){
        return(
          <div key={i}>
            <div onClick={this.handleClick(i)}>
              <Image  src={require("./images/" + image.thumb)}
                      className={"thumbnail"} />
            </div>
            <div className="thumb-divider" />
          </div>
        );
      }else{
        return null;
      }
    });
    return thumbs;
  }

  render() {
    return (
      <section  className="mobile-touch"
                onMouseDown={this.onDragStartMouse} 
                onTouchStart={this.onDragStartTouch} >
        <div className="right thumbs">
          {this.renderList()}
        </div>
      </section>
    );
  }
}

export default Thumbnails;