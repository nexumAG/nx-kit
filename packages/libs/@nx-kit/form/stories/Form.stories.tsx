import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TextField } from '@nx-kit/textfield';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Checkbox } from '@nx-kit/checkbox';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Flex } from '@nx-kit/flex';
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
        defaultValues={{ test: 'test', checked: true }}
        mode="all"
        reValidateMode="onChange"
        onSubmit={(values: any) => console.log('submit', values)}
      >
        {({ trigger }) => (
          <>
            <Flex gap="15px" flexDirection="column">
              <div>
                <Flex
                  gap={{ xs: '0px', sm: '15px' }}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'normal', sm: 'baseline' }}
                >
                  <Form.FieldWrapper>
                    <Form.Label styles={{ width: { xs: '100%', sm: '20%' } }}>Test</Form.Label>
                    <Flex flexType="none" flex={1}>
                      <Form.Input
                        name="test"
                        field={
                          <TextField
                            isAriaRequired
                            onChange={() => trigger('test2')}
                            styles={{ width: '100%' }}
                          />
                        }
                        validation={{
                          required: { value: true, message: 'The field is required' },
                          maxLength: {
                            value: 3,
                            message: 'The text cannot be longer than 3 chars',
                          },
                        }}
                      />
                      <div>
                        <Form.Error name="test" styles={{ color: 'brandDanger500' }} />
                      </div>
                    </Flex>
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
                    <Form.Label styles={{ width: { xs: '100%', sm: '20%' } }}>Test 2</Form.Label>

                    <Flex flexType="none" flex={1}>
                      {inside && (
                        <Form.Input
                          name="test2"
                          field={<TextField styles={{ width: '100%' }} />}
                          validation={(getValues: any) => ({
                            validate: {
                              shorterThanTest: (value: string) =>
                                value.length < getValues('test').length
                                  ? true
                                  : 'This field must be shorter than "Test"',
                            },
                          })}
                        />
                      )}
                      <div>
                        <Form.Error name="test2" styles={{ color: 'brandDanger500' }} />
                      </div>
                    </Flex>
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
                    <Form.Label styles={{ width: { xs: '100%', sm: '20%' } }}>Checked?</Form.Label>

                    <Flex flexType="none" flex={1}>
                      <Form.Input
                        name="checked"
                        field={
                          <Checkbox ariaLabel="checked" onChange={() => trigger('checked2')} />
                        }
                      />
                      <div>
                        <Form.Error name="checked" styles={{ color: 'brandDanger500' }} />
                      </div>
                    </Flex>
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
                      Also checked?
                    </Form.Label>

                    <Flex flexType="none" flex={1}>
                      <Form.Input
                        name="checked2"
                        field={<Checkbox ariaLabel="checked2" />}
                        validation={(getValues: any) => ({
                          validate: {
                            requiredIfTestTrue: (value: boolean) =>
                              !(getValues('checked') && !value)
                                ? true
                                : 'The field is required if "Checked" is checked',
                          },
                        })}
                      />
                      <div>
                        <Form.Error name="checked2" styles={{ color: 'brandDanger500' }} />
                      </div>
                    </Flex>
                  </Form.FieldWrapper>
                </Flex>
              </div>
            </Flex>
            <button type="submit">Submit</button>
          </>
        )}
      </Form>
    </>
  );
};
