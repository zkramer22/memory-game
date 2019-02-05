import back from '../img/heart.svg';
import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(e) {
    if (!this.state.flipped) {
      this.setState({ flipped: true });
    }
    else {
      this.setState({ flipped: false });
    }
    this.props.compareCards(this);
  }

  render() {
    const { color, word } = this.props;
    const flipClass = this.state.flipped ? 'tile-wrapper flipped' : 'tile-wrapper';

    return (
      <div onClick={ this.flipCard } className={ flipClass }>
        <div className="tile-back" style={{ backgroundColor: color }}>
          <img src={ back } alt="card"/>
        </div>
        <div className="tile-front flipped">
          <p>{ word }</p>
        </div>
      </div>
    );
  }
}

export default Tile;
