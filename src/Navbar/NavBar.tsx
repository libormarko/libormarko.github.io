import React, { useState } from 'react';
import MobileMenuOverlay from '../MobileMenuOverlay/MobileMenuOverlay';
import {
  NavBarWrapper,
  NavBarDesktopContainer,
  ProfileContainer,
  ProfileName,
  ProfileImage,
  NavSectionsContainer,
  Section,
  NavBarMobileContainer,
  HamburgerButton,
  WidthContainer
} from './NavBar.styles';
import { scrollToTopOfPage } from '../utils/utils';
import { contentData } from '../contentData';

export const NavBar: React.FC<any> = () => {
  const [openedMobileMenuOverlay, setOpenedMobileMenuOverlay] = useState<boolean>(false);
  const [navBarItemIsHovered, setNavBarItemIsHovered] = useState<string | null>(null);

  const openOverlay = () => {
    setOpenedMobileMenuOverlay(true);
    const htmlElem = document.querySelector('html');
    if (htmlElem) htmlElem.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    setOpenedMobileMenuOverlay(false);
    const htmlElem = document.querySelector('html');
    if (htmlElem) htmlElem.style.overflow = 'unset';
  };

  return (
    <NavBarWrapper>
      <NavBarDesktopContainer navBarItemIsHovered={navBarItemIsHovered}>
        <WidthContainer>
          <ProfileContainer onClick={() => scrollToTopOfPage()}>
            <ProfileName>{contentData.navBar.profile.name}</ProfileName>
          </ProfileContainer>
          <NavSectionsContainer>
            {contentData.navBar.sections.map((navSection, index) => {
              return (
                <Section
                  key={index}
                  navBarItemIsHovered={navBarItemIsHovered === navSection}
                  href={`#${navSection}`}
                  onMouseEnter={() => setNavBarItemIsHovered(navSection)}
                  onMouseLeave={() => setNavBarItemIsHovered(null)}
                >
                  {navSection}
                </Section>
              );
            })}
          </NavSectionsContainer>
        </WidthContainer>
      </NavBarDesktopContainer>

      <NavBarMobileContainer openedMobileMenu={openedMobileMenuOverlay}>
        <HamburgerButton
          openedMobileMenu={openedMobileMenuOverlay}
          type="button"
          onClick={() => openOverlay()}
        >
          <span></span>
          <span></span>
        </HamburgerButton>
      </NavBarMobileContainer>
      <MobileMenuOverlay
        openedMobileMenuOverlay={openedMobileMenuOverlay}
        closeOverlay={closeOverlay}
      />
    </NavBarWrapper>
  );
};

export default NavBar;
