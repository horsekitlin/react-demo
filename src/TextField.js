import React from 'react';
import styled, { keyframes } from 'styled-components';
import {lightTeal, black30Percent, white, red} from './color';

const InputHighlighter = keyframes`
  from { background: ${lightTeal}; }
  to 	{ width:0; background:transparent; }
`;

const FloatLabel = styled.label`
  color:${({error, labelColor = lightTeal}) => error? red: labelColor};
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all;
`;

const Bar = styled.span`
  position: relative;
  display: block;
  &:before, &:after {
    content:'';
    height:1px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background:${({error, barColor=lightTeal}) => error ? red: barColor}; 
    transition:0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
`;

const SmallText = styled.small`
  color: ${({ subTextColor = black30Percent}) => subTextColor};
  margin-right: 4px;
`;

const HighlightBar = styled.span`
  position:absolute;
  height:60%;
  top:25%;
  left:0;
  pointer-events:none;
  opacity:0.5;
`;

const BasicInput = styled.input`
  font-size:18px;
  width: 100%;
  padding:10px 10px 10px 5px;
  display:block;
  border:none;
  border-bottom:1px solid ${({error}) => error ? red: black30Percent};
  ::placeholder {
    opacity: 0
  }
  &:focus {
    outline: none;
    border-bottom: 0px solid ${white};
    ::placeholder {
      opacity: 1
    }
  }
  &:focus ~ ${FloatLabel}, &:not([value='']) ~ ${FloatLabel}{
    top: -20px;
    font-size: 12px;
    color: ${({error, labelColor = lightTeal}) => error ? red : lightTeal};
  }

  &:focus ~ ${Bar}:before, &:focus ~ ${Bar}:after {
    width: 50%;
  }

  &:focus ~ ${HighlightBar} {
    animation:${InputHighlighter} 0.3s ease;
  }
`;

const GroupDiv = styled.div`
  position: relative;
  margin: 25px 0px;
`;

const ErrorMsg = ({error, errorMsg}) =>
  error && <SmallText subTextColor={red}>{errorMsg}</SmallText>

const HelperText = ({text}) =>
  <SmallText>{text}</SmallText>

const TextField = ({label, errorMsg, helperText='', error=false, value = '', ...props}) =>
  <GroupDiv>
    <BasicInput {...props} error={error} value={value} />
    <Bar error={error} />
    <HighlightBar />
    <FloatLabel error={error}>{label}</FloatLabel>
    <HelperText text={helperText} />
    <ErrorMsg error={error} errorMsg={errorMsg} />
  </GroupDiv>

export default TextField;
