import React, { SyntheticEvent } from 'react';
import { TextField } from '../src';

export default {
  title: '@nx-kit/textfield',
  component: TextField,
};

export const Input = () => <TextField skin="input" />;

export const InputAutoFocus = () => <TextField skin="input" autoFocus />;

export const InputWithPlaceholder = () => <TextField skin="input" placeholder="You name please" />;

export const InputDefaultValue = () => <TextField skin="input" defaultValue="Bugs Bunny" />;

export const InputDisabled = () => <TextField skin="input" defaultValue="Bugs Bunny" isDisabled />;

export const InputWithOnChange = () => (
  <TextField skin="input" onChange={(event: SyntheticEvent) => console.log(event)} />
);

export const TextArea = () => <TextField skin="textarea" isTextArea />;
