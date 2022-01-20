import React from 'react';

export type RenderProps = {
  onBlur: () => void;
  onChange: (value: any) => void;
  value: React.Key;
  hasError: boolean;
  ref: React.Ref<HTMLElement>;
};

export type ControlledInputProps = {
  name: string;
  render: (props: RenderProps) => React.ReactElement;
  validation?: any;
};
