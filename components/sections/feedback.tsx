import { Card, CardContent } from '../ui/card';
import Tag from '../ui/tag';

export default function ClientFeedbacks() {
  return (
    <div className="flex flex-col gap-2">
      <Tag variant="outline" className="text-xs uppercase">
        Client feedbacks
      </Tag>

      <Card className="border-cool-gray bg-card-default shadow-none">
        <CardContent className="flex flex-col gap-2 px-4 py-6">
          <h3>Quentin V. - EDAMAME Technologies</h3>
          <p className="text-cool-gray text-sm font-light">
            “Thomas a été d’une aide inestimable sur le projet Edamame. Grâce à
            ses énormes compétences, il est parvenu à aborder chaque défi avec
            efficacité et créativité. Sa réactivité, son professionnalisme et
            son sens de l’initiative en font un collaborateur de choix. Je le
            recommande vivement pour tout projet ambitieux.“
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
