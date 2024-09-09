// --------------- App.js --------------- //
// import go from './img/go.png'
// import { SONGS } from './data/SongData.js
// import play from './img/play.png';
// import pause from './img/pause.png';
// import next from './img/next.png';
// import prev from './img/prev.png';
// import soundon from './img/soundon.png';
// import soundoff from './img/soundoff.png';

// ------------- this.state ---------------- //
  //   songs: SONGS,
  //   song: null,
  //   playing: false,
  //   muted: false,
  //   track: 0,

  // this.playAudio = this.playAudio.bind(this)
  // this.pauseAudio = this.pauseAudio.bind(this)
  // this.muteAudio = this.muteAudio.bind(this)
  // this.prevAudio = this.prevAudio.bind(this)    
  // this.nextAudio = this.nextAudio.bind(this)

// ------------- methods ---------------- //

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

  // -------------------- html ---------------------------- //

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

      // -------------------------------------------------------- //