import { ReactNode } from 'react';

export enum HeadingTag {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export enum HeadingSkin {
  skin100 = 'skin100',
  skin200 = 'skin200',
}

export type HeadingProps = {
  children: ReactNode;
  tag?: HeadingTag;
  skin?: HeadingSkin;
};
