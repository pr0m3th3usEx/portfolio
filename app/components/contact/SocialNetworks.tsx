import Link from 'next/link';
import DiscordIcon from '@/public/discord.svg';
import MaltIcon from '@/public/malt.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import GithubIcon from '@/public/github.svg';
import { HTMLAttributes } from 'react';

export default function SocialNetworks({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`line-extension flex w-fit flex-col items-center gap-3 px-3 ${className}`}
      {...props}
    >
      <div className="flex flex-col items-center gap-6">
        <Link href="#" className="hover:text-coral-pink">
          <GithubIcon
            width={24}
            height={24}
            className="hover:text-coral-pink"
          />
        </Link>

        <Link href="#">
          <LinkedinIcon
            width={24}
            height={24}
            className="hover:text-coral-pink"
          />
        </Link>
        <Link href="#">
          <MaltIcon width={24} height={24} className="hover:text-coral-pink" />
        </Link>
        <Link href="#">
          <DiscordIcon
            width={24}
            height={24}
            className="hover:text-coral-pink"
          />
        </Link>
      </div>
    </div>
  );
}
