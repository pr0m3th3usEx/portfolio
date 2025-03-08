import { config } from '@/config/constants';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

export default function EmailContact({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`line-extension flex h-fit w-fit flex-col items-center gap-3 ${className}`}
      {...props}
    >
      <Link href="mailto:">
        <p className="vertical-text hover:text-coral-pink tracking-widest">
          {config.email}
        </p>
      </Link>
    </div>
  );
}
