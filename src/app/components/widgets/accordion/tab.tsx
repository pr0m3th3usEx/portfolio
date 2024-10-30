import { useRef } from 'react';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
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
    <div className='overflow-hidden'>
      {/* AccordionHeader */}
      <AccordionHeader onChange={onChange} isOpen={isOpen}>
        {title}
      </AccordionHeader>
      {/* AccordionContent */}
      <div ref={contentHeight} className={`bg-theme-white-2 transition-[height] ease-in-out duration-500 border-b-2`} style={
          isOpen
          ? { height: contentHeight.current?.scrollHeight }
          : { height: "0px" }
         }>
        <div className="py-5">{content}</div>
      </div>
    </div>
  );
};

export default AccordionTab;
