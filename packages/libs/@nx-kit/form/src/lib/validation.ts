import { Validation } from './Form.types';

const required = (inputValue: any, value: boolean) => {
  if (
    value &&
    (inputValue === '' ||
      inputValue === null ||
      inputValue === undefined ||
      inputValue === false ||
      Number.isNaN(inputValue))
  ) {
    return false;
  }
  return true;
};

const minLength = (inputValue: any, value: number) => {
  if (typeof inputValue === 'string' && inputValue.length >= value) {
    return true;
  }
  return false;
};

const maxLength = (inputValue: any, value: number) => {
  if (typeof inputValue === 'string' && inputValue.length <= value) {
    return true;
  }
  return false;
};

const min = (inputValue: any, value: number) => {
  if (parseFloat(inputValue) >= value) {
    return true;
  }
  return false;
};

const max = (inputValue: any, value: number) => {
  if (parseFloat(inputValue) <= value) {
    return true;
  }
  return false;
};

const validationFunctions: any = {
  required,
  minLength,
  maxLength,
  min,
  max,
};

export const runValidation = (value: any, validations?: Validation) => {
  if (!validations?.length) {
    return true;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const validation of validations) {
    const validationFunction = validationFunctions[validation.type];
    if (validationFunction && !validationFunction(value, validation.value)) {
      return validation.message ?? false;
    }
  }

  return true;
};
