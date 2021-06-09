import { createContext, useContext } from 'react';
import { FormContextValue } from './Form.types';

export const FormContext = createContext<FormContextValue>({
  register: () => ({ onChange: () => {}, onBlur: () => {} }),
  unregister: () => {},
  defaultValues: {},
});

export const useForm = () => useContext(FormContext);
