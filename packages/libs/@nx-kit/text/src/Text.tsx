import React from 'react';
import {
  styled,
  getSpacing,
  getFlexItem,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
  compose,
} from '@nx-kit/styling';
import { useSlotProps } from '@nx-kit/slot';
import { TextProps, TextStyledProps } from './Text.types';

const TextStyled = styled.span<TextStyledProps>`
  ${({ theme }) => theme?.component?.text?.global};
  ${({ theme, skin }) => skin && theme?.component?.text?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

export const Text = (props: TextProps) => {
  const { children, elementType, slot, ...rest } = useSlotProps<TextProps>(
    props.slot ?? 'text',
    props
  );
  return (
    <TextStyled as={elementType} {...rest}>
      {children}
    </TextStyled>
  );
};
