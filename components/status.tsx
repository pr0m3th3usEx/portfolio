import { useMemo } from 'react';

type StatusProps = {
  variant?: 'free' | 'busy' | 'inactive';
};

export default function Status({ variant = 'free' }: StatusProps) {
  const bgColor = useMemo(() => {
    switch (variant) {
      case 'free':
        return 'bg-green-500';
      case 'busy':
        return 'bg-red-500';
      case 'inactive':
        return 'bg-gray-500';
    }
  }, [variant]);

  return <div className={`h-2 w-2 rounded-full ${bgColor}`}></div>;
}
