import React, { Component } from 'react';
import './App.css';
import './MediaQueries.css';
import Grid from './comp/Grid.js';
import GameOver from './comp/GameOver.js';
import { TILES, buildDeck } from './data/TileData.js';
import ztk from './img/ztk.png';
// import go from './img/go.png'
// import { SONGS } from './data/SongData.js';
import coinsound from './audio/coin.mp3'
// import play from './img/play.png';
// import pause from './img/pause.png';
// import next from './img/next.png';
// import prev from './img/prev.png';
// import soundon from './img/soundon.png';
// import soundoff from './img/soundoff.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // songs: SONGS,
      // song: null,
      coinsound: new Audio(coinsound),
      // playing: false,
      // muted: false,
      // track: 0,
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
    // this.playAudio = this.playAudio.bind(this)
    // this.pauseAudio = this.pauseAudio.bind(this)
    // this.muteAudio = this.muteAudio.bind(this)
    // this.prevAudio = this.prevAudio.bind(this)    
    // this.nextAudio = this.nextAudio.bind(this)
  }

  componentDidMount() {
    setTimeout(() => this.showTiles(true), 500)
    window.addEventListener('resize', () => {
      console.log(window.innerWidth / window.innerHeight);
      
    })
    // setTimeout(() => this.showStartButton(true), 1750)
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
    this.flashColor(score, 'green');
    this.setState({ 
      matches: this.state.matches + 1, 
      score: this.state.score + (100 * this.state.timer) 
    });
    setTimeout(() => {
      this.state.coinsound.play()
    }, 2700)
    this.restartTimer();
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

  // playAudio() {
  //   const song = new Audio(this.state.songs[this.state.track])
  //   console.log(song);
  //   this.setState({
  //     song,
  //     playing: true 
  //   })
  //   console.log(this.state);
  //   this.state.song.loaded(() => this.state.song.play())
  // }

  // pauseAudio() {
  //   this.state.song.pause()
  //   this.setState({ playing: false })
  // }

  // muteAudio(bool) {
  //   this.state.song.muted = bool
  //   this.setState({ muted: bool })
  // }

  // prevAudio() {
  //   this.pauseAudio()
  //   this.setState({ song: null })
  //   let newTrack = this.state.track === 0
  //     ? this.state.songs.length - 1
  //     : this.state.track - 1
  //   this.setState({ track: newTrack })
  //   this.playAudio()
  // }

  // nextAudio(){
  //   this.setState({
  //     song: { currentTime: 0 }
  //   })
  //   // this.state.song.currentTime = 0
  //   this.state.song.pause()
  //   let newTrack = this.state.track === this.state.songs.length - 1
  //     ? 0
  //     : this.state.track + 1
  //   this.setState({ 
  //     track: newTrack,
  //     song: new Audio(this.state.songs[newTrack]),
  //     playing: true,
  //   })
  //   this.state.song.play()
  // }
  
  endGame() {
    setTimeout(() => this.showTiles(false), 3000);
    setTimeout(() => this.setState({ gameOver: true }), 5000);
  }

  render() {
    let appContent = null;
    const { tileDeck } = this.state;
    const score = this.formatScore(this.state.score)
    // const playStyle = this.state.playing ? 'none' : ''
    // const pauseStyle = this.state.playing ? '' : 'none'
    // const muteStyle = this.state.muted ? 'none' : ''
    // const unmuteStyle = this.state.muted ? '' : 'none'

    if (!this.state.gameOver) {
      appContent = (
          <div className="container">
            {/* <div id="start-wrapper">
              <div id="startbutton">
                <img src={ go } alt="go! p"/>
              </div>
            </div> */}
            
            <header>
              <h1 className="header">superTileMatch</h1>
              {/* <div id="audio-controls">
                <div id="prev">
                  <img onClick={ () => this.prevAudio() } className="audio-control" src={ prev } alt="prev"/>
                </div>
                <div id="play-pause">
                    <img style={{ display: pauseStyle }} onClick={ () => this.pauseAudio() } className="audio-control" src={ pause } alt="pause"/>
                    <img style={{ display: playStyle }} onClick={ () => this.playAudio() } className="audio-control" src={ play } alt="play"/>
                </div>
                <div id="next">
                  <img onClick={ () => this.nextAudio() } className="audio-control" src={ next } alt="next"/>
                </div>
                <div id="sound-on-off">
                    <img style={{ display: unmuteStyle }} onClick={ () => this.muteAudio(false) } className="audio-control" src={ soundoff } alt="soundoff"/>
                    <img style={{ display: muteStyle }} onClick={ () => this.muteAudio(true) } className="audio-control" src={ soundon } alt="soundon"/>
                </div>
              </div> */}
            </header>

            <div className="grid-section">
              <Grid 
                tiles={ tileDeck }
                updateMatches={ this.updateMatches }
                updateMisses={ this.updateMisses }
                updateDefs={ this.updateDefs }
              />
            </div>

            <footer className="score-wrapper">
              <div>
                <p id="score-title">
                  score: <span id="score">{ score }</span>
                </p>
              </div>
              <div>
                <p id="multiplier-title">
                  mult: <span id="multiplier">{ this.state.timer }x</span>
                </p>
              </div>
            </footer>

            <div id="links">


              <a id="ztk-link" href="https://ztkweb.com" target="_blank" rel="noreferrer">
                <div id="ztk">
                  <img src={ztk} alt="ztk-logo"/>
                </div>
                <p>ztkweb.com</p>
              </a>
            </div>

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
    else {
      appContent = (
        <div className="container">
          <GameOver 
            matches={ this.state.matches }
            misses={ this.state.misses } 
            score={ this.state.score }
          />
        </div>
      );
    }

    return (
      <div className="App">
        { appContent }
      </div>
    );

  }
}

export default App;
