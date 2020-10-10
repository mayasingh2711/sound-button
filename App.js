import React, {Component} from "react";
import "./App.css";
import sound1 from './audioClip/1.mp3';
import {Howl, Howler} from 'howler';

const audioClip = [
  {sound: sound1, label: 'Done'}
]

class App extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }

  RenderButtonAndSound = ()=>{
    return audioClip.map((soundObj, index)=>{
      return(
        <button key={index} onClick={()=>this.SoundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      )
    })
  }

  render() {
    Howler.volume(1.2)
    return <div className="App">
      {this.RenderButtonAndSound()}
    </div>;
  }
}
export default App;
