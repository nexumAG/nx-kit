import React from 'react';
import { Button } from '../src';

export default {
  title: '@nx-kit/button',
  component: Button,
};

export const NoSkin = () => <Button onPress={(e: any) => console.log(e)}>Press me</Button>;

export const Primary = () => (
  <Button onPress={(e: any) => console.log(e)} skin="primary">
    Press me
  </Button>
);

export const PrimaryAutoFocus = () => (
  <Button onPress={(e: any) => console.log(e)} skin="primary" autoFocus>
    Press me
  </Button>
);

export const PrimaryDisabled = () => (
  <Button onPress={(e: any) => console.log(e)} skin="primary" isDisabled>
    Press me
  </Button>
);

export const PrimaryLink = () => (
  <Button href="#" elementType="a" skin="primary">
    Press me
  </Button>
);

export const PrimaryStyled = () => (
  <Button
    onPress={(e: any) => console.log(e)}
    skin="primary"
    elementType="div"
    styles={{ padding: '40px' }}
    css={`
      &&& {
        margin-bottom: 50px;
      }
    `}
  >
    Press me
  </Button>
);

export const Secondary = () => (
  <Button onPress={(e: any) => console.log(e)} skin="secondary">
    Press me
  </Button>
);

export const SecondaryDisabled = () => (
  <Button onPress={(e: any) => console.log(e)} skin="secondary" isDisabled>
    Press me
  </Button>
);
