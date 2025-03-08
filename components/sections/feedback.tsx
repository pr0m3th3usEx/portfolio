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
            “Thomas has been an invaluable help on the Edamame project. Thanks
            to his outstanding skills, he managed to tackle every challenge with
            efficiency and creativity. His responsiveness, professionalism, and
            sense of initiative make him an exceptional collaborator. I highly
            recommend him for any ambitious project.”
          </p>
        </CardContent>
      </Card>

      <Card className="border-cool-gray bg-card-default shadow-none">
        <CardContent className="flex flex-col gap-2 px-4 py-6">
          <h3>Nicolas D. - EDAMAME Technologies</h3>
          <p className="text-cool-gray text-sm font-light">
            “Thomas will be a great asset to your project: his diverse
            experiences give him a strong product vision, he develops across
            multiple stacks, and he is both autonomous and highly reliable. I
            highly recommend him.”
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
