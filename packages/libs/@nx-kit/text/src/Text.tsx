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

export const Text = ({ className, children, elementType, skin, styles }: TextProps) => {
  return (
    <TextStyled className={className} skin={skin} as={elementType} styles={styles}>
      {children}
    </TextStyled>
  );
};
