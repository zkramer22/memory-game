import React, { Component } from 'react';
import './App.css';
import Grid from './comp/Grid.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: 0,
      misses: 0
    };
    this.updateMatches = this.updateMatches.bind(this);
    this.updateMisses = this.updateMisses.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.populate()
    }, 100);
  }

  updateMatches(num) {
    if (num === 1) {
      const matches = document.getElementById('matches');
      this.flashColor(matches, 'green');
      this.setState({ matches: this.state.matches + 1 });
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
    setTimeout(() => {
      el.classList.remove(color);
    }, 500);
  }

  populate() {
    const tiles = document.querySelectorAll('.tile-animation-wrapper');
    tiles.forEach(tile => tile.classList.remove('pre-animate'));
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>memory game</h1>
        </header>
        <Grid updateMatches={ this.updateMatches } updateMisses={ this.updateMisses }/>
        <footer>
          <h2 id="matches">matches: { this.state.matches }</h2>
          <h3 id="misses">misses: { this.state.misses }</h3>
        </footer>

        {/* below is the credit tag for the icons. whatev */}
        <div style={{ display: 'none' }}>
          Icons made by
          <a href="https://www.freepik.com/" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
          is licensed by
          <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
          CC 3.0 BY
          </a>
        </div>
      </div>
    );
  }
}

export default App;
