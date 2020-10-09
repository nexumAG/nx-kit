import React from 'react';

export type ErrorProps = {
  name: string;
  errors: any;
};

export const Error = ({ name, errors }: ErrorProps) => {
  return errors?.[name] ? <span>Error</span> : null;
};
