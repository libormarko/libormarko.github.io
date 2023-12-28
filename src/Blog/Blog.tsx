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
import { contentData } from '../contentData';

export const Blog: React.FC<any> = ({}) => {
  return (
    <BlogWrapper id="Blog">
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
          {contentData.blog.blogsData.map((blogPost: any, index: any) => {
            return (
              <Slide key={index}>
                <BlogTile blogPostData={blogPost} />
              </Slide>
            );
          })}
        </StyledSwiper>
      </SwiperWrapper>
    </BlogWrapper>
  );
};

export default Blog;
