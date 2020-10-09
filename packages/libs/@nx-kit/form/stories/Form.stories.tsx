import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TextField, TextFieldContainer } from '@nx-kit/textfield';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Text } from '@nx-kit/text';
import { Form } from '../src';

export default {
  title: '@nx-kit/form',
  component: Form,
};

export const Default = () => {
  const [inside, setInside] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setInside(false)}>
        Remove
      </button>
      <Form
        defaultValues={{ test: 'fsdf' }}
        onSubmit={(values: any) => console.log('submit', values)}
        onWatch={(value: any) => console.log('watch', value)}
      >
        <TextFieldContainer>
          <div>
            <Text slot="label" elementType="label">
              Test
            </Text>
          </div>
          <div>
            <Form.Input
              type="text"
              name="test"
              validation={{ required: true, maxLength: 3 }}
              // error={errors.test && errors.test}
            />
          </div>
          <Form.Error name="test" errors={{}} />
        </TextFieldContainer>
        <TextFieldContainer>
          <div>
            <Text slot="label" elementType="label">
              Test 2
            </Text>
          </div>
          <div>
            {inside && (
              <Form.Input
                type="text"
                name="test2"
                validation={{ required: true, minLength: 2, maxLength: 4 }}
                // error={errors.test2 && errors.test2}
              />
            )}
          </div>
          <Form.Error name="test2" errors={{}} />
        </TextFieldContainer>
      </Form>
    </>
  );
};
