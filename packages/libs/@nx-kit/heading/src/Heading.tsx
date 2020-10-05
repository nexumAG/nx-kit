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
} from '@nx-kit/styling';
import { useSlotProps } from '@nx-kit/slot';
import { HeadingProps, HeadingStyledProps } from './Heading.types';

const HeadingStyled = styled.h2<HeadingStyledProps>`
  ${({ theme, skin }) => skin && theme?.component?.heading?.skin?.[skin]};
  ${getSpacing()}
  ${getFlexItem()}
  ${getPosition()}
  ${getColor()}
  ${getLayout()}
  ${getFont()}
  ${getTypo()}
`;

export const Heading = (headingProps: HeadingProps) => {
  const props = useSlotProps<HeadingProps>(headingProps.slot ?? 'heading', headingProps);
  const { className, children, elementType, skin, styles, ...rest } = props;

  return (
    <HeadingStyled className={className} skin={skin} as={elementType} styles={styles} {...rest}>
      {children}
    </HeadingStyled>
  );
};
