import React, { Component } from 'react';
import './App.css';
import Grid from './comp/Grid.js';
import GameOver from './comp/GameOver.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: 0,
      misses: 0,
      gameOver: false
    };
    this.updateMatches = this.updateMatches.bind(this);
    this.updateMisses = this.updateMisses.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.showTiles(true);
      this.showContent(true);
    }, 1000);
  }

  updateMatches(num) {
    if (num === 1) {
      const matches = document.getElementById('matches');
      this.flashColor(matches, 'green');
      this.setState({ matches: this.state.matches + 1 });
      if (this.state.matches === 3) {
        this.showTiles(false);
        this.showContent(false);
        setTimeout(() => this.setState({ gameOver: true }), 1500);
      }
    }
    else {
      this.setState({ matches: 0 });
    }
  }

  updateMisses(num) {
    if (num === 1) {
      const misses = document.getElementById('misses');
      this.flashColor(misses, 'red');
      this.setState({ misses: this.state.misses + 1 });
    }
    else {
      this.setState({ misses: 0 });
    }
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
    const header = document.querySelector('#header-title'),
          footers = document.querySelectorAll('.footer');

    if (bool) {
      header.classList.remove('pre-animate');
      footers.forEach(el => el.classList.remove('pre-animate'));
    }
    else {
      header.classList.add('pre-animate');
      footers.forEach(el => el.classList.add('pre-animate'));
    }
  }

  render() {
    let appContent = null;
    if (!this.state.gameOver) {
      appContent = (
        <div>
          <header>
          <h1 id="header-title" className="pre-animate">memory game</h1>
          </header>

          <Grid updateMatches={ this.updateMatches } updateMisses={ this.updateMisses }/>

          <footer>
          <h2 id="matches" className="footer pre-animate">matches: { this.state.matches }</h2>
          <h3 id="misses" className="footer pre-animate">misses: { this.state.misses }</h3>
          </footer>
        </div>
      );
    }
    else {
      appContent = (
        <div>
          <GameOver matches={ this.state.matches } misses={ this.state.misses }/>
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
