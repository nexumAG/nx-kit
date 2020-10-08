import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
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
  As,
} from '@nx-kit/styling';
import { useSlotProps } from '@nx-kit/slot';
import { TextFieldProps, TextFieldStyledProps } from './TextField.types';

const TextFieldStyled = styled.input<TextFieldStyledProps>`
  ${({ theme }) => theme?.component?.textfield?.global};
  ${({ theme, skin }) => skin && theme?.component?.textfield?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

export const TextField = (props: TextFieldProps) => {
  const { slot } = props;
  const {
    isDisabled,
    isTextArea,
    autoFocus,
    isRequired,
    isReadOnly,
    error,
    ...rest
  } = useSlotProps<TextFieldProps>(slot ?? 'textfield', props);

  const { isFocusVisible, focusProps } = useFocusRing({
    autoFocus,
    isTextInput: true,
  });

  return (
    <TextFieldStyled
      as={isTextArea ? ('textarea' as As) : ('input' as As)}
      isFocused={isFocusVisible}
      autoFocus={autoFocus}
      isDisabled={isDisabled !== undefined}
      disabled={isDisabled}
      required={isRequired}
      readOnly={isReadOnly}
      hasError={!!error}
      aria-invalid={error ? true : undefined}
      {...mergeProps(focusProps, rest)}
    />
  );
};
