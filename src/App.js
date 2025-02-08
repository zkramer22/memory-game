import React, { Component } from 'react';
import './App.css';
import './MediaQueries.css';
import Grid from './comp/Grid.js';
import GameOver from './comp/GameOver.js';
import { TILES, buildDeck } from './data/TileData.js';
import coin from './audio/coin.mp3'
import mariohoo from './audio/mariohoo.mp3'
import bullet from './audio/bullet.mp3'
import mario64castle from './audio/mario64castle.mp3';
import ztk from './img/ztk.png';
import musicon from './img/music.png';
import nosign from './img/nosign.png';
import sfxon from './img/sfx.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: new Audio(coin),
      mariohoo: new Audio(mariohoo),
      bullet: new Audio(bullet),
      music: true,
      sfx: true,
      score: 0,
      matches: 0,
      misses: 0,
      tileDeck: buildDeck(TILES),
      timer: 1,
      countdown: null,
      gameOver: false,
    };
    this.updateMatches = this.updateMatches.bind(this);
    this.updateMisses = this.updateMisses.bind(this);
    this.formatScore = this.formatScore.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.showTiles(true), 500)
    this.state.coin.load()
    this.state.mariohoo.load()
    this.state.bullet.load()
  }

  restartTimer() {
    this.stopTimer();
    this.setState({ timer: 9 });
    setTimeout(() => this.countDown(), 1500)
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
    this.playSound('mariohoo', 'sfx', 200)
    this.flashColor(score, 'lightgreen');
    this.setState({ 
      matches: this.state.matches + 1, 
      score: this.state.score + (100 * this.state.timer) 
    });
    this.restartTimer();
    setTimeout(() => {
      this.playSound('coin', 'sfx', 1)
      if (this.state.matches === 8) {
        this.endGame();
        this.stopTimer();
      }
    }, 3000)
  }
  updateMisses() {
    const score = document.getElementById('score');
    this.playSound('bullet', 'sfx', 200)
    this.setState({ 
      misses: this.state.misses + 1, 
    });
    if (this.state.misses >= 5) {
      this.flashColor(score, 'red');
      this.setState({ score: this.state.score - 25})
    }
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

  playAudio() {
    const audio = document.getElementById('audio-player')
    document.getElementById('container').addEventListener('click', () => {
      audio.play()
    }, { once: true })
  }

  playSound(soundName, typeName, delay) {
    const sound = this.state[soundName]
    const type = this.state[typeName]
    setTimeout(() => {
      if (type) { sound.play() }
    }, delay)
  }

  toggleAudio(typeName) {
    const val = !this.state[typeName]
    this.setState({
      [`${typeName}`]: val
    })
  }
  
  endGame() {
    setTimeout(() => this.showTiles(false), 1500);
    setTimeout(() => this.setState({ gameOver: true }), 3000);
  }

  playAgain() {
    this.setState({ 
      score: 0,
      matches: 0,
      misses: 0,
      tileDeck: buildDeck(TILES),
      timer: 1,
      countdown: null,
      gameOver: false,
    })
    setTimeout(() => this.showTiles(true), 1000)
  }

  render() {
    const { tileDeck, music, sfx, gameOver } = this.state;
    const score = this.formatScore(this.state.score)

      return (
        <div id="container" className="container">
          <div id="audio-controls">
            <div id="sfx-on-off" className="audio-control-wrapper" onClick={ () => this.toggleAudio('sfx') }>
              <img src={ sfxon } alt="sfx"/>
              { !sfx && <img className="no-sign" src={ nosign } alt="off" /> }
            </div>
            <div id="sound-on-off" className="audio-control-wrapper" onClick={ () => this.toggleAudio('music') }>
              <img src={ musicon } alt="music"/>
              { !music && <img className="no-sign" src={ nosign } alt="off" /> }
            </div>
          </div>
          <audio id="audio-player" preload="auto" autoPlay loop muted={ !music } onCanPlay={ this.playAudio }>
            <source src={ mario64castle } type="audio/mpeg"/>
          </audio>
          <audio>

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
              <GameOver score={ score } formatScore={this.formatScore} playAgain={ this.playAgain }/>
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
            <a id="link" href="https://ztkweb.com" target="_blank" rel="noreferrer">
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
