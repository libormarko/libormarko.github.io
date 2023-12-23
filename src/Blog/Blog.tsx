import React from 'react';
import {
  BlogIntroText,
  BlogWrapper,
  StyledSwiper,
  Slide,
  SwiperWrapper,
  BlogHeadline,
  BlogText
} from './Blog.styles';
import BlogTile from './BlogTile';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

export const Blog: React.FC<any> = ({}) => {
  return (
    <BlogWrapper id="Blog">
      <BlogIntroText>
        <BlogHeadline>Blog</BlogHeadline>
        <BlogText>
          Selection of personal blog posts about personal projects, that I did for fun of learning
          and coding. More on my medium Lorem Ipsum Lorem Ipsum...
        </BlogText>
      </BlogIntroText>
      <SwiperWrapper>
        <StyledSwiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          }}
          cssMode={true}
          navigation={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Mousewheel, Keyboard]}
        >
          <Slide>
            <BlogTile />
          </Slide>
          <Slide>
            <BlogTile />
          </Slide>
          <Slide>
            <BlogTile />
          </Slide>
          <Slide>
            <BlogTile />
          </Slide>
          <Slide>
            <BlogTile />
          </Slide>
          <Slide>
            <BlogTile />
          </Slide>
        </StyledSwiper>
      </SwiperWrapper>
    </BlogWrapper>
  );
};

export default Blog;
