import React from 'react';
import {
  Container,
  BlogIntroText,
  BlogWrapper,
  StyledSwiper,
  Slide,
  SwiperWrapper,
  BlogHeadline,
  BlogText
} from './Blog.styles';
import Tile from '../Tile/Tile';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { contentData } from '../contentData';

export const Blog: React.FC<any> = ({}) => {
  return (
    <Container id="Blog">
      <BlogWrapper>
        <BlogIntroText>
          <BlogHeadline>{contentData.blog.headline}</BlogHeadline>
          <BlogText>{contentData.blog.text}</BlogText>
        </BlogIntroText>
        <SwiperWrapper>
          <StyledSwiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10
              }
            }}
            cssMode={true}
            navigation={true}
            keyboard={true}
            loop={true}
            modules={[Navigation, Mousewheel, Keyboard]}
          >
            {contentData.blog.blogsData.map((blogData: any, index: any) => {
              return (
                <Slide key={index}>
                  <Tile tileData={blogData} isSliderTile />
                </Slide>
              );
            })}
          </StyledSwiper>
        </SwiperWrapper>
      </BlogWrapper>
    </Container>
  );
};

export default Blog;
