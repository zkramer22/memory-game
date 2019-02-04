import React, { Component } from 'react';

class Tile extends Component {
  render() {
    const { color, word } = this.props;
    
    return (
      <div className="tile-wrapper" style={{ backgroundColor: color }}>
        <p>{ word }</p>
      </div>
    );
  }
}

export default Tile;
