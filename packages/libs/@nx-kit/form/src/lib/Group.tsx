import React, { ReactNode, useRef, useEffect } from 'react';
import { useId } from '@react-aria/utils';
import { useForm, FormContext } from './FormProvider';
import { FormContextValue } from './Form.types';

type GroupProps = {
  name: string;
  // eslint-disable-next-line react/require-default-props
  type?: 'array' | 'object';
  children: ReactNode;
};

const Group = ({ name: groupName, children, type = 'object' }: GroupProps) => {
  const fields = useRef<any | any[]>(type === 'object' ? {} : []);
  const { register, unregister, defaultValues, setFieldState } = useForm();
  const groupId = useId();

  useEffect(() => {
    return () => {
      unregister(groupName, groupId);
    };
  }, []);

  const formContextValue: FormContextValue = {
    register: (name: string, id: string, value?: any, validation?: any) => {
      setFieldState(id, { valid: true });
      if (type === 'object') {
        fields.current[name] = value;
      } else if (type === 'array') {
        fields.current.push(null);
      }
      const { onChange, onBlur, runValidation } = register(
        groupName,
        id,
        fields.current,
        validation
      );
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
      // TODO: validation gets removed? how to completely remove group?
      register(groupName, groupId, fields.current);
      setFieldState(id, null);
    },
    defaultValues: defaultValues[groupName] ?? {},
    setFieldState,
  };

  return <FormContext.Provider value={formContextValue}>{children}</FormContext.Provider>;
};

export { Group };
