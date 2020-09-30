import React from 'react';
import { Flex, Item } from '../src';

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

export const Gap = () => (
  <>
    <Flex
      gap={{ xs: '15px 15px', md: '30px 30px' }}
      flexWrap="wrap"
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Item width={{ xs: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col1
      </Item>
      <Item width={{ xs: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col2
      </Item>
      <Item width={{ xs: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col3
      </Item>
      <Item width={{ xs: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col1
      </Item>
      <Item width={{ xs: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col2
      </Item>
      <Item width={{ xs: 1 / 2, md: 1 / 3 }}>
        <Flex gap="15px 15px" flexWrap="wrap">
          <Item width={1 / 3} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
            Col1
          </Item>
          <Item width={1 / 3} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
            Col2
          </Item>
          <Item width={1 / 3} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
            Col3
          </Item>
        </Flex>
      </Item>

      <Item
        width={{ xs: 1 / 2, md: 1 / 3 }}
        offsetLeft={{ xs: 1 / 2, md: 1 / 3 }}
        styles={{
          backgroundColor: '#ccc',
          padding: '20px',
        }}
      >
        Col1
      </Item>
      <Item width={{ xs: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col2
      </Item>
    </Flex>
  </>
);
