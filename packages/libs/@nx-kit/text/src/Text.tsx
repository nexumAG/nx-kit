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
import { TextProps, TextStyledProps } from './Text.types';

const TextStyled = styled.span<TextStyledProps>`
  ${({ theme }) => theme?.component?.text?.global};
  ${({ theme, skin }) => skin && theme?.component?.text?.skin?.[skin]};
  ${compose(
    getSpacing(),
    getFlexItem(),
    getPosition(),
    getColor(),
    getLayout(),
    getFont(),
    getTypo()
  )}
`;

export const Text = ({ children, elementType, ...rest }: TextProps) => {
  return (
    <TextStyled as={elementType} {...rest}>
      {children}
    </TextStyled>
  );
};
