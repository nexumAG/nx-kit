import React, { useCallback } from 'react';
import { mergeRefs } from '@nx-kit/utils';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { useToggleState } from '@react-stately/toggle';
import { VisuallyHidden } from '@react-aria/visually-hidden';
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
    hasError,
    ariaLabel,
    defaultValue,
    value,
    // don't pass through
    render,
    validation,
    ...rest
  } = useSlotProps<CheckboxProps>(slot ?? 'checkbox', props);

  const { isFocusVisible, focusProps } = useFocusRing({
    autoFocus,
    isTextInput: false,
  });

  const state = useToggleState({
    ...(props as any),
    defaultSelected: defaultValue,
    isSelected: value,
    value,
    onChange: undefined,
  });
  const localRef = React.useRef<HTMLInputElement | null>(null);
  const { inputProps } = useCheckbox(
    { ...(props as any), isIndeterminate, 'aria-label': ariaLabel, onChange: undefined },
    state,
    localRef
  );
  const mergedRefs = useCallback(mergeRefs<HTMLInputElement | null>(ref, localRef), []);

  const elementTypeProps = {
    as: 'input' as As,
    type: 'checkbox',
  };

  const nativeCheckbox = (
    <CheckboxStyled
      ref={mergedRefs}
      isFocused={isFocusVisible}
      autoFocus={autoFocus}
      isDisabled={isDisabled === true}
      hasError={hasError}
      {...mergeProps(inputProps, focusProps, elementTypeProps, rest)}
      aria-invalid={hasError ? true : undefined}
      aria-required={isAriaRequired}
    />
  );

  if (!render) {
    return nativeCheckbox;
  }

  return (
    <>
      <VisuallyHidden>{nativeCheckbox}</VisuallyHidden>
      {render({
        isSelected: state.isSelected,
        setSelected: state.setSelected,
        hasError: hasError === true,
        isDisabled: isDisabled === true,
        isFocused: isFocusVisible,
      })}
    </>
  );
};

const CheckboxWithRef = React.forwardRef(Checkbox);
export { CheckboxWithRef as Checkbox };
