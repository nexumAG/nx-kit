import React from 'react';
import { Flex } from '../src';

export default {
  title: '@nx-kit/flex',
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
      flexType="inline-flex"
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
      gap={{ xs: '5px', sm: '15px', md: '15px 30px' }}
      flexWrap="wrap"
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <Flex col={{ sm: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col
      </Flex>
      <Flex col={{ sm: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col
      </Flex>
      <Flex col={{ sm: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col
      </Flex>
      <Flex col={{ sm: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col
      </Flex>
      <Flex col={{ sm: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col
      </Flex>
      <Flex col={{ sm: 1 / 2, md: 1 / 3 }} flexType="none">
        <Flex gap={{ xs: '5px', sm: '15px' }} flexWrap="wrap">
          <Flex
            col={{ xs: 1 / 3, sm: 1 / 3 }}
            styles={{ backgroundColor: '#ccc', padding: '20px' }}
          >
            Col
          </Flex>
          <Flex
            col={{ xs: 1 / 3, sm: 1 / 3 }}
            styles={{ backgroundColor: '#ccc', padding: '20px' }}
          >
            Col
          </Flex>
          <Flex
            col={{ xs: 1 / 3, sm: 1 / 3 }}
            styles={{ backgroundColor: '#ccc', padding: '20px' }}
          >
            Col
          </Flex>
        </Flex>
      </Flex>
      <Flex
        col={{ sm: 1 / 2, md: 1 / 3 }}
        colOffset={{ md: 1 / 3 }}
        styles={{
          backgroundColor: '#ccc',
          padding: '20px',
        }}
      >
        Col
      </Flex>
      <Flex col={{ sm: 1 / 2, md: 1 / 3 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
        Col
      </Flex>
    </Flex>
  </>
);

export const NoGap = () => (
  <Flex
    // gap={{ xs: '15px', md: '30px' }}
    flexWrap="wrap"
    flexDirection={{ xs: 'column', md: 'row' }}
  >
    <Flex col={{ md: 1 / 5 }} styles={{ backgroundColor: '#aaa', padding: '20px' }}>
      Col
    </Flex>
    <Flex col={{ md: 1 / 5 }} styles={{ backgroundColor: '#bbb', padding: '20px' }}>
      Col
    </Flex>
    <Flex col={{ md: 3 / 5 }} styles={{ backgroundColor: '#ccc', padding: '20px' }}>
      Col
    </Flex>
    <Flex col={{ md: 3 / 5 }} styles={{ backgroundColor: '#ddd', padding: '20px' }}>
      Col
    </Flex>
    <Flex col={{ md: 2 / 5 }} styles={{ backgroundColor: '#eee', padding: '20px' }}>
      Col
    </Flex>
  </Flex>
);

export const Height = () => (
  <Flex
    gap={{ xs: '15px', md: '30px' }}
    flexWrap="wrap"
    flexDirection={{ xs: 'column', md: 'row' }}
    styles={{ height: { md: '600px' } }}
  >
    <Flex
      col={{ md: 1 / 5 }}
      row={{ md: 1 / 3 }}
      styles={{ backgroundColor: '#aaa', padding: '20px' }}
    >
      Col
    </Flex>
    <Flex
      col={{ md: 1 / 5 }}
      row={{ md: 1 / 3 }}
      styles={{ backgroundColor: '#bbb', padding: '20px' }}
    >
      Col
    </Flex>
    <Flex
      col={{ md: 3 / 5 }}
      row={{ md: 1 / 3 }}
      styles={{ backgroundColor: '#ccc', padding: '20px' }}
    >
      Col
    </Flex>
    <Flex col={{ md: 3 / 5 }} row={{ md: 2 / 3 }} flexDirection="column" justifyContent="flex-end">
      <Flex
        flexType="none"
        row={{ md: 1 / 3 }}
        styles={{ backgroundColor: '#ddd', padding: '20px', height: '100%', width: '100%' }}
      >
        Col
      </Flex>
    </Flex>
    <Flex
      col={{ md: 2 / 5 }}
      row={{ md: 2 / 3 }}
      styles={{ backgroundColor: '#eee', padding: '20px' }}
    >
      Col
    </Flex>
  </Flex>
);

export const Test = () => (
  <Flex
    gap={{ md: '30px', lg: '50px' }}
    flexWrap="wrap"
    flexDirection={{ xs: 'column', md: 'row' }}
  >
    <Flex
      col={{ md: 1 / 3, lg: 1 / 2 }}
      colOffset={{ md: 1 / 3, lg: 1 / 6 }}
      styles={{ backgroundColor: '#aaa', padding: '20px' }}
    >
      Col
    </Flex>
    <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20px' }}>
      Col
    </Flex>
    <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20px' }}>
      Col
    </Flex>
    <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20px' }}>
      Col
    </Flex>
    <Flex col={{ md: 1 / 3 }} styles={{ backgroundColor: '#aaa', padding: '20px' }}>
      Col
    </Flex>
  </Flex>
);
