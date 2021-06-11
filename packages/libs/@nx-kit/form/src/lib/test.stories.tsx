import React from 'react';
import { Form } from './Form';
import { TextField } from './TextField';
import { Checkbox } from './Checkbox';

export default {
  title: '@nx-kit/form-lib',
  component: Form,
};

export const Test = () => (
  <Form
    defaultValues={{
      test: '12',
      test2: false,
      group1: { test1: 'abc', test2: 'def' },
      // group2: [],
      group3: { 'group3.1': { test1: 'ghi' } },
    }}
  >
    <div>
      <Form.Input
        name="test"
        validation={[
          { type: 'required', value: true, message: 'Is required' },
          { type: 'minLength', value: 3, message: 'Min 3 chars' },
          { type: 'maxLength', value: 7, message: 'Max 7 chars' },
          // { type: 'min', value: 3, message: 'Min 3' },
          // { type: 'max', value: 7, message: 'Max 7' },
        ]}
        field={<TextField />}
      />
    </div>

    <div>
      <Form.Input
        name="test2"
        validation={[{ type: 'required', value: true, message: 'Is required' }]}
        field={<Checkbox />}
      />
    </div>

    <Form.Group name="group1">
      <div>group1</div>
      <div>
        <Form.Input name="test1" field={<TextField />} />
      </div>
      <div>
        <Form.Input name="test2" field={<TextField />} />
      </div>
    </Form.Group>

    <Form.Group name="group2" type="array">
      <div>group2</div>
      <div>
        <Form.Input name="0" field={<TextField />} />
      </div>
      <div>
        <Form.Input name="1" field={<TextField />} />
      </div>
    </Form.Group>

    <Form.Group name="group3">
      <Form.Group name="group3.1">
        <div>group3.1</div>
        <div>
          <Form.Input name="test1" field={<TextField />} />
        </div>
      </Form.Group>
      <Form.Group name="group3.2">
        <div>group3.2</div>
        <div>
          <Form.Input name="test1" field={<TextField />} />
        </div>
      </Form.Group>
    </Form.Group>

    <button type="submit">Submit</button>
  </Form>
);
