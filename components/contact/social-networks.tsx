import { HTMLAttributes } from 'react';
import Link from 'next/link';
import DiscordIcon from '@/public/discord.svg';
import MaltIcon from '@/public/malt.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import GithubIcon from '@/public/github.svg';

export default function SocialNetworks({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`line-extension flex w-fit flex-col items-center gap-3 ${className}`}
      {...props}
    >
      <div className="flex flex-col items-center gap-6">
        <Link href="#" className="hover:text-coral-pink">
          <GithubIcon width={24} height={24} />
        </Link>
        <Link href="#" className="hover:text-coral-pink">
          <LinkedinIcon width={24} height={24} />
        </Link>
        <Link href="#" className="hover:text-coral-pink">
          <MaltIcon width={24} height={24} />
        </Link>
        <Link href="#" className="hover:text-coral-pink">
          <DiscordIcon width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}
