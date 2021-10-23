import React, { ReactNode, useCallback } from 'react';
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

const WithLabel = ({
  checkbox,
  children,
}: {
  checkbox: ReactNode;
  children: ReactNode | ((checkbox: ReactNode) => ReactNode) | undefined;
}) => {
  if (!children) {
    return checkbox;
  }

  if (typeof children === 'function') {
    return children(checkbox);
  }

  return (
    <label>
      {checkbox}
      {children}
    </label>
  );
};

const Checkbox = ({ slot, ...props }: CheckboxProps, ref?: React.Ref<HTMLInputElement | null>) => {
  const {
    isDisabled,
    isRequired,
    isReadOnly,
    isIndeterminate,
    isChecked,
    autoFocus,
    hasError,
    defaultChecked,
    defaultValue,
    value,
    children,
    // don't pass through
    render,
    validation,
    ...rest
  } = useSlotProps<CheckboxProps>(slot ?? 'field', props);

  const { isFocusVisible, focusProps } = useFocusRing({
    autoFocus,
    isTextInput: false,
  });

  const state = useToggleState({
    ...(props as any),
    defaultSelected: defaultChecked ?? !!defaultValue,
    isSelected: isChecked, // controlled
    value,
    onChange: undefined,
  });
  const localRef = React.useRef<HTMLInputElement | null>(null);
  const { inputProps } = useCheckbox(
    { ...mergeProps(props as any, rest), isIndeterminate, onChange: undefined },
    state,
    localRef
  );
  const mergedRefs = useCallback(mergeRefs<HTMLInputElement | null>(ref, localRef), [ref]);

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
      aria-invalid={hasError ? true : undefined}
      aria-required={isRequired}
      {...mergeProps(inputProps, focusProps, elementTypeProps, rest)}
    />
  );

  if (!render) {
    return <WithLabel checkbox={nativeCheckbox}>{children}</WithLabel>;
  }

  return (
    <WithLabel
      checkbox={
        <>
          <VisuallyHidden>{nativeCheckbox}</VisuallyHidden>
          {render({
            isChecked: state.isSelected,
            setChecked: state.setSelected,
            hasError: hasError === true,
            isDisabled: isDisabled === true,
            isFocused: isFocusVisible,
          })}
        </>
      }
    >
      {children}
    </WithLabel>
  );
};

const CheckboxWithRef = React.forwardRef(Checkbox);
export { CheckboxWithRef as Checkbox };
