import React from 'react';
import {
  MenuOverlayContainer,
  CloseButton,
  ProfileContainer,
  StyledList
} from './MobileMenuOverlay.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { contentData } from '../contentData';
import { scrollToTopOfPage } from '../utils/utils';

export interface MobileMenuOverlayProps {
  openedMobileMenuOverlay: boolean;
  closeOverlay: () => void;
}

export const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({
  openedMobileMenuOverlay,
  closeOverlay
}) => {
  return (
    <MenuOverlayContainer openedMobileMenuOverlay={openedMobileMenuOverlay}>
      <CloseButton type="button" onClick={() => closeOverlay()}>
        <FontAwesomeIcon icon={faX} color="white" size="lg" />
      </CloseButton>

      <StyledList openedMobileMenuOverlay={openedMobileMenuOverlay}>
        <ProfileContainer
          onClick={() => {
            closeOverlay();
            scrollToTopOfPage();
          }}
        >
          <img src={contentData.navBar.profile.photo} alt="profile-photo" />
          <p>{contentData.navBar.profile.name}</p>
        </ProfileContainer>
        {contentData.navBar.sections.map((navSection, index) => {
          return (
            <li key={index}>
              <a href={`#${navSection}`} onClick={() => closeOverlay()}>
                {navSection}
              </a>
            </li>
          );
        })}
      </StyledList>
    </MenuOverlayContainer>
  );
};

export default MobileMenuOverlay;
