import React from 'react';
import {
  BlogTileWrapper,
  BlogTileHeadline,
  BlogTileText,
  BlogTileImage,
  BlogTileInfoWrapper
} from './Blog.styles';
import { TileButton } from '../TileButton/TileButton';

export const BlogTile: React.FC<any> = ({}) => {
  return (
    <BlogTileWrapper>
      <BlogTileInfoWrapper>
        <BlogTileHeadline>Blog</BlogTileHeadline>
        <BlogTileText>Blog info text lorem ipsum</BlogTileText>
        <TileButton label={'Medium link'} />
      </BlogTileInfoWrapper>
      <BlogTileImage
        src="https://miro.medium.com/v2/resize:fit:1433/1*hq6b0Dy--KQVDs5df5agtQ.png"
        alt="project-photo"
      ></BlogTileImage>
    </BlogTileWrapper>
  );
};

export default BlogTile;
