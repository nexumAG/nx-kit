import React from 'react';
import { useSeparator } from '@react-aria/separator';
import { styled, getSpacing, getFlexItem, getPosition, getColor, compose } from '@nx-kit/styling';
import { DividerProps, DividerStyledProps } from './Divider.types';

const DividerStyled = styled.hr<DividerStyledProps>`
  ${({ theme }) => theme?.component?.divider?.global};
  ${({ theme, skin }) => skin && theme?.component?.divider?.skin?.[skin]};
  ${compose(getSpacing(), getFlexItem(), getPosition(), getColor())}
`;

export const Divider = (props: DividerProps) => {
  const { orientation = 'horizontal', ...rest } = props;

  const elementType = orientation === 'horizontal' ? 'hr' : 'div';

  const { separatorProps } = useSeparator({
    ...props,
    elementType,
  });

  return <DividerStyled as={elementType} orientation={orientation} {...separatorProps} {...rest} />;
};
