'use client';
import { createContext, useCallback, useState } from 'react';

type DValue = {
  keyOpen: string;
  onChange: (key: string) => void;
};

const defaultValue = {
  keyOpen: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: (_: string) => {},
};

export const AccordionContext = createContext<DValue>(defaultValue);

const Accordion = ({ children: tabs }: { children: JSX.Element | JSX.Element[] }) => {
  const [keyOpen, setKeyOpen] = useState<string>('');
  const onChange = useCallback(
    (key: string) => {
      if (Array.isArray(tabs) && tabs.findIndex((tab) => tab.key === key) < 0) {
        return;
      }
      setKeyOpen(keyOpen === key ? '' : key);
    },
    [tabs, keyOpen],
  );

  return (
    <AccordionContext.Provider
      value={{
        keyOpen,
        onChange,
      }}
    >
      {tabs}
    </AccordionContext.Provider>
  );
};

export default Accordion;
export { default as AccordionTab } from './tab';
export { default as AccordionTitle } from './title';
