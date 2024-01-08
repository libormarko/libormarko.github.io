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

export const Container = styled.div`
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
    background-position: 0% 60%;
    background-repeat: no-repeat;
    background-size: cover;
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

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding-left: ${variables.spacingL};
    padding-right: ${variables.spacingL};
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 48px;
  align-self: center;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    flex-direction: row;
    max-width: 90%;
  }
  @media only screen and (min-width: ${variables.breakpointL}px) {
    max-width: 80%;
  }
  @media only screen and (min-width: ${variables.breakpointXL}px) {
    max-width: 55%;
  }
  @media only screen and (min-width: ${variables.breakpointXXL}px) {
    max-width: 40%;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    text-align: left;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: auto;
  height: 250px;
  align-self: center;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    margin-right: ${variables.spacingL};
  }
`;

export const Headline = styled.h1`
  font-size: 46px;
  font-weight: normal;
  align-self: center;
  margin-bottom: ${variables.spacingS};
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 20px;
`;

export const ChewronDown = styled.a`
  height: 50px;
  cursor: pointer;
  color: ${variables.colorBlack};
  position: relative;
  bottom: ${variables.spacing4XL};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    bottom: ${variables.spacingXXL};
  }

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
