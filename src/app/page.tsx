import Image from 'next/image';
import Button from './components/widgets/Button';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import CareerCard from './components/CareerCard';
import Footer from './components/Footer';
import Accordion from './components/widgets/accordion';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full border-spacing-3 flex-col gap-12 p-0 font-content sm:p-4 sm:pb-20">
      {/* Header  */}
      <div className="min-h-104 w-full bg-theme-blue-1 pb-12 shadow-base sm:rounded-2xl sm:p-8">
        <div className="flex h-full w-full flex-col items-center gap-12">
          <Navbar />

          <div className="flex min-h-full items-center justify-center gap-16">
            <div className="hidden md:visible">
              <Image src="assets/id_card.svg" alt="Thomas Michel Dev ID Card" width={350} height={500} />
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-center text-5xl font-semibold leading-tight text-theme-white-1 lg:text-title">
                  I build software for <span className="text-theme-black-1">developers,</span>
                </h2>
                <h2 className="text-center text-5xl font-semibold leading-tight text-theme-white-1 lg:text-title">
                  I create products for <span className="text-theme-black-1">customers</span>
                </h2>
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
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
                  Schedule an appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex flex-col gap-12 px-2 sm:px-8">
        <Section key="about-me" title="About me">
          <div className="w-full rounded-md bg-theme-white-1 p-5 text-xl font-medium shadow-light">
            <p className="dark:text-black">
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
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-12">
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
          <Accordion
            items={[
              {
                key: 'software',
                title: 'Software',
                content: 'Test',
              },
              {
                key: 'database',
                title: 'Database',
                content: 'Test',
              },
              {
                key: 'languages',
                title: 'Languages',
                content: 'Test',
              },
              {
                key: 'devops',
                title: 'DevOps & Plaform Engineering',
                content: 'Test',
              },
            ]}
          />
        </Section>

        <Section>
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-center text-6xl font-bold">Let us keep in touch</h2>
              <p className="text-xl">
                fdLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae odio magna. Pellentesque
                congue ex nec sapien facilisis, a tempor sapien imperdiet.fd
              </p>
            </div>

            <Button variant="secondary">Schedule an appointment</Button>
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  );
}
