import React, { useState } from 'react';
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
        Remove Field
      </button>
      <Form
        defaultValues={{ test: 'default value', checked: true }}
        mode="all"
        onSubmit={(values: any) => console.log('submit', values)}
      >
        <Form.Field type="text">
          <div>
            <Form.Label>Test</Form.Label>
          </div>
          <div>
            <Form.Input
              type="text"
              name="test"
              validation={{
                required: { value: true, message: 'The field is required' },
                maxLength: { value: 3, message: 'The text cannot be longer than 3 chars' },
              }}
            />
          </div>
          <div>
            <Form.Error name="test" styles={{ color: 'brandDanger500' }} />
          </div>
        </Form.Field>
        <Form.Field type="text">
          <div>
            <Form.Label>Test 2</Form.Label>
          </div>
          <div>
            {inside && (
              <Form.Input
                type="text"
                name="test2"
                validation={{
                  required: { value: true, message: 'The field is required' },
                  minLength: { value: 2, message: 'The text must be longer than 2 chars' },
                  maxLength: { value: 4, message: 'The text cannot be longer than 4 chars' },
                }}
              />
            )}
          </div>
          <div>
            <Form.Error name="test2" styles={{ color: 'brandDanger500' }} />
          </div>
        </Form.Field>
        <Form.Field type="checkbox">
          <div>
            <Form.Label>Checked?</Form.Label>
          </div>
          <div>
            <Form.Input
              type="checkbox"
              name="checked"
              label="This is a checkbox"
              validation={{ required: { value: true, message: 'The field is required' } }}
            />
          </div>
          <div>
            <Form.Error name="checked" styles={{ color: 'brandDanger500' }} />
          </div>
        </Form.Field>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};
