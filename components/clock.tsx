'use client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Tag from './ui/tag';
import { useEffect, useMemo, useState } from 'react';
import { format as formatTZ } from 'date-fns-tz';
import { TZDate } from '@date-fns/tz';
import { config } from '@/config/constants';
import Status from './status';

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

  const status = useMemo(() => {
    const start = config.schedule.availableTime.from.split(':');
    const startHours = parseInt(start[0]);
    const startMinutes = parseInt(start[1]);

    const end = config.schedule.availableTime.to.split(':');
    const endHours = parseInt(end[0]);
    const endMinutes = parseInt(end[1]);

    const from = startHours * 60 + startMinutes;
    const to = endHours * 60 + endMinutes;

    const index = currentTime.getHours() * 60 + currentTime.getMinutes();

    return index >= from && index < to ? 'free' : 'busy';
  }, [currentTime]);

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
      <Status variant={status} />
    </Tag>
  );
}
