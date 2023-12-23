import React, { useState } from 'react';
import {
  Headline,
  ContactOptions,
  StyledAnchor,
  Text,
  Label,
  ContactIntroText
} from '../Contact/Contact.styles';
import { ContactWrapper } from './Contact.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Contact: React.FC<any> = ({}) => {
  return (
    <ContactWrapper id="Contact">
      <ContactIntroText>
        <Headline>Contact me lorem ipsum</Headline>
        <Text>Reach out to me on following platforms Lorem Ipsum Lorem Ipsum...</Text>
      </ContactIntroText>
      <ContactOptions>
        <StyledAnchor href="mailto:marko.libor@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope as IconProp} size="2x" />
          <Label>E-mail</Label>
        </StyledAnchor>
        <StyledAnchor href="https://www.linkedin.com/in/libor-marko/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin as IconProp} size="2x" />
          <Label>LinkedIn</Label>
        </StyledAnchor>
        <StyledAnchor href="https://github.com/libormarko" target="_blank">
          <FontAwesomeIcon icon={faGithub as IconProp} size="2x" />
          <Label>GitHub</Label>
        </StyledAnchor>
        <StyledAnchor href="https://medium.com/@marko.libor" target="_blank">
          <FontAwesomeIcon icon={faMedium as IconProp} size="2x" />
          <Label>Medium</Label>
        </StyledAnchor>
      </ContactOptions>
    </ContactWrapper>
  );
};

export default Contact;
