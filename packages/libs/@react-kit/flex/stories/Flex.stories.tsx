import React from 'react';
import { Flex } from '../src';

export default {
  title: '@react-kit/flex',
  component: Flex,
};

export const Default = () => (
  <Flex justifyContent="space-between" styles={{ display: { xs: 'block', md: 'flex' } }}>
    <div>Col1</div>
    <div>Col2</div>
    <div>Col3</div>
  </Flex>
);

export const Responsive = () => (
  <Flex justifyContent="space-between" flexWrap={{ xs: 'wrap', sm: 'nowrap' }}>
    <div>Col1 More and even more content</div>
    <div>Col2 More and even more content</div>
    <div>Col3 More and even more content</div>
  </Flex>
);

export const WithStyles = () => (
  <Flex
    justifyContent="space-between"
    flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
    styles={{
      backgroundColor: '#f0f0f0',
      padding: { xs: '20', md: '40' },
      width: { xs: 'auto', md: '75%' },
    }}
  >
    <div>Col1 More and even more content</div>
    <div>Col2 More and even more content</div>
    <div>Col3 More and even more content</div>
  </Flex>
);

export const Inline = () => (
  <>
    {'Pre '}
    <Flex
      justifyContent="space-between"
      inline
      styles={{
        width: { xs: 'auto', md: '200px' },
      }}
    >
      <div>Col1</div>
      <div>Col2</div>
      <div>Col3</div>
    </Flex>
    {' Post'}
  </>
);
