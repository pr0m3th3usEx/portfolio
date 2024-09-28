import Image from 'next/image';
import { useMemo } from 'react';

type CareerCardProps = {
  iconSrc: string;
  role: string;
  company: string;
  contractType: 'contract' | 'fulltime' | 'parttime';
  start: Date;
  end?: Date;
};

const CareerCard = ({ company, iconSrc, role, contractType, start, end }: CareerCardProps) => {
  const contractText = useMemo(() => {
    switch (contractType) {
      case 'contract':
        return 'Contract';
      case 'fulltime':
        return 'Full Time';
      case 'parttime':
        return 'Part Time';
    }
  }, [contractType]);

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-theme-white-2 px-6 py-4 shadow-light">
      <Image src={iconSrc} alt={`${company} logo`} width={32} height={32} />
      <h4 className="text-xl font-semibold">{company}</h4>
      <div>
        <p>
          {role} - {contractText}
        </p>
        <p>
          {/* Format Dates */}
          {start.toDateString()} - {!end ? 'Present' : end.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default CareerCard;
