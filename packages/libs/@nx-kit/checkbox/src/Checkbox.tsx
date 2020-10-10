import React, { useCallback } from 'react';
import { mergeRefs } from '@nx-kit/utils';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { useToggleState } from '@react-stately/toggle';
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
import { CheckboxProps, CheckboxStyledProps } from './Checkbox.types';

const CheckboxStyled = styled.input<CheckboxStyledProps>`
  ${({ theme }) => theme?.component?.checkbox?.global};
  ${({ theme, skin }) => skin && theme?.component?.checkbox?.skin?.[skin]};
  ${compose(getSpacing, getFlexItem, getPosition, getColor, getLayout, getTypo)}
  ${getFont};
`;

const Checkbox = (props: CheckboxProps, ref?: React.Ref<HTMLInputElement | null>) => {
  const { slot } = props;
  const {
    isDisabled,
    autoFocus,
    isRequired,
    isAriaRequired,
    isReadOnly,
    isIndeterminate,
    error,
    ariaLabel,
    defaultValue,
    // don't pass through
    validation,
    ...rest
  } = useSlotProps<CheckboxProps>(slot ?? 'checkbox', props);

  const { isFocusVisible, focusProps } = useFocusRing({
    autoFocus,
    isTextInput: false,
  });

  const state = useToggleState({ ...(props as any), defaultSelected: defaultValue });
  const localRef = React.useRef<HTMLInputElement | null>(null);
  const { inputProps } = useCheckbox(
    { ...(props as any), isIndeterminate, 'aria-label': ariaLabel },
    state,
    localRef
  );
  const mergedRefs = useCallback(mergeRefs<HTMLInputElement | null>(ref, localRef), []);

  const elementTypeProps = {
    as: 'input' as As,
    type: 'checkbox',
  };

  return (
    <CheckboxStyled
      ref={mergedRefs}
      isFocused={isFocusVisible}
      autoFocus={autoFocus}
      isDisabled={isDisabled !== undefined}
      hasError={!!error}
      {...mergeProps(inputProps, focusProps, elementTypeProps, rest)}
      aria-invalid={error ? true : undefined}
      aria-required={isAriaRequired}
    />
  );
};

const CheckboxWithRef = React.forwardRef(Checkbox);
export { CheckboxWithRef as Checkbox };
