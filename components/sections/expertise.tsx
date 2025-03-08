import Image from 'next/image';
import Link from 'next/link';
import { config } from '@/config/constants';
import { Card, CardContent } from '../ui/card';
import Tag from '../ui/tag';

export default function Expertise() {
  return (
    <div className="flex flex-col gap-2">
      <Tag variant="outline" className="text-xs uppercase">
        Expertise
      </Tag>

      <Link href={config.calendarUrl} target="_blank">
        <Card className="bg-card-default hover:bg-foreground hover:text-background cursor-pointer border-none shadow-none transition-colors duration-300">
          <CardContent className="flex aspect-[16/6] flex-col items-center gap-6 p-3">
            <div className="flex w-full justify-between">
              <p>(001)</p>
              <h3 className="">Software development</h3>
            </div>
            <Image
              src="/assets/development.webp"
              alt="Software development"
              width={640}
              height={360}
              className="w-3/8"
            />
            <div className="flex w-full items-center gap-2">
              <p>Open for collaboration</p>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
