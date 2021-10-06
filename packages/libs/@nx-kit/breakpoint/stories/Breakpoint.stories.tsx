import React from 'react';
import { Breakpoint, useBreakpoint } from '../src';

export default {
  title: '@nx-kit/breakpoint',
  component: Breakpoint,
};

export const MinXsMaxXs = () => (
  <Breakpoint min="xs" max="xs">
    Render on min=xs max=xs
  </Breakpoint>
);

export const MinXsMaxSm = () => (
  <Breakpoint min="xs" max="sm">
    Render on min=xs max=sm
  </Breakpoint>
);

export const MinSm = () => <Breakpoint min="sm">Render on min=sm</Breakpoint>;

export const MaxMd = () => <Breakpoint max="md">Render on max=md</Breakpoint>;

export const MaxMdRenderProp = () => <Breakpoint max="md">{() => 'Render on max=md'}</Breakpoint>;

export const UseBreakpointHook = () => {
  const { breakpoint } = useBreakpoint();

  return (
    <div>
      {breakpoint.breakpoint} - {breakpoint.min} - {breakpoint.max}
    </div>
  );
};
