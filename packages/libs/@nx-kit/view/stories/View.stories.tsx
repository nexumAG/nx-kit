import React from 'react';
import { View } from '../src';

export default {
  title: '@nx-kit/view',
  component: View,
};

export const Default = () => (
  <View
    elementType="main"
    height="200px"
    backgroundColor={{
      xs: 'primary500',
      sm: 'primary600',
      md: 'primary700',
      xl: 'primary800',
      xxl: 'secondary700',
      xxxl: 'secondary800',
    }}
    opacity={0.5}
  />
);

export const MarginPaddingXY = () => (
  <>
    <View
      height="50px"
      backgroundColor="primary800"
      marginY="20"
      marginX={{ xs: '20', md: '40' }}
    />
    <View
      height="50px"
      backgroundColor="primary800"
      marginY="20"
      paddingY={{ xs: '20', md: '40' }}
    />
  </>
);

export const Test = () => (
  <>
    {Array.from(Array(1000)).map((index) => (
      <View
        key={index}
        height="1px"
        backgroundColor="blue"
        // marginX={{ xs: '20', md: '40' }}
      />
    ))}
  </>
);

export const Test2 = () => (
  <>
    {Array.from(Array(1000)).map((index) => (
      <div key={index} style={{ height: '1px', backgroundColor: 'red' }} />
    ))}
  </>
);
