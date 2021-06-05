import React, { SyntheticEvent, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Flex } from '@nx-kit/flex';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Form } from '@nx-kit/form';
import { TextField } from '../src';

export default {
  title: '@nx-kit/textfield',
  component: TextField,
};

export const Input = () => <TextField />;

export const InputAutoFocus = () => <TextField autoFocus />;

export const InputWithPlaceholder = () => <TextField placeholder="You name please" />;

export const InputDefaultValue = () => <TextField defaultValue="Bugs Bunny" />;

export const InputDisabled = () => <TextField defaultValue="Bugs Bunny" isDisabled />;

export const InputReadonly = () => <TextField defaultValue="Bugs Bunny" isReadOnly />;

export const InputError = () => <TextField defaultValue="" hasError isRequired />;

export const InputEvents = () => (
  <TextField
    onChange={(event: SyntheticEvent) => console.log('onChange', event)}
    onBlur={(event: SyntheticEvent) => console.log('onBlur', event)}
  />
);

export const TextArea = () => <TextField type="textarea" />;

export const TextAreaError = () => <TextField type="textarea" hasError />;

export const Password = () => <TextField type="password" />;

export const MaxLength = () => <TextField maxLength={10} />;

export const InputMode = () => <TextField inputMode="numeric" />;

export const FieldWrapper = () => (
  <Flex gap="15px" flexDirection="column">
    <div>
      <Flex
        gap={{ xs: '0px', sm: '15px' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'normal', sm: 'baseline' }}
      >
        <Form.FieldWrapper>
          <Form.Label styles={{ width: { xs: '100%', sm: '20%' } }}>This is a label</Form.Label>
          <TextField styles={{ flex: 1 }} />
        </Form.FieldWrapper>
      </Flex>
    </div>
    <div>
      <Flex
        gap={{ xs: '0px', sm: '15px' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'normal', sm: 'baseline' }}
      >
        <Form.FieldWrapper>
          <Form.Label styles={{ width: { xs: '100%', sm: '20%' } }}>
            This is another label
          </Form.Label>
          <TextField styles={{ flex: 1 }} hasError />
        </Form.FieldWrapper>
      </Flex>
    </div>
    <div>
      <Flex gap={{ xs: '0px', sm: '15px' }} flexDirection={{ xs: 'column', sm: 'row' }}>
        <Form.FieldWrapper>
          <Form.Label styles={{ width: { xs: '100%', sm: '20%' } }}>
            This is yet another very very very long label
          </Form.Label>
          <TextField styles={{ flex: 1 }} type="textarea" />
        </Form.FieldWrapper>
      </Flex>
    </div>
  </Flex>
);

export const Controlled = () => {
  const [value, setValue] = useState('test');

  return (
    <TextField
      value={value}
      onChange={(event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
        console.log(event.currentTarget.value);
      }}
    />
  );
};
