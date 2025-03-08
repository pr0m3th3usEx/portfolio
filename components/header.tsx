import Tag from './ui/tag';
import { Download, MapPinned } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import NavigationBar from './navigation-bar';

export default function Header() {
  return (
    <header className="flex w-full justify-between px-4 pt-8 md:fixed md:top-0 md:px-4">
      <NavigationBar />

      <div className="flex items-center gap-2">
        <Button variant="default" className="hidden md:flex">
          <Download size={12} />
          Resume
        </Button>

        <Tag>
          <MapPinned size={12} />
          Paris
        </Tag>
        <Tag>
          <Globe size={12} />
          UTC+2
        </Tag>
        <Tag>
          16h38
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </Tag>
      </div>
    </header>
  );
}
