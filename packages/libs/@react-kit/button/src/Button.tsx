import React, { useRef } from 'react';
import { useButton } from '@react-aria/button';
import {
  styled,
  getSpacing,
  getFlexItem,
  getPosition,
  getColor,
  getLayout,
  getFont,
  getTypo,
} from '@react-kit/styling';
import { ButtonProps } from './Button.types';

const ButtonStyled = styled.button``;

export const Button = (props: ButtonProps) => {
  const { className, as, children } = props;
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);
  return (
    <ButtonStyled ref={ref} as={as} className={className} {...buttonProps}>
      {children}
    </ButtonStyled>
  );
};
