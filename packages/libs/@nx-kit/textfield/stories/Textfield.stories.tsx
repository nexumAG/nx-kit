import React, { SyntheticEvent } from 'react';
import { Text } from '@nx-kit/text';
import { Flex } from '@nx-kit/flex';
import { TextField, TextFieldContainer } from '../src';

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

export const TextFieldContainerStory = () => (
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
          <TextField skin="input" styles={{ flex: 1 }} />
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
          <TextField skin="input" styles={{ flex: 1 }} />
        </TextFieldContainer>
      </Flex>
    </div>
    <div>
      <Flex gap={{ xs: '0px', sm: '15px' }} flexDirection={{ xs: 'column', sm: 'row' }}>
        <TextFieldContainer>
          <Text slot="label" elementType="label" styles={{ width: { xs: '100%', sm: '20%' } }}>
            This is yet another very very very long label
          </Text>
          <TextField skin="input" styles={{ flex: 1 }} isTextArea />
        </TextFieldContainer>
      </Flex>
    </div>
  </Flex>
);
