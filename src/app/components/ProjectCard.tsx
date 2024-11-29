'use client';
import Image from 'next/image';
import { useRef } from 'react';

type ProjectCardProps = {
  projectName: string;
  iconSrc: string;
  caption: React.ReactNode;
  externalLink: string;
};

const ProjectCard = ({ projectName, iconSrc, caption, externalLink }: ProjectCardProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <div onClick={() => ref.current?.click()} className="flex cursor-pointer flex-col items-start gap-3 rounded-lg bg-theme-blue-4 px-6 py-4 transition-all hover:scale-95">
      <Image src={iconSrc} className="place-self-center" width={200} height={200} alt="project picture" />
      <div className="text-theme-white-2">
        <h4 className="text-2xl font-semibold uppercase">{projectName}</h4>
        <p>{caption}</p>
        <p>
          <a ref={ref} href={externalLink} target="_blank" className="text-lg font-semibold hover:text-theme-blue-1">
            View more...
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
