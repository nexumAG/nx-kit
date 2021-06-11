import React from 'react';
import { Form } from './Form';
import { TextField } from './TextField';
import { Checkbox } from './Checkbox';

export default {
  title: '@nx-kit/form-lib',
  component: Form,
};

const checkboxValue = { cat: 'lion' };

export const Test = () => (
  <Form
    defaultValues={{
      // test: '12',
      // test2: checkboxValue,
      group1: { test1: 'abc', test2: 'def' },
      // group2: [],
      group3: { 'group3.1': { test1: 'ghi' } },
      cats: [false, 'tiger'],
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
        field={<Checkbox value={checkboxValue} aria-label="" />}
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

    <Form.Group name="cats" type="array">
      <div>group4</div>
      <div>
        <Form.Input name="0" field={<Checkbox value="lion" aria-label="" />} />
      </div>
      <div>
        <Form.Input name="1" field={<Checkbox value="tiger" aria-label="" />} />
      </div>
    </Form.Group>

    <button type="submit">Submit</button>
  </Form>
);
