import { type HTMLAttributes } from 'react';
import Link from 'next/link';
import { config } from '@/config/constants';
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
        <Link
          href={config.githubUrl}
          className="hover:text-coral-pink"
          target="_blank"
        >
          <GithubIcon width={24} height={24} />
        </Link>
        <Link
          href={config.linkedinUrl}
          className="hover:text-coral-pink"
          target="_blank"
        >
          <LinkedinIcon width={24} height={24} />
        </Link>
        <Link
          href={config.maltUrl}
          className="hover:text-coral-pink"
          target="_blank"
        >
          <MaltIcon width={24} height={24} />
        </Link>
        <Link
          href={config.discordUrl}
          className="hover:text-coral-pink"
          target="_blank"
        >
          <DiscordIcon width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}
