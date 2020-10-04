import React, { useContext } from 'react';

const SlotContext = React.createContext<{ [key: string]: any }>({});

export function useSlotProps<T>(slot: string, props: any = {}): T {
  const { [slot]: slotProps = {} } = useContext(SlotContext);
  return { ...props, ...slotProps };
}

type SlotProviderProps = {
  slots: { [key: string]: any };
  children: React.ReactNode;
};

export const SlotProvider = ({ slots, children }: SlotProviderProps) => {
  return <SlotContext.Provider value={slots}>{children}</SlotContext.Provider>;
};
