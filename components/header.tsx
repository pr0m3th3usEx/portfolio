import Tag from './ui/tag';
import { Download, MapPinned, Globe } from 'lucide-react';
import { config } from '@/config/constants';
import { Button } from './ui/button';
import NavigationBar from './navigation-bar';
import Link from 'next/link';
import Clock from './clock';

export default function Header() {
  return (
    <header className="flex w-full justify-between px-4 pt-8 md:fixed md:top-0 md:px-4">
      <NavigationBar />

      <div className="flex items-center gap-2">
        <Link href={config.resumeUrl} target="_blank">
          <Button variant="default">
            <Download size={12} />
            Resume
          </Button>
        </Link>

        <Tag>
          <MapPinned size={12} />
          Paris
        </Tag>
        <Tag>
          <Globe size={12} />
          UTC+2
        </Tag>

        <Clock />
      </div>
    </header>
  );
}
