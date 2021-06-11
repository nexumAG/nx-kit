import React, { forwardRef, useRef, useImperativeHandle, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Checkbox as CheckboxNx, CheckboxProps as CheckboxPropsNx } from '@nx-kit/checkbox';
import { FieldHandle, FieldProps } from './Input';

type CheckboxProps = FieldProps & CheckboxPropsNx & { value?: any };

const Checkbox = forwardRef<FieldHandle, CheckboxProps>(
  ({ name, onChange, onBlur, value: valueProp = true, ...rest }, ref) => {
    const localRef = useRef<HTMLInputElement | null>(null);
    const [hasError, setHasError] = useState(false);
    const [checkboxValue, setCheckboxValue] = useState<any>(valueProp);
    const [checked, setChecked] = useState<boolean>(false);

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const getValue = (checked: boolean) => {
      return checked ? checkboxValue : false;
    };

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const changeHandler = (checked: boolean) => {
      setChecked(checked);
      if (onChange) {
        onChange(getValue(checked));
      }
    };

    useEffect(() => {
      setCheckboxValue(valueProp);
    }, [valueProp]);

    useImperativeHandle(ref, () => ({
      getValue: () => getValue(checked),
      setValue: (value: any) => {
        if (value === checkboxValue) {
          setChecked(true);
          if (onChange) {
            onChange(value);
          }
        } else {
          setChecked(false);
          if (onChange) {
            onChange(false);
          }
        }
      },
      setError: (error: any) => {
        // console.log('error', error);
        setHasError(!!error);
      },
      setFocus: () => localRef.current?.focus(),
    }));

    // console.log('render', 'Checkbox');

    return (
      <CheckboxNx
        name={name}
        ref={localRef}
        onChange={(event) => changeHandler(event.currentTarget.checked)}
        onBlur={(event) => onBlur && onBlur(getValue(event.currentTarget.checked))}
        hasError={hasError}
        isChecked={checked}
        {...rest}
      />
    );
  }
);

export { Checkbox };
