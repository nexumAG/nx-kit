import { ReactNode } from 'react';

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export enum HeadingSkin {
  skin100 = 'skin100',
  skin200 = 'skin200',
}

export type HeadingProps = {
  children: ReactNode;
  tag?: HeadingTag;
  skin?: HeadingSkin;
};
