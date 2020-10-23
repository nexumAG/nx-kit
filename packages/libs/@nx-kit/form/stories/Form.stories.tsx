import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TextField } from '@nx-kit/textfield';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Checkbox } from '@nx-kit/checkbox';
import { Form } from '../src';

export default {
  title: '@nx-kit/form',
  component: Form,
};

export const Default = () => {
  const [inside, setInside] = useState(true);
  // const [valuesState, setValuesState] = useState({});
  //
  // console.log('valuesState', valuesState);

  return (
    <>
      <button type="button" onClick={() => setInside(false)}>
        Remove Field
      </button>
      <Form
        defaultValues={{ test: 'default value', checked: true }}
        mode="all"
        reValidateMode="onChange"
        onSubmit={(values: any) => console.log('submit', values)}
      >
        {({ trigger }) => (
          <>
            <Form.Field type="text">
              <div>
                <Form.Label>Test</Form.Label>
              </div>
              <div>
                <Form.Input
                  name="test"
                  field={<TextField isAriaRequired onChange={() => trigger('test2')} />}
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
                    name="test2"
                    field={<TextField />}
                    // validation={{
                    //   required: { value: true, message: 'The field is required' },
                    //   minLength: { value: 2, message: 'The text must be longer than 2 chars' },
                    //   maxLength: { value: 4, message: 'The text cannot be longer than 4 chars' },
                    // }}
                    validation={(getValues: any) => {
                      return {
                        validate: {
                          shorterThanTest: (value: string) =>
                            value.length < getValues('test').length
                              ? true
                              : 'This field must be shorter than "Test"',
                        },
                      };
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
                  name="checked"
                  field={
                    <Checkbox
                      ariaLabel="checked"
                      isAriaRequired
                      onChange={() => trigger('checked2')}
                    />
                  }
                  // validation={{ required: { value: true, message: 'The field is required' } }}
                />
              </div>
              <div>
                <Form.Error name="checked" styles={{ color: 'brandDanger500' }} />
              </div>
            </Form.Field>
            <Form.Field type="checkbox">
              <div>
                <Form.Label>Also checked?</Form.Label>
              </div>
              <div>
                <Form.Input
                  name="checked2"
                  field={<Checkbox ariaLabel="checked2" />}
                  validation={(getValues: any) => {
                    return {
                      validate: {
                        requiredIfTestTrue: (value: boolean) =>
                          !(getValues('checked') && !value)
                            ? true
                            : 'The field is required if "Checked" is checked',
                      },
                    };
                  }}
                />
              </div>
              <div>
                <Form.Error name="checked2" styles={{ color: 'brandDanger500' }} />
              </div>
            </Form.Field>
            <button type="submit">Submit</button>
          </>
        )}
      </Form>
    </>
  );
};
