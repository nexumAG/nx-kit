import React, { useRef } from 'react';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import {
  As,
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
import { ButtonProps, ButtonStyledProps } from './Button.types';

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ theme }) => theme?.component?.button?.global};
  ${({ theme, skin }) => skin && theme?.component?.button?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

export const Button = (buttonProps: ButtonProps) => {
  const props = useSlotProps<ButtonProps>(buttonProps.slot ?? 'button', buttonProps);
  const { children, isDisabled, autoFocus, elementType = 'button', onPress, ...rest } = props;
  const ref = useRef(null);

  const { buttonProps: useButtonProps, isPressed } = useButton({ ...props, elementType }, ref);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

  return (
    <ButtonStyled
      ref={ref}
      as={elementType as As}
      {...mergeProps(useButtonProps, hoverProps)}
      {...focusProps}
      isActive={isPressed}
      isFocused={isFocusVisible}
      isHovered={isHovered}
      isDisabled={isDisabled !== undefined}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};
