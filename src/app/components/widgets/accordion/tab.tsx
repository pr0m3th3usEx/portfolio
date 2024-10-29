type AccordionTabProps = {
  key: string;
  children: React.ReactNode[];
};

const AccordionTab = ({ key, children }: AccordionTabProps) => {
  return <>{children}</>;
};

export default AccordionTab;
