import React, { Component } from 'react';
import Tile from './Tile.js';
import { TILES, shuffler } from '../TileData.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: shuffler(TILES),
      comparing: false,
      cardCheck: [],
      matches: 0,
    };
  }

  compareCards(card) {
    this.state.cardCheck.push(card);

    if (this.state.cardCheck.length === 2) {
      if (this.state.cardCheck[0].props.word === this.state.cardCheck[1].props.word) {
        console.log('match!');
        setTimeout(() => {
          this.setState({ cardCheck: [], matches: this.state.matches + 1 });
        }, 1000);
      }
      else {
        console.log('nope.');
        setTimeout(() => {
          this.state.cardCheck.forEach((card) => {
            card.setState({ flipped: false })
            this.setState({ cardCheck: [] });
          })
        }, 1000);
        //
        // need to cancel all click events for tiles during this
        // 1000ms timeout
        // 
      }
    }
  }

  render() {
    return (
      <div className="grid-wrapper">
        { this.state.tiles.map((tile, i) => {
          return (
            <Tile key={ i } color={ tile.color } word={ tile.word }
            compareCards={ this.compareCards.bind(this) } />
          );
        }) }
      </div>
    );
  }
}

export default Grid;
