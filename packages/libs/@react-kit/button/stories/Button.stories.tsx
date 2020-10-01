import React from 'react';
import { Button } from '../src';

export default {
  title: '@react-kit/button',
  component: Button,
};

export const Default = () => <Button onPress={(e: any) => console.log(e)}>Press me</Button>;

export const Primary = () => (
  <Button onPress={(e: any) => console.log(e)} skin="primary">
    Press me
  </Button>
);

export const AutoFocus = () => (
  <Button onPress={(e: any) => console.log(e)} skin="primary" autoFocus>
    Press me
  </Button>
);

export const Disabled = () => (
  <Button onPress={(e: any) => console.log(e)} skin="primary" isDisabled>
    Press me
  </Button>
);

export const Link = () => (
  <Button href="#" elementType="a" skin="primary">
    Press me
  </Button>
);

export const Styles = () => (
  <Button
    onPress={(e: any) => console.log(e)}
    skin="primary"
    as="span"
    styles={{ padding: '40px' }}
  >
    Press me
  </Button>
);