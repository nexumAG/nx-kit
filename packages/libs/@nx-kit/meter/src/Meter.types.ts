import { Color, DefaultTheme, FlexItem, Font, Layout, Position, Spacing, MeterSkins, Typo } from '@nx-kit/styling';
import { ReactNode } from 'react';

export type MeterColor = {
  value: number;
  color: string;
};

export type MeterColors = {
  absolute?: boolean;
  stops: MeterColor[];
};


// @ts-ignore
export type MeterSkin = MeterSkins<DefaultTheme>;
type Styles = Spacing & FlexItem & Position & Color & Layout & Font & Typo;

export type MeterStyledProps = {
  skin?: MeterSkin;
  styles?: Styles;
};


export type MeterProps = {
  className?: string;
  label?: ReactNode;
  formatOptions?: Intl.NumberFormatOptions;
  valueLabel?: ReactNode;
  value: number;
  minValue: number;
  maxValue: number;
  id?: string;
  labeledBy?: string;
  describedBy?: string;
  showValueLabel?: boolean;
  colors?: MeterColors;
  skin?: string;
  styles?: Styles;
};