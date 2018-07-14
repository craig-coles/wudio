import React from 'react';
import SynthContext from '../../contexts/SynthContext/SynthContext';

class SynthEngine extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      knobOutput: this.knobOutput,
      toggleOscillator: this.toggleOscillator,
      synthContext: this
    }

  }

  setAudioContext(){

    try {
      window.AudioContext = window.AudioContext||window.webkitAudioContext;
      this.audioContext = new AudioContext();
      this.oscillator = this.audioContext.createOscillator();
      this.oscillator.start();
    } catch(e){
      throw new Error('Browser does not support web audio');
    }
  }

  componentDidMount(){
    this.setAudioContext();
  }

  toggleOscillator({on}){
    if(on) {
      this.oscillator.connect(this.audioContext.destination);
    } else {
      this.oscillator.disconnect(this.audioContext.destination);
    }
  }

  knobOutput(value, control){
    if(this.oscillator) {
      this.oscillator[control].value = value;
    }
  }

  render(){
    
    return ( 
      <SynthContext.Provider value={this.state}>
        {this.props.children}
      </SynthContext.Provider>
    )
  }
}

export default SynthEngine;