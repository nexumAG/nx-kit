import React from 'react';
import { Button } from '../src';

export default {
  title: '@react-kit/button',
  component: Button,
};

export const Default = () => <Button onPress={(e: any) => console.log(e)}>Press me</Button>;
