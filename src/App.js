import './App.css';
import React from 'react';

const DrumMachine = (props) => (
  <div className="container">
    <div id="drum-machine">
      <div id="display">{props.display}</div>
      <div className="gridContainer">
        <button className="drum-pad" id="Heater-1" onClick={props.handleClick} accesskey="Q">Q</button>
        <button className="drum-pad" id="Heater-2" onClick={props.handleClick}>W</button>
        <button className="drum-pad" id="Heater-3" onClick={props.handleClick}>E</button>
        <button className="drum-pad" id="Heater-4" onClick={props.handleClick}>A</button>
        <button className="drum-pad" id="Clap" onClick={props.handleClick}>S</button>
        <button className="drum-pad" id="Open-HH" onClick={props.handleClick}>D</button>
        <button className="drum-pad" id="Kick-n-Hat" onClick={props.handleClick}>Z</button>
        <button className="drum-pad" id="Kick" onClick={props.handleClick}>X</button>
        <button className="drum-pad" id="Closed-HH" onClick={props.handleClick}>C</button>
      </div>
    </div>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
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
    audio.play();
    console.log("test"+ soundFiles['Heater-1']);
  };

  

  handleClick = (event) => {
    const buttonId = event.target.id;
    this.setState({
      display: buttonId
    });
    this.playSound(buttonId);
  };

  handleKeyPress = (event) => {
    // Check if the pressed key corresponds to a button
    switch (event.key.toUpperCase()) {
      case 'Q':
      case '1':
        document.getElementById('Heater-1').click();
        break;
      case 'W':
      case '2':
        document.getElementById('Heater-2').click();
        break;
      case 'E':
      case '3':
        document.getElementById('Heater-3').click();
        break;
      case 'A':
        case '4':
        document.getElementById('Heater-4').click();
        break;
      case 'S':
      case '5':
        document.getElementById('Clap').click();
        break;
      case 'D':
        case '6':
        document.getElementById('Open-HH').click();
        break;
      case 'Z':
      case '7':
        document.getElementById('Kick-n-Hat').click();
        break;
      case 'X':
        case '8':
        document.getElementById('Kick').click();
        break;
      case 'C':
      case '9':
        document.getElementById('Closed-HH').click();
  
        break;

      

      default:
        break;
    }
  };

  render() {
    return (
      <DrumMachine handleClick={this.handleClick} display={this.state.display}/>
    );
  }
}

export default App;
