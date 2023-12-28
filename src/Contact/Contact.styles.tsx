import styled from 'styled-components';
import * as variables from '../variables';

export const Container = styled.div`
  background: ${variables.colorGrey00};
`;

export const ContactWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  min-height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactIntroText = styled.div`
  padding: 0 ${variables.spacingM};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding: 0;
  }
`;

export const Headline = styled.h1`
  font-size: 35px;
  font-weight: normal;
  text-align: center;
  align-self: center;
  margin-bottom: ${variables.spacingXS};
`;

export const Text = styled.p`
  margin-bottom: ${variables.spacing3XL};
  text-align: center;
`;

export const ContactOptions = styled.div`
  display: flex;
`;

export const StyledAnchor = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${variables.colorGrey30};
  margin: 0 20px;
  transition: color 0.5s cubic-bezier(0.3, 0, 0, 1);

  :hover {
    color: ${variables.colorBlue};
  }
`;

export const Label = styled.p`
  margin-top: ${variables.spacingXXS};
`;
