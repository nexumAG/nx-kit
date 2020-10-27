import { FieldBaseProps } from '@nx-kit/types';
import { Theme, Spacing, FlexItem, Position, Color, Layout, Font, Typo } from '@nx-kit/styling';

export type CheckboxSkin = keyof Theme['component']['checkbox']['skin'];
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type CheckboxProps = FieldBaseProps<boolean, Styles> & {
  isIndeterminate?: boolean;
  render?: (props: {
    isFocused: boolean;
    isDisabled: boolean;
    hasError: boolean;
    isSelected: boolean;
    setSelected: (isSelected: boolean) => void;
  }) => React.ReactNode;
};

export type CheckboxStyledProps = {
  skin?: CheckboxSkin;
  styles?: Styles;
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
};
