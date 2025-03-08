import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Tag from '../ui/tag';

const PROJECTS = [
  {
    key: '1',
    img: '/assets/projects/edamame.webp',
  },
  {
    key: '2',
    img: '/assets/projects/glowme.webp',
  },
  {
    key: '3',
    img: '/assets/projects/ramify.webp',
  },
  {
    key: '4',
    img: '/assets/projects/colas.webp',
  },
  {
    key: '5',
    img: '/assets/projects/sonik-swap.webp',
  },
] as const;

export default function Projects() {
  return (
    <div className="flex flex-col gap-2">
      <Tag variant="outline" className="text-xs uppercase">
        Projects
      </Tag>

      <Carousel
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {PROJECTS.map((p) => (
            <CarouselItem key={p.key}>
              <div className="p-1">
                <Image
                  src={p.img}
                  alt="Project Image"
                  width={800}
                  height={500}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
