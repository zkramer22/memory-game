import tileBack from '../img/diamond.png';
import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      matched: false
    };
    this.flipTile = this.flipTile.bind(this);
  }

  flipTile() {
    if (!this.state.flipped) {
      this.setState({ flipped: true });
    }
    else {
      this.setState({ flipped: false });
    }
    this.props.compareTiles(this);
  }

  render() {
    const { word, delay } = this.props;
    const flipStyle = this.state.flipped ? 'tile-wrapper flipped' : 'tile-wrapper';
    const matchStyle = this.state.matched ? 'tile-front flipped matched' : 'tile-front flipped';

    return (
      <div className="tile-animation-wrapper pre-animate" style={{ transitionDelay: `${delay}s, ${delay}s` }}>
        <div className={ flipStyle } onClick={ this.flipTile } >
          <div className="tile-back">
            <img src={ tileBack } alt="tile" draggable="false"/>
          </div>
          <div className={ matchStyle }>
            <p>{ word }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
