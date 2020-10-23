import React, { SyntheticEvent } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Text } from '@nx-kit/text';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Flex } from '@nx-kit/flex';
import { TextField, TextFieldWrapper } from '../src';

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

export const InputError = () => (
  <TextField defaultValue="" error="This field is required" isRequired />
);

export const InputEvents = () => (
  <TextField
    onChange={(event: SyntheticEvent) => console.log('onChange', event)}
    onBlur={(event: SyntheticEvent) => console.log('onBlur', event)}
  />
);

export const TextArea = () => <TextField type="textarea" />;

export const TextAreaError = () => <TextField type="textarea" error="Error" />;

export const Password = () => <TextField type="password" />;

export const TextFieldContainerExample = () => (
  <Flex gap="15px" flexDirection="column">
    <div>
      <Flex
        gap={{ xs: '0px', sm: '15px' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'normal', sm: 'baseline' }}
      >
        <TextFieldWrapper>
          <Text slot="label" elementType="label" styles={{ width: { xs: '100%', sm: '20%' } }}>
            This is a label
          </Text>
          <TextField styles={{ flex: 1 }} />
        </TextFieldWrapper>
      </Flex>
    </div>
    <div>
      <Flex
        gap={{ xs: '0px', sm: '15px' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'normal', sm: 'baseline' }}
      >
        <TextFieldWrapper>
          <Text slot="label" elementType="label" styles={{ width: { xs: '100%', sm: '20%' } }}>
            This is another label
          </Text>
          <TextField styles={{ flex: 1 }} error="Something wrong" />
        </TextFieldWrapper>
      </Flex>
    </div>
    <div>
      <Flex gap={{ xs: '0px', sm: '15px' }} flexDirection={{ xs: 'column', sm: 'row' }}>
        <TextFieldWrapper>
          <Text slot="label" elementType="label" styles={{ width: { xs: '100%', sm: '20%' } }}>
            This is yet another very very very long label
          </Text>
          <TextField styles={{ flex: 1 }} type="textarea" />
        </TextFieldWrapper>
      </Flex>
    </div>
  </Flex>
);
