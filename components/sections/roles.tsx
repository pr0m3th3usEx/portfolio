import Tag from '../ui/tag';
import ExperienceCard from '../ui/xp-card';

export default function Roles() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Tag variant="outline" className="text-xs uppercase">
          Current roles
        </Tag>

        <ExperienceCard>
          <div className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <h3>Independant contractor</h3>
              <Tag variant="success">
                Open for collaboration
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </Tag>
            </div>
            <p className="text-cool-gray text-sm font-light">
              I’m available for a limited number of collaborative projects each
              year. If you’re interested in exploring potential opportunities,
              feel free to schedule a meeting, and let’s see how we can create
              something remarkable together.
            </p>
          </div>
        </ExperienceCard>
      </div>

      <div className="flex flex-col gap-2">
        <Tag variant="outline" className="text-xs uppercase">
          Former roles
        </Tag>

        <ExperienceCard>
          <div className="flex w-full items-center justify-between">
            <div className="flex grow flex-col gap-1">
              <h3>EDAMAME Technologies</h3>
              <p className="text-cool-gray text-sm font-light">
                Software Engineer
              </p>
            </div>
            <p className="text-cool-gray text-sm font-light">2024</p>
          </div>
        </ExperienceCard>

        <ExperienceCard>
          <div className="flex w-full items-center justify-between">
            <div className="flex grow flex-col gap-1">
              <h3>Glowme</h3>
              <p className="text-cool-gray text-sm font-light">
                Co-founder / CTO
              </p>
            </div>
            <p className="text-cool-gray text-sm font-light">2022-2024</p>
          </div>
        </ExperienceCard>

        <ExperienceCard>
          <div className="flex w-full items-center justify-between">
            <div className="flex grow flex-col gap-1">
              <h3>Ramify</h3>
              <p className="text-cool-gray text-sm font-light">
                Fullstack Engineer
              </p>
            </div>
            <p className="text-cool-gray text-sm font-light">2021-2022</p>
          </div>
        </ExperienceCard>
      </div>
    </>
  );
}
