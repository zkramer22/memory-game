import React, { Component } from 'react';
// import { TILES } from '../data/TileData.js';
import { SCORES, insertAndSort } from '../data/ScoreData.js';

class GameOver extends Component {
  // updateDefs(defId) {
  //   const { defs } = this.state;
  //   // defs.unshift(TILES[defId]);
  //   // this.setActiveDef(defId)
  // }

  // setActiveDef(defId) {
  //   this.setState({
  //     activeDef: TILES[defId]
  //   });
  // }

  // defIsActive(defId) {
  //   return this.state.activeDef.id === defId
  // }

  render() {
    const { score } = this.props
    const entry = { name: 'ZTK', score, player: true };
    const scoreArray = insertAndSort(SCORES, entry);
    return (
      <div className="grid-section">
        <h1 style={{ marginBottom: '10px' }}>~ high scores ~</h1>
          { scoreArray.map((entry, i) => {
            if (!entry.player) {
              return (
                <h2 key={ i } className="highscore">{ entry.name } :: { entry.score}</h2>
              )
            }
            else {
              return (
                <h2 key={ i } className="highscore gold">{ entry.name } :: { entry.score}</h2>
              )
            }
          }) }

{/* <div className="defs-section">
    { 
      defs.map((def, i) => {
        return (
          <Definition key={ i }
            name={ def.name } 
            def={ def.def } 
            type={ def.type }
            img={ def.img }
            // isActive={ this.defIsActive(def.id) }
            onClick={ this.setActiveDef }
          />
        );
      })
    }
  </div> */}
      </div>
    );
  }
}

export default GameOver;
