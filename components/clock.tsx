'use client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Tag from './ui/tag';
import { useEffect, useState } from 'react';

dayjs.extend(utc);
dayjs.extend(timezone);

const usePageVisibility = (onRefocus: () => void) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        onRefocus(); // Call the function when user refocuses
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [onRefocus]);
};

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  usePageVisibility(() => {
    setCurrentTime(new Date());
  });

  return (
    <Tag>
      {dayjs(currentTime).tz('Europe/Paris').format('HH:mm')}
      <div className="h-2 w-2 rounded-full bg-green-500"></div>
    </Tag>
  );
}
