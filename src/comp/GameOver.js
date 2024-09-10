import React, { Component } from 'react';
// import { TILES } from '../data/TileData.js';
import { SCORES, insertAndSort } from '../data/ScoreData.js';

class GameOver extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: []
    }
  }
  componentDidMount() {
    const playerScore = { name: 'YOU', score: this.props.score, player: true }
    this.setState({ scores: insertAndSort(SCORES, playerScore) })
  }

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

  playAgain() {
    this.props.playAgain(this)
  }

  render() {
    const { formatScore } = this.props
    return (
      <div className="grid-section">
        <h1 style={{ marginBottom: '10px' }}>~ high scores ~</h1>
          { 
            this.state.scores.map((entry, i) => {
              if (!entry.player) {
                return (
                  <h2 key={ `comp-score-${i}` } className="highscore">{ entry.name } :: { formatScore(entry.score)}</h2>
                )
              }
              else {
                return (
                  <h2 key={ `player-score-${i}` } className="highscore gold">{ entry.name } :: { formatScore(entry.score)}</h2>
                )
              }
            }) 
          }
        <div id="playagain" onClick={ () => this.playAgain() }>play again</div>

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
    )
  }
}

export default GameOver;
