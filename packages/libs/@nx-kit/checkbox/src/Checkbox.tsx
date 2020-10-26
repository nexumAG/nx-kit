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

  return (
    <div onClick={() => state.setSelected(!state.isSelected)}>
      <VisuallyHidden>
        <CheckboxStyled
          ref={mergedRefs}
          isFocused={isFocusVisible}
          autoFocus={autoFocus}
          isDisabled={isDisabled !== undefined}
          hasError={hasError}
          {...mergeProps(inputProps, focusProps, elementTypeProps, rest)}
          aria-invalid={hasError ? true : undefined}
          aria-required={isAriaRequired}
        />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <rect
          x={state.isSelected ? 4 : 5}
          y={state.isSelected ? 4 : 5}
          width={state.isSelected ? 16 : 14}
          height={state.isSelected ? 16 : 14}
          fill={state.isSelected ? 'orange' : 'none'}
          stroke={state.isSelected ? 'none' : 'gray'}
          strokeWidth={2}
        />
        {state.isSelected && (
          <path
            transform="translate(7 7)"
            d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
          />
        )}
        {isFocusVisible && (
          <rect x={1} y={1} width={22} height={22} fill="none" stroke="orange" strokeWidth={2} />
        )}
      </svg>
    </div>
  );
};

const CheckboxWithRef = React.forwardRef(Checkbox);
export { CheckboxWithRef as Checkbox };
