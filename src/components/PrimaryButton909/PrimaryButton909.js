import React from 'react';
import PrimaryButton909Light from '../PrimaryButton909Light/PrimaryButton909Light';
import SynthContext from '../../contexts/SynthContext/SynthContext';
import styled, {css} from 'styled-components';

const PrimaryButton909Styled = styled('div')`
    width:50px;
    height:50px;
    border-radius:5px;
    background:#96b0ba;
    border:2px solid #202928;
    border-left-width:${props => props.position.on ? '2px' : '3px'};
    border-right-width:${props => props.position.on ? '2px' : '3px'};
    border-bottom-width:${props => props.position.on ? '2px' : '4px'};
    transition: all 0.1s;
    position:relative;
  `;

class PrimaryButton909 extends React.Component {

  constructor(props){
    super(props);
    this.onUp = this.onUp.bind(this);
    this.state = {
      on: false
    }
  }

  onUp(synthContext){
    
    this.setState((prevState)=>{
      return {on:!prevState.on}
    }, () => {
      synthContext.toggleOscillator(this.state);
    });
  }

  render(){
    return (
      <SynthContext.Consumer>
        {({synthContext})=>{
          return (
            <PrimaryButton909Styled onPointerUp={(e)=>{this.onUp(synthContext)}} position={this.state}>
              <PrimaryButton909Light on={this.state.on}/>
            </PrimaryButton909Styled>
          )
        }}
      </SynthContext.Consumer>
    )
  }

}

export default PrimaryButton909;