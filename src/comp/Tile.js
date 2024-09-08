import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      matched: false,
    };
    this.flipTile = this.flipTile.bind(this);
  }

  flipTile() {
    if (this.state.flipped) { return }
    this.setState({ flipped: true });
    this.props.compareTiles(this);
  }

  render() {
    const { delay, tileImg, tileBack, coin } = this.props;
    const flipStyle = this.state.flipped ? 'flipped' : '';
    const matchStyle = this.state.matched ? 'flipped matched' : 'flipped';
    const coinStyle = this.state.matched ? 'coined' : ''

    return (
      <div className="tile-animation-wrapper pre-animate" style={{ transitionDelay: `${delay}s, ${delay}s` }}>
        <div className={ `tile-wrapper ${flipStyle}` } onClick={ this.flipTile } >
          <div className="tile-back">
            <div className="corner-circle"></div>
            <div className="corner-circle"></div>
            <div className="corner-circle"></div>
            <div className="corner-circle"></div>
            <img className="animation-bounce" src={ tileBack } alt="tile" draggable="false" />
          </div>
          <div className={ `tile-front ${matchStyle}` }>
            <img className="tile-img" src={ tileImg } alt="tile" draggable="false"/>
            <img className={ `tile-coin ${coinStyle}` } src={ coin } alt="coin" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
