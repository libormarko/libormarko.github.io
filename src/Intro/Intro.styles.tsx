import styled, { css, keyframes } from 'styled-components';
import * as variables from '../variables';

const scrollDown = keyframes`
  0% {
    opacity: 0;
    top: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 40px;
  }
}
`;

export const IntroWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 90% 1fr;
  height: 100vh;
  justify-items: center;
  padding: 0 ${variables.spacingM};
  position: relative;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.45;
    background-image: url(/BerlinBackground.png);
    background-position: 0% 70%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding-left: ${variables.spacingL};
    padding-right: ${variables.spacingL};
  }
`;

export const TextWrapper = styled.div`
  margin-top: 48px;
  align-self: center;
  text-align: center;
  z-index: 1;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    text-align: left;
    max-width: 80%;
  }
  @media only screen and (min-width: ${variables.breakpointL}px) {
    max-width: 70%;
  }
  @media only screen and (min-width: ${variables.breakpointXL}px) {
    max-width: 50%;
  }
  @media only screen and (min-width: ${variables.breakpointXXL}px) {
    max-width: 40%;
  }
`;

export const Headline = styled.h1`
  font-size: 45px;
  font-weight: normal;
  align-self: center;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 20px;
`;

export const ChewronDown = styled.a`
  height: 50px;
  cursor: pointer;
  color: ${variables.colorBlack};

  &:hover {
    color: ${variables.colorBlue};
  }

  svg {
    position: relative;
    animation: ${css`
      ${scrollDown} 2s cubic-bezier(0.3, 0, 0, 1) infinite
    `};
  }
`;
