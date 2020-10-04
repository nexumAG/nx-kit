import React from 'react';
import { useSeparator } from '@react-aria/separator';
import { styled, getSpacing, getFlexItem, getPosition, getColor } from '@nx-kit/styling';
import { DividerProps, DividerStyledProps } from './Divider.types';

const DividerStyled = styled.hr<DividerStyledProps>`
  overflow: visible;
  border: none;
  margin: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  align-self: stretch;
  ${({ theme, skin }) => skin && theme?.component?.divider?.skin?.[skin]};
  ${getSpacing()}
  ${getFlexItem()}
  ${getPosition()}
  ${getColor()}
`;

export const Divider = (props: DividerProps) => {
  const { className, orientation = 'horizontal', skin } = props;

  const elementType = orientation === 'horizontal' ? 'hr' : 'div';

  const { separatorProps } = useSeparator({
    ...props,
    elementType,
  });

  return (
    <DividerStyled
      as={elementType}
      className={className}
      skin={skin}
      orientation={orientation}
      {...separatorProps}
    />
  );
};
