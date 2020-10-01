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
} from '@nx-kit/styling';
import { ButtonProps, ButtonStyledProps } from './Button.types';

const ButtonStyled = styled.button<ButtonStyledProps>`
  // reset
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  overflow: visible;
  margin: 0;
  border-style: solid;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-appearance: button;
  vertical-align: top;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  isolation: isolate;

  &:hover,
  &:active {
    box-shadow: none;
  }

  &:disabled {
    cursor: default;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
    border-style: none;
    padding: 0;
    margin-block-start: -2px;
    margin-block-end: -2px;
  }

  ${({ theme, skin }) => skin && theme?.component?.button?.skin?.[skin]};
  ${getSpacing()}
  ${getFlexItem()}
  ${getPosition()}
  ${getColor()}
  ${getLayout()}
  ${getFont()}
  ${getTypo()}
`;

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    isDisabled,
    autoFocus,
    skin,
    styles,
    elementType = 'button',
  } = props;
  const ref = useRef(null);

  const { buttonProps, isPressed } = useButton({ ...props, elementType }, ref);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

  return (
    <ButtonStyled
      ref={ref}
      as={elementType as As}
      className={className}
      skin={skin}
      styles={styles}
      {...mergeProps(buttonProps, hoverProps)}
      {...focusProps}
      isActive={isPressed}
      isFocus={isFocusVisible}
      isHovered={isHovered}
      isDisabled={isDisabled !== undefined}
    >
      {children}
    </ButtonStyled>
  );
};
