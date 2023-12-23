import React from 'react';
import { TagWrapper } from './Tag.styles';

export interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  return <TagWrapper>{label}</TagWrapper>;
};

export default Tag;
