import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { IntroWrapper, TextWrapper, ChewronDown, Headline, Text } from './Intro.styles';
import { contentData } from '../contentData';

export const Intro: React.FC<any> = ({}) => {
  return (
    <IntroWrapper>
      <TextWrapper>
        <Headline>{contentData.intro.headline}</Headline>
        <Text>{contentData.intro.text}</Text>
      </TextWrapper>
      <ChewronDown href="#About">
        <FontAwesomeIcon icon={faChevronDown} size="lg" />
      </ChewronDown>
    </IntroWrapper>
  );
};

export default Intro;
