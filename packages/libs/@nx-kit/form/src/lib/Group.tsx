import React, { ReactNode, useRef, useEffect } from 'react';
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
  const { register, unregister, defaultValues } = useForm();

  useEffect(() => {
    return () => {
      unregister(groupName);
    };
  }, []);

  const formContextValue: FormContextValue = {
    register: (name: string, values: any) => {
      if (type === 'object') {
        fields.current[name] = values;
        const { onChange, onBlur } = register(groupName, fields.current);
        return {
          onChange: (value: any) => {
            fields.current[name] = value;
            onChange(fields.current);
          },
          onBlur,
        };
      }

      // type array
      fields.current.push(null);
      const { onChange, onBlur } = register(groupName, fields.current);
      return {
        onChange: (value: any) => {
          fields.current[name] = value;
          onChange(fields.current);
        },
        onBlur,
      };
    },
    unregister: (name: string) => {
      fields.current[name] = undefined;
      register(groupName, fields.current);
    },
    defaultValues: defaultValues[groupName] ?? {},
  };

  return <FormContext.Provider value={formContextValue}>{children}</FormContext.Provider>;
};

export { Group };
