import React from 'react';
import { Form } from './Form';
import { TextField } from './TextField';

export default {
  title: '@nx-kit/form-lib',
  component: Form,
};

export const Test = () => (
  <Form
    defaultValues={{
      test: 'asdf',
      group1: { test1: 'abc', test2: 'def' },
      group2: { test1: 'ghi' },
    }}
  >
    <Form.Input name="test" field={<TextField />} />

    <Form.Group name="group1">
      <div>
        <Form.Input name="test1" field={<TextField />} />
      </div>
      <div>
        <Form.Input name="test2" field={<TextField />} />
      </div>
    </Form.Group>

    <Form.Group name="group2" type="array">
      <div>
        <Form.Input name="group2" field={<TextField />} />
      </div>
      <div>
        <Form.Input name="group2" field={<TextField />} />
      </div>
    </Form.Group>

    <Form.Group name="group3">
      <Form.Group name="group3.1">
        <div>
          <Form.Input name="test1" field={<TextField />} />
        </div>
      </Form.Group>
      <Form.Group name="group3.2">
        <div>
          <Form.Input name="test1" field={<TextField />} />
        </div>
      </Form.Group>
    </Form.Group>

    <button type="submit">Submit</button>
  </Form>
);
