import React from 'react';

export type RenderProps<T extends HTMLElement = HTMLElement> = {
  onBlur: () => void;
  onChange: (value: any) => void;
  value: React.Key;
  hasError: boolean;
  ref: React.Ref<T>;
};

export type ControlledInputProps<T extends HTMLElement = HTMLElement> = {
  name: string;
  render: (props: RenderProps<T>) => React.ReactElement;
  validation?: any;
};
