import React from 'react';
import styled from 'styled-components';
import { textGrey, themeBlue, white } from './color';

const Checkbox = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  font-size: 30px;
  appearance: none;
  width: 3.5em;
  height: 1.5em;
  background: ${textGrey};
  border-radius: 3em;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: all .2s ease-in-out;

  :checked {
    background: ${({bgColor = themeBlue}) => bgColor};
  }

  :after {
    position: absolute;
    content: "";
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background: ${white};
    box-shadow: 0 0 .25em rgba(0,0,0,.3);
    transform: scale(.7);
    left: 0;
    transition: all .2s ease-in-out;
  }

  :checked:after {
    left: calc(100% - 1.5em);
  }
`;


const ToggleCheckbox = ({bgColor}) =>
  <Checkbox>
    <Input type="checkbox" value={true} bgColor={bgColor} />
  </Checkbox>

export default ToggleCheckbox;
