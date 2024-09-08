import React, { Component } from 'react';
import Tile from './Tile.js';
import coin from '../img/coin.png';
import questionmarkwhite from '../img/questionmarkwhite.png';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileCheck: [],
    };
    this.compareTiles = this.compareTiles.bind(this);
  }

  handleMatch(tile1, tile2) {
    tile1.setState({ matched: true });
    tile2.setState({ matched: true });
    
    // const defId = tile1.props.id;
    this.props.updateMatches();
    // this.props.updateDefs(defId);
    document.body.style.pointerEvents = 'initial';
  }

  handleMiss(tileCheck) {
    tileCheck.forEach(tile => tile.setState({ flipped: false }));
    this.setState({ tileCheck: [] });
    this.props.updateMisses();
    document.body.style.pointerEvents = 'initial';
  }

  compareTiles(tile) {
    const { tileCheck } = this.state;
    tileCheck.push(tile);

    if (tileCheck.length === 2) {
      const tile1 = tileCheck[0],
            tile2 = tileCheck[1];

      if (tile1.props.id === tile2.props.id) {
        // it's a match!
        document.body.style.pointerEvents = 'none';
        setTimeout(() => this.handleMatch(tile1, tile2), 700);
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
    const { tiles } = this.props
    return (
      <div className="grid-wrapper">
        { tiles.map((tile, i) => {
          return (
            <Tile key={ `tile-${i}` } 
              id={ tile.id }
              compareTiles={ this.compareTiles } 
              delay={ i * 0.07 } 
              tileBack={ questionmarkwhite }
              tileImg={ tile.img }
              coin={ coin }
            />
          );
        }) }
      </div>
    );
  }
}

export default Grid;
