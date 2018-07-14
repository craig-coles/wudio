import React from 'react';
import styled, {css} from 'styled-components';


function Knob909(props){

  const {values: {mouseCoordsY}, control, synthContext} = props;

  const Knob909 = styled('div')`
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:#080911;
    position:relative;
    left:calc(50% - 25px);
    top:calc(50% - 25px);
    transform:rotate(${1190 * 4}deg)
  `;

  const LevelIndicator = styled('div')`
    width:5px;
    height:2px;
    background:#fe7d00;
    position:absolute;
    top:24px;
  `;

  let rotationDeg = mouseCoordsY;

  if(mouseCoordsY > 1032){
    rotationDeg = 1032
    
  }

  if(mouseCoordsY > 1432){
    rotationDeg = 1432
  }

  const rotationStyle = {
    transform:`rotate(${-rotationDeg * 4}deg)`
  };

  synthContext.knobOutput(rotationDeg, control);

  return (
    <Knob909 style={rotationStyle}>
      <LevelIndicator />
    </Knob909>
    
  );
}

export default Knob909;