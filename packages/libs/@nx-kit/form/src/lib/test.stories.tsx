import React from 'react';
import { Input } from './Input';
import { Form } from './Form';
import { TextField } from './TextField';

export default {
  title: '@nx-kit/form-lib',
  component: Form,
};

export const Test = () => (
  <Form>
    <Input name="test" field={<TextField />} />
  </Form>
);
