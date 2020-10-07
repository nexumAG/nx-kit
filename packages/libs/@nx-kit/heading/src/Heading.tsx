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
import { HeadingProps, HeadingStyledProps } from './Heading.types';

const HeadingStyled = styled.h2<HeadingStyledProps>`
  ${({ theme }) => theme?.component?.heading?.global};
  ${({ theme, skin }) => skin && theme?.component?.heading?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getFont, getTypo)}
`;

export const Heading = (headingProps: HeadingProps) => {
  const props = useSlotProps<HeadingProps>(headingProps.slot ?? 'heading', headingProps);
  const { elementType, children, slot, ...rest } = props;

  return (
    <HeadingStyled as={elementType} {...rest}>
      {children}
    </HeadingStyled>
  );
};
