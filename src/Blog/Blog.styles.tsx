import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as variables from '../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BlogWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: ${variables.spacing3XL};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding-top: ${variables.spacing4XL};
    min-height: 50vh;
  }
`;

export const BlogIntroText = styled.div`
  padding: 0 ${variables.spacingM};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding: 0;
  }
`;

export const BlogHeadline = styled.h2`
  font-size: 35px;
  font-weight: normal;
  margin-bottom: ${variables.spacingS};
  text-align: center;
`;

export const BlogText = styled.p`
  text-align: center;
  margin-bottom: ${variables.spacing3XL};
  margin-top: 0;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding-left: ${variables.spacingL};
    padding-right: ${variables.spacingL};
  }
`;

export const SwiperWrapper = styled.div`
  width: 100%;
`;

export const StyledSwiper = styled(Swiper)`
  height: 450px;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    padding-left: ${variables.spacingXXL};
    padding-right: ${variables.spacingXXL};
  }

  .swiper-button-prev {
    left: 12.5px;
  }

  .swiper-button-next {
    right: 12.5px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${variables.colorBlue};
    background: ${variables.colorGrey20};
    border-radius: 17.5px;
    width: 35px;
    height: 35px;

    @media only screen and (min-width: ${variables.breakpointM}px) {
      width: unset;
      background: unset;
      border-radius: unset;
    }
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    position: relative;

    @media only screen and (min-width: ${variables.breakpointM}px) {
      position: static;
    }
  }

  .swiper-button-prev:after {
    left: -1.5px;
  }

  .swiper-button-next:after {
    right: -1.5px;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 20px;
    font-weight: bold;
  }

  .swiper-slide {
    height: unset;
  }
`;

export const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${variables.colorBlack};
`;

export const BlogTileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BlogTileInfoWrapper = styled.div`
  text-align: center;
`;

export const BlogTileHeadline = styled.h3`
  font-size: 20px;
  margin-bottom: ${variables.spacingXS};
`;

export const BlogTileText = styled.p`
  margin-top: 0;
  margin-left: ${variables.spacingL};
  margin-right: ${variables.spacingL};
`;

export const BlogTileButton = styled.a`
  display: flex;
  align-items: flex-end;
  color: ${variables.colorBlue};
  cursor: pointer;
  justify-content: center;
  text-decoration: none;
`;

export const ButtonLabel = styled.span`
  margin-right: ${variables.spacingXXS};
`;

export const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
  margin-bottom: 3px;
`;

export const BlogTileImage = styled.img`
  width: calc(100% - 20px);
  height: 60%;
  object-fit: cover;
  padding: 10px;
`;
