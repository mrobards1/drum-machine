import './App.css';
import React from 'react';




const DrumMachine = (props) => (
  <div className="container">
    <div id="drum-machine">
      <div id="display">{props.display}</div>
      <div className="gridContainer">
        <button className="drum-pad" id="Heater-1" onClick={props.handleClick}>Q</button>
        <button className="drum-pad" id="Heater-2" onClick={props.handleClick}>W</button>
        <button className="drum-pad" id="Heater-3" onClick={props.handleClick}>E</button>
        <button className="drum-pad" id="Heater-4" onClick={props.handleClick}>A</button>
        <button className="drum-pad" id="Clap" onClick={props.handleClick}>S</button>
        <button className="drum-pad" id="Open-HH" onClick={props.handleClick}>D</button>
        <button className="drum-pad" id="Kick-n-Hat" onClick={props.handleClick}>Z</button>
        <button className="drum-pad" id="Kick" onClick={props.handleClick}>X</button>
        <button className="drum-pad" id="Closed-HH" onClick={props.handleClick}>C</button>
      </div>
      <div className="sliderContainer">
        <input type="range" min="1" max="100" value={props.volume} class="slider" id="volume-slider" onChange={props.handleVolumeChange}></input>
      </div>
    </div>
  </div>
);



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      volume: 50,
    }
  };
  
  componentDidMount() {
    // Add event listener for key presses on mount
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    // Remove event listener when component unmounts
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  playSound = (id) => {
    const soundFiles = {
      'Heater-1': './sounds/Heater-1.mp3',
      'Heater-2': './sounds/Heater-2.mp3',
      'Heater-3': './sounds/Heater-3.mp3',
      'Heater-4': './sounds/Heater-4.mp3',
      'Clap': './sounds/Clap.mp3',
      'Open-HH': './sounds/Open-HH.mp3',
      'Kick-n-Hat': './sounds/Kick_n_Hat.mp3',
      'Kick': './sounds/Kick.mp3',
      'Closed-HH': './sounds/Closed-HH.mp3'
    };
    const audio = new Audio(soundFiles[id]);
    audio.volume = this.state.volume / 100;
    audio.play();
  };

  handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    this.setState({
      volume: newVolume,
    })
  }

  handleClick = (event) => {
    const buttonId = event.target.id;
    this.setState({
      display: buttonId,
      volume: 50,
    });
    this.playSound(buttonId);
  };

 
  handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const buttonId = this.getKeyButtonId(key);
  
    if (buttonId) {
      const button = document.getElementById(buttonId);
  
      if (button) {
        button.style.backgroundColor = '#d9dad7';
        button.style.color = '#d9dad7';
        button.style.border = 'none';
        setTimeout(() => {
          // Restore original styles
          button.style.backgroundColor = '';
          button.style.color = '';
  
          // Trigger a click on the button
          button.click();
        }, 100);
      }
    }
  };
  
  getKeyButtonId = (key) => {
    // Map the key to the corresponding button id
    switch (key) {
      case 'Q':
      case '1':
        return 'Heater-1';
      case 'W':
      case '2':
        return 'Heater-2';
      case 'E':
      case '3':
        return 'Heater-3';
      case 'A':
      case '4':
        return 'Heater-4';
      case 'S':
      case '5':
        return 'Clap';
      case 'D':
      case '6':
        return 'Open-HH';
      case 'Z':
      case '7':
        return 'Kick-n-Hat';
      case 'X':
      case '8':
        return 'Kick';
      case 'C':
      case '9':
        return 'Closed-HH';
      default:
        return null;
    }
  };
  
  render() {
    return (
      <DrumMachine 
        handleClick={this.handleClick} 
        handleSound={this.handleSound} 
        display={this.state.display} 
        handleVolumeChange ={this.handleVolumeChange}/>
    );
  }
}

export default App;
