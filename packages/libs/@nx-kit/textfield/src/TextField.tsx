import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import {
  As,
  compose,
  getColor,
  getFlexItem,
  getFont,
  getLayout,
  getPosition,
  getSpacing,
  getTypo,
  styled,
} from '@nx-kit/styling';
import { useSlotProps } from '@nx-kit/slot';
import { TextFieldProps, TextFieldStyledProps } from './TextField.types';

const TextFieldStyled = styled.input<TextFieldStyledProps>`
  ${({ theme }) => theme?.component?.textfield?.global};
  ${({ theme, skin }) => skin && theme?.component?.textfield?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

const TextField = (
  props: TextFieldProps,
  ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>
) => {
  const { slot } = props;
  const {
    isDisabled,
    type = 'text',
    autoFocus,
    isRequired,
    isReadOnly,
    error,
    name,
    validation,
    ...rest
  } = useSlotProps<TextFieldProps>(slot ?? 'textfield', props);

  const { isFocusVisible, focusProps } = useFocusRing({
    autoFocus,
    isTextInput: true,
  });

  const elementType = {
    text: {
      as: 'input' as As,
      type: 'text',
    },
    password: {
      as: 'input' as As,
      type: 'password',
    },
    textarea: {
      as: 'textarea' as As,
    },
  };

  const elementTypeProps = elementType[type];

  return (
    <TextFieldStyled
      ref={ref}
      name={name}
      isFocused={isFocusVisible}
      autoFocus={autoFocus}
      isDisabled={isDisabled !== undefined}
      disabled={isDisabled}
      required={isRequired}
      readOnly={isReadOnly}
      hasError={!!error}
      aria-invalid={error ? true : undefined}
      {...mergeProps(focusProps, rest, elementTypeProps)}
    />
  );
};

const TextFieldWithRef = React.forwardRef(TextField);
export { TextFieldWithRef as TextField };
