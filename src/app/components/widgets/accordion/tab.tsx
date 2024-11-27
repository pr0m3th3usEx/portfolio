import { useRef } from 'react';
import React from 'react';
import AccordionHeader from './header';

type AccordionTabProps = {
  onChange: () => void;
  title: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
};

const AccordionTab = ({ onChange, title, content, isOpen }: AccordionTabProps) => {
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden">
      {/* AccordionHeader */}
      <AccordionHeader onChange={onChange} isOpen={isOpen}>
        {title}
      </AccordionHeader>
      {/* AccordionContent */}
      <div
        ref={contentHeight}
        className={`border-b-2 bg-theme-white-2 transition-[height] duration-500 ease-in-out dark:bg-theme-blue-6 dark:border-b-background`}
        style={isOpen ? { height: contentHeight.current?.scrollHeight } : { height: '0px' }}
      >
        <div className="px-4 pb-5 pt-2">{content}</div>
      </div>
    </div>
  );
};

export default AccordionTab;
