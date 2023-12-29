import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  ProfileImage,
  ContentWrapper,
  IntroWrapper,
  TextWrapper,
  ChewronDown,
  Headline,
  Text
} from './Intro.styles';
import { contentData } from '../contentData';

export const Intro: React.FC<any> = ({}) => {
  return (
    <IntroWrapper>
      <ContentWrapper>
        <ProfileImage src={contentData.intro.profilePhoto} alt="profile-photo" />
        <TextWrapper>
          <Headline>{contentData.intro.headline}</Headline>
          <Text>{contentData.intro.text}</Text>
        </TextWrapper>
      </ContentWrapper>
      <ChewronDown href="#About">
        <FontAwesomeIcon icon={faChevronDown} size="lg" />
      </ChewronDown>
    </IntroWrapper>
  );
};

export default Intro;
