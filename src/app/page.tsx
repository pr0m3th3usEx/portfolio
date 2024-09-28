import Image from 'next/image';
import Button from './components/widgets/Button';
import Link from 'next/link';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-12 p-0 pb-20 font-content sm:p-4">
      {/* Header  */}
      <div className="min-h-124 w-full bg-theme-blue-1 shadow-base sm:rounded-2xl sm:p-8">
        <div className="flex flex-col items-center gap-12">
          <nav className="sm:w-124">
            <ul className="flex justify-center rounded-full border-2 border-white">
              <Link className="nav-item" href="#about-me">
                About me
              </Link>
              <Link className="nav-item" href="#projects">
                Projects
              </Link>
              <Link className="nav-item" href="#career">
                Career
              </Link>
              <Link className="nav-item" href="#skills">
                Skills
              </Link>
              <Link className="nav-item" href="#contact">
                Contact me
              </Link>
            </ul>
          </nav>

          <div className="flex justify-center gap-16">
            <div>
              <Image src="assets/id_card.svg" alt="Thomas Michel Dev ID Card" width={350} height={500} />
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-title font-semibold leading-tight text-theme-white-1">
                  I build software for <span className="text-theme-black-1">developers,</span>
                </h2>
                <h2 className="text-title font-semibold leading-tight text-theme-white-1">
                  I create products for <span className="text-theme-black-1">customers</span>
                </h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  variant="primary"
                  rightIcon={<Image src="assets/download.svg" alt="Download icon" width={14} height={19} />}
                >
                  Download resume
                </Button>
                <Button
                  variant="secondary"
                  rightIcon={<Image src="assets/right_arrow.svg" alt="Download icon" width={14} height={19} />}
                >
                  Take a tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex flex-col gap-12 sm:px-8">
        <Section key="about-me" title="About me" orientation="horizontal">
          <div className="shadow-light w-full rounded-md bg-theme-white-2 p-5 text-xl font-medium">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae odio magna. Pellentesque congue ex
              nec sapien facilisis, a tempor sapien imperdiet. Fusce at odio nisl. Nulla libero ex, semper sit amet
              porttitor sit amet, ultricies nec libero. Nulla facilisi. Suspendisse id erat ex. Vivamus volutpat ante
              pretium gravida iaculis. Sed mollis mattis neque nec ultricies. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Praesent pellentesque elementum orci. Proin mollis erat dictum bibendum rutrum. Cras
              quis tincidunt nunc, ut vulputate ante. Sed finibus et neque eget mattis.
            </p>
          </div>
        </Section>

        <Section key="projects" title="Lastest projects">
          <div className="flex w-full flex-col gap-6">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
              <ProjectCard
                projectName="Mana"
                iconSrc="assets/potion.svg"
                caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae odio magna."
                externalLink="#"
              />
              <ProjectCard
                projectName="Mana"
                iconSrc="assets/potion.svg"
                caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae odio magna."
                externalLink="#"
              />
              <ProjectCard
                projectName="Mana"
                iconSrc="assets/potion.svg"
                caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae odio magna."
                externalLink="#"
              />
            </div>

            <a
              href="https://github.com/pr0m3th3usEx"
              target="_blank"
              className="text-xl font-semibold text-theme-blue-3 hover:text-theme-blue-1"
            >
              View all projects on Github...
            </a>
          </div>
        </Section>

        <Section key="career" title="Experiences">
          <p>Test</p>
        </Section>

        <Section key="skills" title="Skills">
          <p>Test</p>
        </Section>
      </main>
    </div>
  );
}
