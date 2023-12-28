import React from 'react';
import {
  BlogTileWrapper,
  BlogTileHeadline,
  BlogTileText,
  BlogTileImage,
  BlogTileInfoWrapper
} from './Blog.styles';
import { TileButton } from '../TileButton/TileButton';

export interface BlogTileProps {
  blogPostData: any;
}

export const BlogTile: React.FC<BlogTileProps> = ({ blogPostData }) => {
  return (
    <BlogTileWrapper>
      <BlogTileInfoWrapper>
        <BlogTileHeadline>{blogPostData.headline}</BlogTileHeadline>
        <BlogTileText>{blogPostData.text}</BlogTileText>
        <TileButton label="Medium link" link={blogPostData.link} />
      </BlogTileInfoWrapper>
      <BlogTileImage src={blogPostData.screenshot} alt="project-photo"></BlogTileImage>
    </BlogTileWrapper>
  );
};

export default BlogTile;
