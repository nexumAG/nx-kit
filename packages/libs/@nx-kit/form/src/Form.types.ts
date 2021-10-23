import React from 'react';
import { DefaultValues, Resolver, UseFormRegister } from 'react-hook-form';
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
} from 'react-hook-form/dist/types/form';
import { FieldValues } from 'react-hook-form/dist/types/fields';

export type OnSubmitData<FormValues> = UnpackNestedValue<FormValues>;
export type OnErrorErrors<FormValues> = FieldErrors<FormValues>;
export type BaseEvent = React.BaseSyntheticEvent;

export type FormSubmitHandler<FormValues> = (
  data: OnSubmitData<FormValues>,
  event?: BaseEvent,
  context?: FormContext
) => any | Promise<any>;

export type FormErrorHandler<FormValues> = (
  errors: OnErrorErrors<FormValues>,
  event?: BaseEvent,
  context?: FormContext
) => any | Promise<any>;

export type FormProps<FormValues> = {
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
  clearErrors: UseFormClearErrors<FormValues>;
  trigger: UseFormTrigger<FormValues>;
  reset: UseFormReset<FormValues>;
  unregister: UseFormUnregister<FormValues>;
  register: UseFormRegister<FormValues>;
  // formState: FormState<FormValues>;
  // setValue: UseFormSetValue<FormValues>;
  // handleSubmit: UseFormHandleSubmit<FormValues>;
  // control: Control<FormValues, FormContext>;
  // setFocus: UseFormSetFocus<FormValues>;
};
