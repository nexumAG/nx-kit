import React, { ReactNode, useRef, useEffect } from 'react';
import { useId } from '@react-aria/utils';
import { useForm, FormContext } from './FormProvider';
import { FormContextValue, RegisterParams } from './Form.types';

type GroupProps = {
  name: string;
  // eslint-disable-next-line react/require-default-props
  type?: 'array' | 'object';
  children: ReactNode;
};

const Group = ({ name: groupName, children, type = 'object' }: GroupProps) => {
  const fields = useRef<any | any[]>(type === 'object' ? {} : []);
  const submitHandlers = useRef<{ [id: string]: () => void }>({});

  const { register, unregister, defaultValues, setFieldState } = useForm();
  const groupId = useId();

  useEffect(() => {
    return () => {
      unregister(groupName, groupId);
    };
  }, []);

  const onSubmitGroup = () => {
    console.log('Group onSubmit', groupId);
  };

  const onSubmitFields = () => {
    Object.keys(submitHandlers.current).forEach((id) => {
      submitHandlers.current[id]();
    });
  };

  const formContextValue: FormContextValue = {
    register: ({ name, id, value, validation, onSubmit }: RegisterParams) => {
      // set initial field state
      setFieldState(id, { valid: true });

      if (type === 'object') {
        fields.current[name] = value;
      } else if (type === 'array') {
        fields.current.push(null);
      }

      // add onSubmit to submitHandlers
      submitHandlers.current[id] = onSubmit;

      const { onChange, onBlur, runValidation } = register({
        name: groupName,
        value: fields.current,
        id: groupId,
        onSubmit: () => {
          onSubmitFields();
          onSubmitGroup();
        },
        validation,
      });
      return {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onChange: (value: any) => {
          fields.current[name] = value;
          onChange(fields.current);
        },
        onBlur,
        runValidation,
      };
    },
    unregister: (name: string, id: string) => {
      delete fields.current[name];
      delete submitHandlers.current[id];
      // TODO: validation gets removed? how to completely remove group?
      register({ name: groupName, id: groupId, value: fields.current, onSubmit: onSubmitGroup });
      setFieldState(id, null);
    },
    defaultValues: defaultValues[groupName] ?? {},
    setFieldState,
  };

  return <FormContext.Provider value={formContextValue}>{children}</FormContext.Provider>;
};

export { Group };
