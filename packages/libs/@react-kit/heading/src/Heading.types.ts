import { ReactNode } from 'react';

export type HeadingTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'span'
  | 'p'
  | 'th';

export type HeadingProps = {
  className?: string;
  children: ReactNode;
  tag?: HeadingTag;
  skin: string;
};
