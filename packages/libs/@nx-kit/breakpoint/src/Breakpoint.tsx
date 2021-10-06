import { ReactNode } from 'react';
import { BreakpointProps } from './types';
import { useBreakpoint } from './BreakpointProvider';
import { breakpointIsBetween } from './utils';

const render = (children: ReactNode | (() => ReactNode), shouldRender: boolean) => {
  if (shouldRender) {
    return typeof children === 'function' ? children() : children;
  }
  return null;
};

export const Breakpoint = ({ children, min, max }: BreakpointProps) => {
  const { breakpoint, breakpoints } = useBreakpoint();

  const shouldRender = breakpointIsBetween(breakpoint, min, max, breakpoints);

  return render(children, shouldRender);
};
