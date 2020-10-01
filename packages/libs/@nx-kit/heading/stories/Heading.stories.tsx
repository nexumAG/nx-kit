import React from 'react';
import { Heading } from '../src';

export default {
  title: '@nx-kit/heading',
  component: Heading,
};

export const H1Skin100 = () => (
  <Heading skin="100" elementType="h1">
    Heading Test
  </Heading>
);

export const H2Skin100FontSizeOverride = () => (
  <Heading
    elementType="h2"
    skin="100"
    css={`
      &&& {
        font-size: 80px;
      }
    `}
  >
    Heading Test
  </Heading>
);

export const H3Skin200 = () => (
  <Heading elementType="h3" skin="200">
    Heading Test
  </Heading>
);
export const H4 = () => (
  <Heading elementType="h4" styles={{ font: { xs: 'trebuchetNormal', md: 'trebuchetBold' } }}>
    Heading Test
  </Heading>
);
export const PositionRelative = () => (
  <Heading styles={{ position: 'relative', left: '80px', textTransform: 'uppercase' }}>
    Heading Test
  </Heading>
);

export const StylesTest = () => (
  <Heading
    skin="100"
    elementType="h1"
    styles={{
      marginBottom: {
        xs: '20',
        md: '40',
      },
      paddingBottom: {
        xs: '20',
        md: '40',
      },
      paddingTop: '20',
      font: {
        xs: 'trebuchetNormal',
        md: 'trebuchetBold',
      },
    }}
  >
    Heading Test
  </Heading>
);
