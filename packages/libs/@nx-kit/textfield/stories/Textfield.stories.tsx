import React, { SyntheticEvent } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Text } from '@nx-kit/text';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Flex } from '@nx-kit/flex';
import { TextField, TextFieldContainer } from '../src';

export default {
  title: '@nx-kit/textfield',
  component: TextField,
};

export const Input = () => <TextField />;

export const InputAutoFocus = () => <TextField autoFocus />;

export const InputWithPlaceholder = () => <TextField placeholder="You name please" />;

export const InputDefaultValue = () => <TextField defaultValue="Bugs Bunny" />;

export const InputDisabled = () => <TextField defaultValue="Bugs Bunny" isDisabled />;

export const InputError = () => (
  <TextField defaultValue="" error="This field is required" isRequired />
);

export const InputWithOnChange = () => (
  <TextField onChange={(event: SyntheticEvent) => console.log(event)} />
);

export const TextArea = () => <TextField isTextArea />;

export const TextAreaError = () => <TextField isTextArea error="Error" />;

export const TextFieldContainerExample = () => (
  <Flex gap="15px" flexDirection="column">
    <div>
      <Flex
        gap={{ xs: '0px', sm: '15px' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'normal', sm: 'baseline' }}
      >
        <TextFieldContainer>
          <Text slot="label" elementType="label" styles={{ width: { xs: '100%', sm: '20%' } }}>
            This is a label
          </Text>
          <TextField styles={{ flex: 1 }} />
        </TextFieldContainer>
      </Flex>
    </div>
    <div>
      <Flex
        gap={{ xs: '0px', sm: '15px' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'normal', sm: 'baseline' }}
      >
        <TextFieldContainer>
          <Text slot="label" elementType="label" styles={{ width: { xs: '100%', sm: '20%' } }}>
            This is another label
          </Text>
          <TextField styles={{ flex: 1 }} error="Something wrong" />
        </TextFieldContainer>
      </Flex>
    </div>
    <div>
      <Flex gap={{ xs: '0px', sm: '15px' }} flexDirection={{ xs: 'column', sm: 'row' }}>
        <TextFieldContainer>
          <Text slot="label" elementType="label" styles={{ width: { xs: '100%', sm: '20%' } }}>
            This is yet another very very very long label
          </Text>
          <TextField styles={{ flex: 1 }} isTextArea />
        </TextFieldContainer>
      </Flex>
    </div>
  </Flex>
);
