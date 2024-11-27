import dayjs from 'dayjs';
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
    <div className="flex flex-col gap-2 rounded-lg bg-theme-white-1 px-6 py-4 shadow-light dark:bg-theme-blue-6 dark:shadow-base">
      <Image src={iconSrc} alt={`${company} logo`} width={32} height={32} />
      <h4 className="text-xl font-semibold">{company}</h4>
      <div>
        <p>
          {role} - {contractText}
        </p>
        <p>
          {/* Format Dates */}
          {dayjs(start).format('MM/YYYY')} - {!end ? 'Present' : dayjs(end).format('MM/YYYY')}
        </p>
      </div>
    </div>
  );
};

export default CareerCard;
