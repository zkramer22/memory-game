import React, { Component } from 'react';
import './App.css';
import './MediaQueries.css';
import Grid from './comp/Grid.js';
import Definition from './comp/Definition.js';
import GameOver from './comp/GameOver.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      matches: 0,
      misses: 0,
      defs: [],
      timer: 10,
      countdown: null,
      gameOver: false,
    };
    this.updateMatches = this.updateMatches.bind(this);
    this.updateMisses = this.updateMisses.bind(this);
    this.updateDefs = this.updateDefs.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.showTiles(true);
      this.showContent(true);
    }, 500);
    setTimeout(() => this.countDown(), 2000);
  }

  restartTimer() {
    this.stopTimer();
    this.setState({ timer: 10 });
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
    this.setState({ matches: this.state.matches + 1, score: this.state.score + (100 * this.state.timer) });
    this.restartTimer();
    if (this.state.matches === 8) {
      this.endGame();
      this.stopTimer();
    }
  }

  updateMisses() {
    const score = document.getElementById('score');
    this.flashColor(score, 'red');
    this.setState({ misses: this.state.misses + 1, score: this.state.score - 50 });
    this.stopTimer();
    this.countDown();
  }

  updateDefs(defObj) {
    const { defs } = this.state;
    defs.unshift(defObj);
  }

  flashColor(el, color) {
    el.classList.add(color);
    setTimeout(() => el.classList.remove(color), 500);
  }

  showTiles(bool) {
    const tiles = document.querySelectorAll('.tile-animation-wrapper');
    if (bool) {
      tiles.forEach(tile => tile.classList.remove('pre-animate'));
    }
    else {
      tiles.forEach(tile => tile.classList.add('pre-animate'));
    }
  }

  showContent(bool) {
    const headers = document.querySelectorAll('.header'),
          footers = document.querySelectorAll('.footer'),
          sidebar = document.querySelector('.sidebar-wrapper');

    if (bool) {
      headers.forEach(head => head.classList.remove('pre-animate'));
      footers.forEach(foot => foot.classList.remove('pre-animate'));
      sidebar.classList.remove('pre-animate');
    }
    else {
      headers.forEach(head => head.classList.add('pre-animate'));
      footers.forEach(foot => foot.classList.add('pre-animate'));
      sidebar.classList.add('pre-animate');
    }
  }

  endGame() {
    this.showTiles(false);
    this.showContent(false);
    setTimeout(() => this.setState({ gameOver: true }), 1500);
  }

  render() {
    let appContent = null;
    const { defs } = this.state;

    if (!this.state.gameOver) {
      appContent = (
        <div className="App">
          <header>
            <h1 className="header pre-animate">memory game</h1>
          </header>
          {
            /*
            
            */
          }
          <div className="middle-spacer">

            <div className="sidebar-wrapper pre-animate">
            { defs.map((def, i) => {
                return (
                  <Definition key={ i } word={ def.word } def={ def.def }/>
                );
              })
            }
            </div>

            <Grid updateMatches={ this.updateMatches }
                  updateMisses={ this.updateMisses }
                  updateDefs={ this.updateDefs }/>

          </div>

          <footer>
            <h2 id="score" className="footer pre-animate">
              score: { this.state.score }
            </h2>
            <h4 className="footer pre-animate">
              multipler: { this.state.timer }
            </h4>
          </footer>
        </div>
      );
    }
    else {
      appContent = (
        <div className="App">
          <GameOver matches={ this.state.matches } misses={ this.state.misses } score={ this.state.score }/>
        </div>
      );
    }

    return (
      <div>
        { appContent }
      </div>
    );

  }
}

export default App;
