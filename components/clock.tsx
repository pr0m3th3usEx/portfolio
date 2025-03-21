'use client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Tag from './ui/tag';
import { useEffect, useState } from 'react';
import { format as formatTZ } from 'date-fns-tz';
import { TZDate } from '@date-fns/tz';
import { config } from '@/config/constants';

dayjs.extend(utc);
dayjs.extend(timezone);

const usePageVisibility = (onRefocus: () => void) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        onRefocus();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [onRefocus]);
};

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(
    new TZDate(new Date(), config.location.timezone),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new TZDate(new Date(), config.location.timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  usePageVisibility(() => {
    setCurrentTime(new TZDate(new Date(), config.location.timezone));
  });

  return (
    <Tag>
      {formatTZ(currentTime, 'HH:mm')}
      <div className="h-2 w-2 rounded-full bg-green-500"></div>
    </Tag>
  );
}
