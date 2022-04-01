import React, { useCallback, useRef, forwardRef } from 'react';
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
import { mergeRefs } from '@nx-kit/utils';
import { ButtonProps, ButtonStyledProps } from './Button.types';

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ theme }) => theme?.component?.button?.global};
  ${({ theme, skin }) => skin && theme?.component?.button?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

// TODO: ref type as generic?
const Button = ({ slot, ...buttonProps }: ButtonProps, ref?: React.Ref<HTMLElement | null>) => {
  // eslint-disable-next-line react/destructuring-assignment
  const props = useSlotProps<ButtonProps>(slot ?? 'button', buttonProps);
  const { children, isDisabled, autoFocus, elementType = 'button', onPress, ...rest } = props;
  const localRef = useRef(null);

  const { buttonProps: useButtonProps, isPressed } = useButton({ ...props, elementType }, localRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

  const mergedRefs = useCallback(mergeRefs<HTMLElement | null>(ref, localRef), [ref]);

  const classes = props.className ? props.className.split(' ') : [];
  if (isFocusVisible) {
    classes.push('isFocused');
  }
  if (isHovered) {
    classes.push('isHovered');
  }

  return (
    <ButtonStyled
      ref={mergedRefs}
      as={elementType as As}
      isActive={isPressed}
      isFocused={isFocusVisible}
      isHovered={isHovered}
      isDisabled={isDisabled === true}
      className={classes.join(' ')}
      {...mergeProps(useButtonProps, hoverProps, focusProps, rest)}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonWithRef = forwardRef(Button);
export { ButtonWithRef as Button };
