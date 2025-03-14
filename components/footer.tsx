import Link from 'next/link';
import { config } from '@/config/constants';
import DiscordIcon from '@/public/discord.svg';
import MaltIcon from '@/public/malt.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import GithubIcon from '@/public/github.svg';

export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-12">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl font-medium">Let’s keep in touch</h2>
        <p className="text-cool-gray text-center text-sm font-light">
          Stay updated on my latest projects, insights, and offerings. Whether
          you have questions, need advice, or just want to chat, don’t hesitate
          to reach out!
        </p>
        <div className="flex gap-6">
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

      <div className="flex flex-col items-center gap-2 text-sm font-light">
        <p>Copyright © 2025 — Made by Thomas</p>
        <p>twilson-software.net</p>
      </div>
    </footer>
  );
}
