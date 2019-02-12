import React, { Component } from 'react';
import { SCORES, insertAndSort } from '../data/ScoreData.js';

class GameOver extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.showGameOver(true);
    }, 100);
  }

  showGameOver(bool) {
    const headers = document.querySelectorAll('.header.pre-animate'),
          footers = document.querySelectorAll('.footer.pre-animate');

    if (bool) {
      headers.forEach(head => head.classList.remove('pre-animate'));
      footers.forEach(foot => foot.classList.remove('pre-animate'));
    }
  }

  render() {
    const entry = { name: 'ZTK', score: this.props.score, player: true };
    const scoreArray = insertAndSort(SCORES, entry);
    return (
      <div>
        <header>
          <h1 className="header pre-animate">:: hall of fame ::</h1>
          { scoreArray.map((entry, i) => {
            if (!entry.player) {
              return (
                <h4 key={ i } className="header pre-animate">{ entry.name } :: { entry.score}</h4>
              )
            }
            else {
              return (
                <h4 key={ i } className="header pre-animate green">{ entry.name } :: { entry.score}</h4>
              )
            }
          }) }
        </header>

        <footer>
          <h2 className="footer pre-animate">
            final score: { this.props.score }
          </h2>

          <h3 id="reload" className="footer pre-animate" onClick={ () => window.location.reload() }>start over!</h3>
        </footer>
      </div>
    );
  }
}

export default GameOver;
