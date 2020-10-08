import React from 'react';
import { useFocusRing } from '@react-aria/focus';
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
import { TextFieldProps, TextFieldStyledProps } from './TextField.types';

const TextFieldStyled = styled.input<TextFieldStyledProps>`
  ${({ theme }) => theme?.component?.textfield?.global};
  ${({ theme, skin }) => skin && theme?.component?.textfield?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

export const TextField = (props: TextFieldProps) => {
  const { isDisabled, isTextArea, autoFocus, ...rest } = useSlotProps<TextFieldProps>(
    props.slot ?? 'textfield',
    props
  );

  const { isFocusVisible, focusProps } = useFocusRing({
    autoFocus,
    isTextInput: true,
  });

  return (
    <TextFieldStyled
      as={isTextArea ? 'textarea' : 'input'}
      isFocused={isFocusVisible}
      {...rest}
      isDisabled={isDisabled}
      disabled={isDisabled}
      autoFocus={autoFocus}
      {...focusProps}
    />
  );
};
