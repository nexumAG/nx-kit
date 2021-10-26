import React from 'react';
import {
  styled,
  getSpacing,
  getFlexContainer,
  getFlexItem,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
  compose,
  ThemedStyledProps,
  DirectOrStylesProp,
  Theme,
  merge,
  getLiteralOrBreakpointValue,
} from '@nx-kit/styling';
import { ZStackAlignment, ZStackSpecialProps, ZStackProps, ZStackStyledProps } from './types';

const map = {
  top: { top: '0', left: '50%', transform: 'translate(-50%, 0)' },
  topRight: { top: '0', right: '0' },
  right: { top: '50%', right: '0', transform: 'translate(0, -50%)' },
  bottomRight: { bottom: '0', right: '0' },
  bottom: { bottom: '0', left: '50%', transform: 'translate(-50%, 0)' },
  bottomLeft: { bottom: '0', left: '0' },
  left: { top: '50%', left: '0', transform: 'translate(0, -50%)' },
  topLeft: { top: '0', left: '0' },
  center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
};

const getZStack = (props: ThemedStyledProps<DirectOrStylesProp<ZStackSpecialProps>, Theme>) => {
  return merge(
    getLiteralOrBreakpointValue('alignment', props, null, (_: string, value: ZStackAlignment) => {
      return {
        '& > *': {
          position: 'absolute',
          ...map[value],
        },
      };
    })
  );
};

const ZStackStyled = styled.div<ZStackStyledProps>`
  position: relative;

  ${compose(
    getZStack,
    getSpacing,
    getFlexContainer,
    getFlexItem,
    getPosition,
    getColor,
    getLayout,
    getTypo
  )};
  ${getFont};
`;

export const ZStack = ({
  id,
  className,
  children,
  elementType,
  alignment,
  styles,
}: ZStackProps) => (
  <ZStackStyled
    id={id}
    className={className}
    as={elementType}
    styles={{
      ...{
        alignment: alignment ?? 'center',
      },
      ...styles,
    }}
  >
    {children}
  </ZStackStyled>
);
