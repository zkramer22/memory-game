import React, { Component } from 'react';
import Tile from './Tile.js';
import { TILES, shuffler } from '../TileData.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: shuffler(TILES),
      // tiles: TILES,
      comparing: false,
      tileCheck: []
    };
    this.compareCards = this.compareCards.bind(this);
  }

  handleMatch(tile1, tile2) {
    tile1.setState({ matched: true });
    tile2.setState({ matched: true });
    this.props.updateMatches(1);
    document.body.style.pointerEvents = 'initial';
  }

  handleMiss(tileCheck) {
    tileCheck.forEach(tile => tile.setState({ flipped: false }));
    this.setState({ tileCheck: [] });
    this.props.updateMisses(1);
    document.body.style.pointerEvents = 'initial';
  }

  compareCards(tile) {
    const tileCheck = this.state.tileCheck;
    tileCheck.push(tile);

    if (tileCheck.length === 2) {
      const tile1 = tileCheck[0],
            tile2 = tileCheck[1];

      if (tile1.props.word === tile2.props.word) {
        // it's a match!
        document.body.style.pointerEvents = 'none';
        setTimeout(() => this.handleMatch(tile1, tile2), 1000);
        this.setState({ tileCheck: [] });
      }
      else {
        // it's a miss.
        document.body.style.pointerEvents = 'none';
        setTimeout(() => this.handleMiss(tileCheck), 1000);
      }
    }
  }

  render() {
    return (
      <div className="grid-wrapper">
        { this.state.tiles.map((tile, i) => {
          return (
            <Tile key={ i } color={ tile.color } word={ tile.word }
            compareCards={ this.compareCards } delay={ i * 0.07 } />
          );
        }) }
      </div>
    );
  }
}

export default Grid;
