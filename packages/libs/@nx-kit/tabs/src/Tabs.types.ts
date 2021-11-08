import { AriaTabListProps } from '@react-types/tabs';
import { TabsSkins, DefaultTheme } from '@nx-kit/styling';

// @ts-ignore
type TabsSkin = TabsSkins<DefaultTheme>;

export type TabsProps = {
  className?: string;
  skin?: TabsSkin;
} & AriaTabListProps<object>;

export type TabsStyledProps = {
  skin?: TabsSkin;
  orientation: 'vertical' | 'horizontal';
};
