import { Card, CardContent } from './card';

type ExperienceCardProps = {
  children?: React.ReactNode;
};

export default function ExperienceCard({ children }: ExperienceCardProps) {
  return (
    <Card className="bg-card-default border-none shadow-none">
      <CardContent className="p-3">{children}</CardContent>
    </Card>
  );
}
