import Tag from './ui/tag';
import { Download, MapPinned } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import NavigationBar from './navigation-bar';

export default function Header() {
  return (
    <header className="flex w-full justify-between">
      <NavigationBar />

      <div className="flex items-center gap-2">
        <Button variant="default">
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
          <div className="bg-pale-green h-2 w-2 rounded-full"></div>
        </Tag>
      </div>
    </header>
  );
}
