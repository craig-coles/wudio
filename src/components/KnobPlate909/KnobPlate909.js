import React from 'react';
import styled, {css} from 'styled-components';
import KnobLevelPlateMark from '../KnobLevelPlateMark/KnobLevelPlateMark';
import SynthContext from '../../contexts/SynthContext/SynthContext';

const KnobPlate909Styled = styled('div')`
    width:100px;
    height:100px;
    border-radius:5px;
    background:#e4e4db;
    position:relative;
  `;

class KnobPlate909 extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      mouseCoordsX: 0,
      mouseCoordsY: 0
    }
  }

  mouseMove(e){
    e.persist();
    this.setState(() => {
      return {mouseCoordsX: e.screenX, mouseCoordsY: e.screenY };
    });
  }

  getKnobLevelPlateMarks(numberOfMarks){
    return (
      [
        <KnobLevelPlateMark key="uni" rotation={0} top={50} left={10} height={1} width={40} backgroundColor="#55627e" />,
      ]
    )
  }

  render(){
    return (
      <SynthContext.Consumer>
        {({synthContext}) => (
            <KnobPlate909Styled onMouseMove={this.mouseMove.bind(this)}>
              {this.getKnobLevelPlateMarks(11)}
              {this.props.children(this.state, synthContext)}
            </KnobPlate909Styled>
          )
        }
      </SynthContext.Consumer>
    );
  }
}

export default KnobPlate909;