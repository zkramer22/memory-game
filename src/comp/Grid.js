import React, { Component } from 'react';
import Tile from './Tile.js';
import { TILES, shuffler } from '../TileData.js';

class Grid extends Component {
  render() {
    return (
      <div className="grid-wrapper">
        { shuffler(TILES).map((tile, i) => {
          return (
            <Tile key={ i } color={ tile.color } word={ tile.word }/>
          );
        }) }
      </div>
    );
  }
}

export default Grid;
