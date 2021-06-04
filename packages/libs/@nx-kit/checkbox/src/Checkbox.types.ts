import { FieldBaseProps } from '@nx-kit/types';
import { Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

export type CheckboxSkin = keyof Theme['component']['checkbox']['skin'];
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type CheckboxProps = FieldBaseProps<boolean, Styles, HTMLInputElement> & {
  isIndeterminate?: boolean;
  isChecked?: boolean;
  defaultChecked?: boolean;
  render?: (props: {
    isFocused: boolean;
    isDisabled: boolean;
    hasError: boolean;
    isChecked: boolean;
    setChecked: (isChecked: boolean) => void;
  }) => React.ReactNode;
};

export type CheckboxStyledProps = {
  skin?: CheckboxSkin;
  styles?: Styles;
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
};
