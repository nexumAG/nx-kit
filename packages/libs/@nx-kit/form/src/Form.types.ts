import React from 'react';
import {
  Control,
  DefaultValues,
  Resolver,
  UseFormGetFieldState,
  UseFormRegister,
  UseFormResetField,
} from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import {
  UnpackNestedValue,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormReset,
  UseFormSetError,
  UseFormTrigger,
  UseFormUnregister,
  UseFormWatch,
  UseFormSetFocus,
  UseFormSetValue,
  FormState,
} from 'react-hook-form/dist/types/form';
import { FieldValues } from 'react-hook-form/dist/types/fields';

export type OnSubmitData<FormValues> = UnpackNestedValue<FormValues>;
export type OnErrorErrors<FormValues extends FieldValues = FieldValues> = FieldErrors<FormValues>;
export type BaseEvent = React.BaseSyntheticEvent;

export type FormSubmitHandler<FormValues extends FieldValues = FieldValues> = (
  data: OnSubmitData<FormValues>,
  event?: BaseEvent,
  context?: FormContext<FormValues>
) => any | Promise<any>;

export type FormErrorHandler<FormValues extends FieldValues = FieldValues> = (
  errors: OnErrorErrors<FormValues>,
  event?: BaseEvent,
  context?: FormContext<FormValues>
) => any | Promise<any>;

export type FormProps<FormValues extends FieldValues = FieldValues> = {
  children: React.ReactNode | ((context: FormContext) => React.ReactNode);
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
  reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
  defaultValues?: DefaultValues<FormValues>;

  // resolver?: (values: any, context?: object) => Promise<ResolverResult> | ResolverResult;
  resolver?: Resolver<FormValues, object>;
  context?: any;

  criteriaMode?: 'firstError' | 'all';
  shouldFocusError?: boolean;
  shouldUnregister?: boolean;

  onSubmit?: FormSubmitHandler<FormValues>;
  onError?: FormErrorHandler<FormValues>;
};

export type FormContext<
  FormValues extends FieldValues = FieldValues
  // FormContext extends object = object
> = {
  errors: FieldErrors<FormValues>;
  defaultValues?: DefaultValues<FormValues>;
  watch?: UseFormWatch<FormValues>;
  getValues?: UseFormGetValues<FormValues>;
  setError: UseFormSetError<FormValues>;
  hasError: (name: string) => boolean;
  clearErrors: UseFormClearErrors<FormValues>;
  trigger: UseFormTrigger<FormValues>;
  reset: UseFormReset<FormValues>;
  unregister: UseFormUnregister<FormValues>;
  register: UseFormRegister<FormValues>;
  handleSubmit?: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  control?: Control<FormValues, object>;
  setFocus: UseFormSetFocus<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  formState: FormState<FormValues>;
  resetField: UseFormResetField<FormValues>;
  getFieldState: UseFormGetFieldState<FormValues>;
};
