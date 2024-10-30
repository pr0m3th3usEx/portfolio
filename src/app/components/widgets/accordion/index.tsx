'use client';
import { useCallback, useState } from 'react';
import AccordionTab from './tab';

type AccordionItem = {
  key: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [index, setIndex] = useState<number | null>(null);
  const onChange = useCallback(
    (newIndex: number) => {
      setIndex(newIndex === index ? null : newIndex);
    },
    [index],
  );

  return (
    <div>
      {items.map((item, i) => (
        <AccordionTab
          key={item.key}
          isOpen={index === i}
          title={item.title}
          content={item.content}
          onChange={() => onChange(i)}
        />
      ))}
    </div>
  );
};

export default Accordion;
