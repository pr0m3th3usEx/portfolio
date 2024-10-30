import React from 'react';

const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment key="acc-content">{children}</React.Fragment>;
};

export default AccordionContent;
