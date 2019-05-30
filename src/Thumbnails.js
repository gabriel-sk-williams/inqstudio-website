import React, { Component } from 'react';
import Image from './Image';
import './Inqstyles.css';

class Thumbnails extends Component {

  constructor (props) {
    super(props);

    this.state = {
      activeImg: props.activeImg || 0,
      images: props.images || [],
    }
  }

  handleClick = (index) => (event) => {
    this.setState({
      activeImg: index,
    })
    this.props.onClick(index);
  }

  render() {
    const imgClass = "thumbnail";
    const list = this.state.images.map((img) => {
    const i = img.index;
      if (i !== this.state.activeImg){
        return(
          <div key={i}>
            <div key={i} onClick={this.handleClick(i)}>
              <Image  
                      src={require("./" + img.thumb)}
                      className={imgClass} />
            </div>
              <div className="thumb-divider" />
          </div>       
        )
        }else{
          return null;
        }
      })

    return (
        <div className="right thumbs">
          {list}
        </div>
          

    );
  }
}

export default Thumbnails;