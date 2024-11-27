import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const AccordionHeader = ({
  isOpen,
  onChange,
  children,
}: {
  isOpen: boolean;
  onChange: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-between bg-theme-white-2 px-4 py-7 hover:bg-gray-50 dark:bg-theme-blue-6 dark:hover:bg-gray-800`}
      onClick={onChange}
    >
      {typeof children === 'string' ? (
        <h3 className={`text-xl font-semibold ${isOpen ? 'text-theme-blue-1' : ''}`}>{children}</h3>
      ) : (
        children
      )}
      <FaAngleDown className={`text-xl transition-all duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
    </div>
  );
};

export default AccordionHeader;
