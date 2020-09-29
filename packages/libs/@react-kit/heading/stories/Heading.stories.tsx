import React from 'react';
import { Heading } from '../src';

export default {
  title: '@react-kit/heading',
  component: Heading,
};

export const H1Skin100 = () => (
  <Heading
    skin="100"
    tag="h1"
    styles={{
      marginBottom: {
        xs: '20',
        md: '40',
      },
    }}
  >
    Heading Test
  </Heading>
);
export const H2Skin100FontSizeOverride = () => (
  <Heading
    tag="h2"
    skin="100"
    css={`
      &&& {
        font-size: 56px;
      }
    `}
  >
    Heading Test
  </Heading>
);
export const H3Skin200 = () => (
  <Heading tag="h3" skin="200">
    Heading Test
  </Heading>
);
export const H4 = () => (
  <Heading tag="h4" styles={{ font: { xs: 'trebuchetNormal', md: 'trebuchetBold' } }}>
    Heading Test
  </Heading>
);
export const PositionRelative = () => (
  <Heading styles={{ position: 'relative', left: '80px' }}>Heading Test</Heading>
);
