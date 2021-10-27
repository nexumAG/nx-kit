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
  top: { alignItems: 'flex-start', justifyContent: 'center', textAlign: 'center' },
  topRight: { alignItems: 'flex-start', justifyContent: 'flex-end', textAlign: 'right' },
  right: { alignItems: 'center', justifyContent: 'flex-end', textAlign: 'right' },
  bottomRight: { alignItems: 'flex-end', justifyContent: 'flex-end', textAlign: 'right' },
  bottom: { alignItems: 'flex-end', justifyContent: 'center', textAlign: 'center' },
  bottomLeft: { alignItems: 'flex-end', justifyContent: 'flex-start', textAlign: 'left' },
  left: { alignItems: 'center', justifyContent: 'flex-start', textAlign: 'left' },
  topLeft: { alignItems: 'flex-start', justifyContent: 'flex-start', textAlign: 'left' },
  center: { alignItems: 'center', justifyContent: 'center', textAlign: 'center' },
};

const getZStack = (props: ThemedStyledProps<DirectOrStylesProp<ZStackSpecialProps>, Theme>) => {
  return merge(
    getLiteralOrBreakpointValue('alignment', props, null, (_: string, value: ZStackAlignment) => {
      return map[value];
    })
  );
};

const ZStackStyled = styled.div<ZStackStyledProps>`
  position: relative;
  display: flex;

  & > * {
    position: absolute;
  }

  & > *:first-child {
    position: relative;
  }

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
