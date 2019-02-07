import React, { Component } from 'react';

class GameOver extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.showContent(true);
    }, 0);
  }

  showContent(bool) {
    const title = document.getElementById('gameover-title'),
          score = document.getElementById('gameover-score');

    if (bool) {
      title.classList.remove('pre-animate');
      score.classList.remove('pre-animate');
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1 id="gameover-title" className="pre-animate">
            u win
          </h1>
        </header>

        <footer>
          <h2 id="gameover-score" className="pre-animate">
            final score: { this.props.matches - this.props.misses }
          </h2>
        </footer>
      </div>
    );
  }
}

export default GameOver;
