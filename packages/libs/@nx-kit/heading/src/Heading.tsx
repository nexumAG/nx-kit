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
} from '@nx-kit/styling';
import { useSlotProps } from '@nx-kit/slot';
import { HeadingProps, HeadingStyledProps } from './Heading.types';

const HeadingStyled = styled.h2<HeadingStyledProps>`
  ${({ theme }) => theme?.component?.heading?.global};
  ${({ theme, skin }) => skin && theme?.component?.heading?.skin?.[skin]};
  ${compose(getSpacing, getFlexContainer, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

export const Heading = ({ slot, ...headingProps }: HeadingProps) => {
  // eslint-disable-next-line react/destructuring-assignment
  const props = useSlotProps<HeadingProps>(slot ?? 'heading', headingProps);
  const { elementType, children, ...rest } = props;

  return (
    <HeadingStyled as={elementType} {...rest}>
      {children}
    </HeadingStyled>
  );
};
