import React from 'react';
import {
  Container,
  Headline,
  ContactOptions,
  StyledAnchor,
  Text,
  Label,
  ContactIntroText
} from '../Contact/Contact.styles';
import { ContactWrapper } from './Contact.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { contentData } from '../contentData';

export const Contact: React.FC<any> = ({}) => {
  return (
    <Container>
      <ContactWrapper id="Contact">
        <ContactIntroText>
          <Headline>{contentData.contact.headline}</Headline>
          <Text>{contentData.contact.text}</Text>
        </ContactIntroText>
        <ContactOptions>
          {contentData.contact.contactOptions.map((contactOption, index) => {
            return (
              <StyledAnchor href={contactOption.link} target="_blank" key={index}>
                <FontAwesomeIcon icon={contactOption.icon as IconProp} size="2x" />
                <Label>{contactOption.name}</Label>
              </StyledAnchor>
            );
          })}
        </ContactOptions>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
