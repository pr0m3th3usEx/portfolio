'use client';

import Image from 'next/image';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Tag from '../ui/tag';
import { useEffect, useMemo, useState } from 'react';
import { Progress } from '../ui/progress';

const PROJECTS = [
  {
    key: '1',
    img: '/assets/projects/edamame.webp',
    description:
      "Edamame Technologies dashboard for managing security and access control of devices to your company's resources.",
  },
  {
    key: '2',
    img: '/assets/projects/glowme.webp',
    description:
      'Glowme is a web application that allows beauty professionals to manage their appointments and clients.',
  },
  {
    key: '3',
    img: '/assets/projects/ramify.webp',
    description: 'Ramify: The digital alternative to private banking.',
  },
  {
    key: '4',
    img: '/assets/projects/colas.webp',
    description:
      "Webapp allowing to manage labeling datasets projects for machine learning models' training.",
  },
  {
    key: '5',
    img: '/assets/projects/pm-bot.webp',
    description:
      "Polymarket Bot to allow automatic-trading positions on Polymarket's prediction markets.",
  },
  {
    key: '6',
    img: '/assets/projects/sonik-swap.webp',
    description:
      'Platform to transfer playlists from a streaming service to another (Spotify, YouTube, Deezer, etc.).',
  },
] as const;

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const progress = useMemo(() => (current * 100) / count, [current, count]);

  useEffect(() => {
    if (!api) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative flex flex-col gap-2">
      <Tag variant="outline" className="text-xs uppercase">
        Projects
      </Tag>

      <Carousel
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="">
          {PROJECTS.map((p) => (
            <CarouselItem key={p.key}>
              <div className="p-1">
                <Image
                  src={p.img}
                  alt={p.description}
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <Progress
        value={progress}
        className="**:data-[slot=progress-indicator]:bg-foreground absolute bottom-0 w-1/4"
      />
    </div>
  );
}
