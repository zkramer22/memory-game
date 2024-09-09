import React, { Component } from 'react';
import './App.css';
import './MediaQueries.css';
import Grid from './comp/Grid.js';
import GameOver from './comp/GameOver.js';
import { TILES, buildDeck } from './data/TileData.js';
import coinsound from './audio/coin.mp3'
import mariohoo from './audio/mariohoo.mp3'
import mario64castle from './audio/mario64castle.mp3';
import ztk from './img/ztk.png';
import soundoff from './img/soundoff.png';
import soundon from './img/soundon.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinsound: new Audio(coinsound),
      mariohoo: new Audio(mariohoo),
      score: 0,
      matches: 0,
      misses: 0,
      tiles: TILES,
      tileDeck: buildDeck(TILES),
      timer: 9,
      countdown: null,
      gameOver: false,
    };
    this.updateMatches = this.updateMatches.bind(this);
    this.updateMisses = this.updateMisses.bind(this);
    this.formatScore = this.formatScore.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.showTiles(true), 500)
  }

  restartTimer() {
    this.stopTimer();
    this.setState({ timer: 9 });
    this.countDown();
  }
  tickTimer() {
    if (this.state.timer > 1) {
      this.setState({ timer: this.state.timer - 1 });
    }
  }
  countDown() {
    this.setState({ countdown: setInterval(() => this.tickTimer(), 1000) });
  }
  stopTimer() {
    clearInterval(this.state.countdown);
  }

  updateMatches() {
    const score = document.getElementById('score');
    setTimeout(() => {
      this.state.mariohoo.play()
    }, 200)
    setTimeout(() => {
      this.flashColor(score, 'lightgreen');
      this.setState({ 
        matches: this.state.matches + 1, 
        score: this.state.score + (100 * this.state.timer) 
      });
      if (this.state.muted) { return }
      this.state.coinsound.play()
      this.restartTimer();
    }, 2750)
    if (this.state.matches === 8) {
      this.endGame();
      this.stopTimer();
    }
  }
  updateMisses() {
    const score = document.getElementById('score');
    this.flashColor(score, 'red');
    this.setState({ 
      misses: this.state.misses + 1, 
      score: this.state.score - 25 
    });
    this.stopTimer();
    this.countDown();
  }

  formatScore(score) {
    let result = ''
    if (score < 0) { result += '-' }
    result += Math.abs(score).toString().padStart(5, '0')
    return result
  }

  flashColor(el, color) {
    el.classList.add(color);
    setTimeout(() => el.classList.remove(color), 500);
  }

  showTiles(bool) {
    const tiles = document.querySelectorAll('.tile-animation-wrapper');
    if (bool) tiles.forEach(tile => tile.classList.remove('pre-animate'))
    else tiles.forEach(tile => tile.classList.add('pre-animate'))
  }

  showStartButton(bool) {
    const start = document.querySelector('#start-wrapper')
    if (bool) start.classList.add('active')
    else start.classList.remove('active')
  }

  playAudio() {
    const audio = document.getElementById('audio-player')
    document.getElementById('container').addEventListener('click', () => {
      audio.play()
    }, { once: true })
  }

  // scoreIndicator() {
  //   setTimeout(() => this.setState({ scoreOpacity: '0' }), 1000);
  //   setTimeout(() => this.setState({ scoreBottom: '30%' }), 1500);
  // }

  // updateScore(val) {
  //   this.setState({
  //     scoreOpacity: '1',
  //     scoreBottom: '40%'
  //   });
  //   this.scoreIndicator();
  // }
  
  endGame() {
    setTimeout(() => this.showTiles(false), 3000);
    setTimeout(() => this.setState({ gameOver: true }), 5000);
  }

  render() {
    const { tileDeck, muted, gameOver } = this.state;
    const score = this.formatScore(this.state.score)

      return (
        <div id="container" className="container">
          <div id="audio-controls">
            <div id="sound-on-off">
                {
                  muted ? (
                    <img onClick={ () => this.setState({ muted: false }) } className="audio-control" src={ soundoff } alt="soundoff"/>
                  ) : (
                    <img onClick={ () => this.setState({ muted: true }) } className="audio-control" src={ soundon } alt="soundon"/>
                  )
                }
            </div>
          </div>
          <audio id="audio-player" autoPlay loop muted={ muted } onCanPlay={ this.playAudio }>
            <source src={ mario64castle } type="audio/mpeg"/>
          </audio>
          <header>
            <h1 className="header">superTileMatch</h1>
          </header>

          <div id="alt-header">
            <div>super</div>
            <div>Tile</div>
            <div>Match</div>
          </div>

          {
            gameOver ? (
              <GameOver/>
            ) : (
              <div className="grid-section">
                <Grid 
                  tiles={ tileDeck }
                  updateMatches={ this.updateMatches }
                  updateMisses={ this.updateMisses }
                  updateDefs={ this.updateDefs }
                />
              </div>
            )
          }


          <div className="score-wrapper ratio-16-9-hide">
            <div>
              <h2 id="score-title">
                score: <span id="score" className="gold">{ score }</span>
              </h2>
            </div>
            <div>
              <h2 id="multiplier-title">
                mult: <span id="multiplier" className="lightgreen">{ this.state.timer }x</span>
              </h2>
            </div>
          </div>

          <div className="links ratio-16-9-hide">
            <a id="link" href="ztkweb.com" target="_blank" rel="noreferrer">
              <div className="link-img-wrapper" id="ztk">
                <img src={ztk} alt="ztk-logo"/>
              </div>
              <p>ztkweb.com</p>
            </a>
          </div>
        </div>
      )
  }
}

export default App;
