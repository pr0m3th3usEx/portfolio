import { Menu } from 'lucide-react';
import { Button } from './ui/button';

export default function NavigationBar() {
  return (
    <Button variant="outline">
      <Menu size={24} />
    </Button>
  );
}
