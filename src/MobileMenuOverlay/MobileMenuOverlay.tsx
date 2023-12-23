import React from 'react';
import {
  MenuOverlayContainer,
  CloseButton,
  ProfileContainer,
  StyledList
} from './MobileMenuOverlay.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { navSections } from '../Navbar/NavBar';

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
        <ProfileContainer>
          <img src="https://avatars.githubusercontent.com/u/44037760?v=4" alt="profile-photo" />
          <p>Libor Marko</p>
        </ProfileContainer>
        {navSections.map((navSection, index) => {
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
