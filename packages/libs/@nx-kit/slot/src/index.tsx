import React, { useContext } from 'react';
import { mergeProps } from '@react-aria/utils';

const SlotContext = React.createContext<{ [key: string]: any }>({});

export function useSlotProps<T>(slot: string, props: any = {}): T {
  const { [slot]: slotProps = {} } = useContext(SlotContext);
  return mergeProps(slotProps, props);
}

type SlotProviderProps = {
  slots: { [key: string]: any };
  children: React.ReactNode;
};

export const SlotProvider = ({ slots, children }: SlotProviderProps) => {
  return <SlotContext.Provider value={slots}>{children}</SlotContext.Provider>;
};
