import React, { useContext } from 'react';
import { mergeProps } from '@react-aria/utils';

export const SlotContext = React.createContext<{ [key: string]: any }>({});

export function useSlotProps<T>(slot: string, props: any = {}): T {
  const { [slot]: slotProps = {} } = useContext(SlotContext);
  return mergeProps(slotProps, props);
}

export type SlotProviderProps = {
  slots: { [key: string]: any };
  children: React.ReactNode;
};

export const SlotProvider = ({ slots, children }: SlotProviderProps) => (
  <SlotContext.Provider value={slots}>{children}</SlotContext.Provider>
);
