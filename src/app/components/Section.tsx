type SectionProps = {
  title?: string;
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
};

const Section = ({ title, children, orientation = 'vertical' }: SectionProps) => {
  return (
    <div className={`flex w-full gap-8 ${orientation === 'vertical' ? 'flex-col' : 'flex-row justify-between'}`}>
      <h3 className="w-fit flex-grow-0 text-4xl font-semibold text-theme-gray-1">{title}</h3>
      <div className={`flex-grow-1 w-full ${orientation === 'vertical' ? '' : 'max-w-4xl'}`}>{children}</div>
    </div>
  );
};

export default Section;
