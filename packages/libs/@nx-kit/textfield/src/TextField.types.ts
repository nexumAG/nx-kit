import {
  ClipboardEventHandler,
  CompositionEventHandler,
  FormEventHandler,
  ReactEventHandler,
} from 'react';
import { FieldBaseProps } from '@nx-kit/types';
import {
  Spacing,
  FlexItem,
  Position,
  Color,
  Layout,
  Font,
  Typo,
  TextfieldSkins,
  DefaultTheme,
} from '@nx-kit/styling';

// @ts-ignore
export type TextFieldSkin = TextfieldSkins<DefaultTheme>;
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type TextFieldType = 'text' | 'textarea' | 'password';

export type TextFieldProps = FieldBaseProps<
  string,
  Styles,
  HTMLInputElement | HTMLTextAreaElement
> & {
  type?: TextFieldType;
  'aria-errormessage'?: string;
  'aria-activedescendant'?: string;
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
  'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  onCopy?: ClipboardEventHandler<HTMLElement>;
  onCut?: ClipboardEventHandler<HTMLElement>;
  onPaste?: ClipboardEventHandler<HTMLElement>;
  onCompositionStart?: CompositionEventHandler<HTMLElement>;
  onCompositionEnd?: CompositionEventHandler<HTMLElement>;
  onCompositionUpdate?: CompositionEventHandler<HTMLElement>;
  onSelect?: ReactEventHandler<HTMLElement>;
  onBeforeInput?: FormEventHandler<HTMLElement>;
  onInput?: FormEventHandler<HTMLElement>;
};

export type TextFieldStyledProps = {
  skin?: TextFieldSkin;
  styles?: Styles;
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
};
