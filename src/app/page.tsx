import Image from 'next/image';
import Button from './components/widgets/Button';
import Link from 'next/link';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import CareerCard from './components/CareerCard';
import Footer from './components/Footer';
import Accordion, { AccordionTab, AccordionTitle } from './components/widgets/accordion';
import AccordionContent from './components/widgets/accordion/content';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-12 p-0 font-content sm:p-4 sm:pb-20">
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
          <div className="w-full rounded-md bg-theme-white-2 p-5 text-xl font-medium shadow-light">
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <CareerCard
              iconSrc="/assets/edamame.png"
              role="Software Engineer"
              contractType="fulltime"
              company="EDAMAME Technologies"
              start={new Date(2024, 2)}
            />
            <CareerCard
              iconSrc="/assets/glowme.png"
              role="Co-Founder"
              contractType="fulltime"
              company="Glowme"
              start={new Date(2022, 6)}
              end={new Date(2024, 1)}
            />
            <CareerCard
              iconSrc="https://app.ramify.fr/assets/black_leaf-3e39219c.svg"
              role="Full Stack Engineer"
              contractType="fulltime"
              company="Ramify"
              start={new Date(2021, 9)}
              end={new Date(2022, 6)}
            />
            <CareerCard
              iconSrc="https://media.licdn.com/dms/image/v2/C4D0BAQH1WVfu4wTrQw/company-logo_200_200/company-logo_200_200/0/1645110753916/colas_logo?e=1735776000&v=beta&t=GkHYzUvItfbY_Sq5D-hVUKPTXK7CaK5zz2xo4IUdmZI"
              role="Software Engineer"
              contractType="contract"
              company="Colas Group"
              start={new Date(2021, 11)}
              end={new Date(2022, 2)}
            />
          </div>
        </Section>

        <Section key="skills" title="Skills">
          <Accordion>
            <AccordionTab key="languages">
              <AccordionTitle>Software</AccordionTitle>
              <AccordionContent>
                <p>Test</p>
              </AccordionContent>
            </AccordionTab>
          </Accordion>
        </Section>

        <Footer />
      </main>
    </div>
  );
}
