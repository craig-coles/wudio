import React from 'react';
import SynthEngine from '../components/SynthEngine/SynthEngine';
import KnobPlate909 from '../components/KnobPlate909/KnobPlate909';
import PrimaryButton909 from '../components/PrimaryButton909/PrimaryButton909';
import Knob909 from '../components/Knob909/Knob909';

function About(){

  return (
    <div>
      <h1>ABOUT!!</h1>
      <SynthEngine>
        <React.Fragment>
          <PrimaryButton909 />
          <KnobPlate909>
            {
              (state, synthContext) => (
                <Knob909 values={state} control="frequency" synthContext={synthContext}/>
              )
            }
          </KnobPlate909>

          <KnobPlate909>
            {
              (state, synthContext) => (
                <Knob909 values={state} control="detune" synthContext={synthContext}/>
              )
            }
          </KnobPlate909>
        </React.Fragment>
      </SynthEngine>
    </div>
  )
  
}

export default About;