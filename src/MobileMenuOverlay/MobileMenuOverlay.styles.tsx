import styled, { keyframes } from 'styled-components';
import * as variables from '../variables';

export const MenuOverlayContainer = styled.div<{ openedMobileMenuOverlay: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.openedMobileMenuOverlay ? '0' : '100vw')};
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: ${variables.colorBlack};
  display: grid;
  grid-template-rows: 48px auto;
  transition: left 0.5s cubic-bezier(0.3, 0, 0, 1);
  transition-delay: ${(props) => (props.openedMobileMenuOverlay ? '0.25s' : 'unset')};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  justify-self: end;
  background-color: unset;
  width: fit-content;
  border-width: 0;
  padding-right: ${variables.spacingL};
  padding-left: 0;
`;

export const ProfileContainer = styled.li`
  height: 40px;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    border-radius: 50%;
  }

  p {
    color: ${variables.colorGrey00};
    margin-left: ${variables.spacingM};
    cursor: default;
    font-size: 20px;
  }
`;

export const StyledList = styled.ul<{ openedMobileMenuOverlay: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin-top: 35%;

  li {
    margin-bottom: ${variables.spacingXXL};
    position: relative;
    opacity: ${(props) => (props.openedMobileMenuOverlay ? '1' : '0')};
    top: ${(props) => (props.openedMobileMenuOverlay ? '0' : '-30px')};
    left: ${(props) => (props.openedMobileMenuOverlay ? '0' : '80px')};
    transition: ${(props) =>
      props.openedMobileMenuOverlay
        ? 'left 1s cubic-bezier(0.3, 0, 0, 1),top 1s cubic-bezier(0.3, 0, 0, 1),opacity 1s cubic-bezier(0.3, 0, 0, 1)'
        : 'left 0.5s cubic-bezier(0.3, 0, 0, 1),top 0.5s cubic-bezier(0.3, 0, 0, 1),opacity 0.5s cubic-bezier(0.3, 0, 0, 1)'};

    &:nth-child(1) {
      margin-top: ${variables.spacingXXL};
      transition-delay: ${(props) => (props.openedMobileMenuOverlay ? '0.30s' : '0s')};
    }
    &:nth-child(2) {
      margin-top: ${variables.spacingXL};
      transition-delay: ${(props) => (props.openedMobileMenuOverlay ? '0.40s' : '0s')};
    }
    &:nth-child(3) {
      transition-delay: ${(props) => (props.openedMobileMenuOverlay ? '0.50s' : '0s')};
    }
    &:nth-child(4) {
      transition-delay: ${(props) => (props.openedMobileMenuOverlay ? '0.60s' : '0s')};
    }
    &:nth-child(5) {
      transition-delay: ${(props) => (props.openedMobileMenuOverlay ? '0.70s' : '0s')};
    }
  }

  a {
    color: ${variables.colorGrey00};
    text-decoration: none;
    background-color: unset;
    display: flex;
    align-items: center;
    font-size: 20px;
  }
`;
