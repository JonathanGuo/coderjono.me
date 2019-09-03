import * as React from 'react';

import styled, { keyframes } from 'styled-components';

const ScrollButton = styled.span`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5%;
  text-align: center;
`;

const InnerButton = styled.button`
  border: none;
  outline: none;
  display: inline-block;
  line-height: 18px;
  font-size: 13px;
  font-weight: normal;
  color: #231f20;
  letter-spacing: 2px;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.8;
    outline: none;
  }
`;

const scrolling = keyframes`
  0% {
    opacity: 1;
    top: 29%;
	}
	15% {
    opacity: 1;
  	top: 50%;
	}
	50% {
    opacity: 0;
    top: 50%;
  }
	100% {
    opacity: 0;
    top: 29%;
	}
`;

const Mouse = styled.span`
  position: relative;
  display: block;
  width: 35px;
  height: 55px;
  margin: 0 auto 20px;
  box-sizing: border-box;
  border: 3px solid #231f20;
  border-radius: 23px;

  &:focus {
    outline: none;
  }

  & > * {
    position: absolute;
    display: block;
    top: 29%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    background: #231f20;
    border-radius: 50%;
    -webkit-animation: ${scrolling} 2.5s linear infinite;
    -moz-animation: ${scrolling} 2.5s linear infinite;
    animation: ${scrolling} 2.5s linear infinite;
  }
`;

const ScrollDownMouse: React.FunctionComponent<{}> = props => (
  <ScrollButton>
    <InnerButton aria-label="Scroll Down">
      <Mouse>
        <span />
      </Mouse>
    </InnerButton>
  </ScrollButton>
);

export default ScrollDownMouse;
