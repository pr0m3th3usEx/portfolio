import Image from 'next/image';
import Button from './components/widgets/Button';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import CareerCard from './components/CareerCard';
import Footer from './components/Footer';
import Accordion from './components/widgets/accordion';
import Navbar from './components/Navbar';
import Link from 'next/link';
import envConstants from '@/utils/config';

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
                  <Link href={envConstants.RESUME_DOWNLOAD_URL}>Download resume</Link>
                </Button>
                <Button
                  variant="secondary"
                  rightIcon={<Image src="assets/right_arrow.svg" alt="Download icon" width={14} height={19} />}
                >
                  <Link href={envConstants.CALENDAR_URL}>Schedule an appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex flex-col gap-12 px-2 sm:px-8">
        <Section key="about-me" title="About me">
          <div className="w-full rounded-md bg-theme-white-1 p-5 text-xl font-medium shadow-light dark:bg-theme-blue-6 dark:shadow-base">
            <p className="dark:text-theme-white-1">
              Hi, I’m Thomas, an <strong>Entrepreneur, Open-Source Contributor, and Software Engineer</strong> with a focus on <strong>Full-Stack Development</strong>, particularly <strong>back-end engineering</strong>. I specialize in crafting innovative <strong>SaaS products</strong>, taking ideas from <strong>0 to 1</strong> with a clear focus on <strong>user-centered applications</strong> that truly make an impact.
            </p><br />
            <p className="dark:text-theme-white-1">
              With a blend of <strong>versatility, problem-solving skills</strong>, and an <strong>international mindset</strong>, I bring a fresh perspective to every project. My quick adaptability ensures I can hit the ground running from day one, seamlessly integrating into your team and tackling complex challenges.
            </p><br />
            <p className="dark:text-theme-white-1">
              If you're looking for someone to <strong>help develop your product from the ground up</strong>, deliver technical excellence, and create meaningful, user-driven solutions, let’s connect! Together, we can transform your vision into a thriving reality.
            </p>
          </div>
        </Section>

        <Section key="projects" title="Lastest projects I worked on">
          <div className="flex w-full flex-col gap-6">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-12">
              <ProjectCard
                projectName="honojs/middleware"
                iconSrc="https://avatars.githubusercontent.com/u/98495527?v=4"
                caption="monorepo for Hono third-party middleware/helpers/wrappers: Maintaining @hono/class-validator middleware"
                externalLink="https://github.com/honojs/middleware"
              />
              <ProjectCard
                projectName="Koic"
                iconSrc="assets/potion.svg"
                caption="Connected scarecrow for smart predator repulsion."
                externalLink="https://github.com/PoCInnovation/Koic"
              />
              <ProjectCard
                projectName="Challenges"
                iconSrc="assets/potion.svg"
                caption="Job technical tests solutions"
                externalLink="https://github.com/pr0m3th3usEx/challenges"
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
              end={new Date(2024, 9)}
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
                title: 'Programming languages & Frameworks',
                content: (
                  <p className="text-lg">
                    <span className='font-bold'>Typescript</span>,{' '}
                    <span className='font-bold'>Rust</span>,{' '}
                    <span className='font-bold'>Python</span>,{' '}
                    <span className='font-bold'>Javascript</span>,{' '}
                    <span className='font-bold'>React</span>,{' '}
                    <span className='font-bold'>Next.js</span>,{' '}
                    <span className='font-bold'>Vue</span>,{' '}
                    <span className='font-bold'>ChakraUI</span>,{' '}
                    <span className='font-bold'>Tailwind CSS</span>,{' '}
                    <span className='font-bold'>SWR</span>,{' '}
                    <span className='font-bold'>Express</span>,{' '}
                    <span className='font-bold'>NestJS</span>,{' '}
                    <span className='font-bold'>GraphQL</span>,{' '}
                    <span className='font-bold'>gRPC</span>,{' '}
                    <span className='font-bold'>GraphQL</span>,{' '}
                    <span className='font-bold'>C</span>,{' '}
                    <span className='font-bold'>Kotlin</span>,{' '}
                    <span className='font-bold'>Dart</span>,{' '}
                    <span className='font-bold'>Flutter</span>
                  </p>
                ),
              },
              {
                key: 'database',
                title: 'Database',
                content: (
                  <p className="text-lg">
                    <span className='font-bold'>PostgresSQL</span>,{' '}
                    <span className='font-bold'>MongoDB</span>,{' '}
                    <span className='font-bold'>DynamoDB</span>,{' '}
                    <span className='font-bold'>Prisma</span>,{' '}
                    <span className='font-bold'>Mongoose</span>
                  </p>
                ),
              },
              {
                key: 'languages',
                title: 'Languages',
                content: (
                  <p className="text-lg">
                    <span className='font-bold'>French</span> (Native),{' '}
                    <span className='font-bold'>English</span> (Fluent),{' '}
                    <span className='font-bold'>Spanish</span> (Conversational),{' '}
                    <span className='font-bold'>Korean</span> (Beginner)
                  </p>
                ),
              },
              {
                key: 'devops',
                title: 'DevOps & Plaform Engineering',
                content: (
                  <p className="text-lg">
                    <span className='font-bold'>Docker</span>,{' '}
                    <span className='font-bold'>Heroku</span>,{' '}
                    <span className='font-bold'>Vercel</span>,{' '}
                    <span className='font-bold'>Github Actions</span>,{' '}
                    <span className='font-bold'>Gitlab CI</span>,{' '}
                    <span className='font-bold'>GCP</span>,{' '}
                    <span className='font-bold'>AWS</span>
                  </p>
                ),
              },
              {
                key: 'soft',
                title: 'Soft skills',
                content: (
                  <p className="text-lg">
                    <span className='font-bold'>Autonomy</span>,{' '}
                    <span className='font-bold'>Versatility</span>,{' '}
                    <span className='font-bold'>Quick learning</span>,{' '}
                    <span className='font-bold'>Good listening</span>
                  </p>
                ),
              },
            ]}
          />
        </Section>

        <Section>
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-center text-6xl font-bold">Let us keep in touch</h2>
              <p className="text-xl">
                Have a project in mind or just want to say hi? Let’s collaborate and create something extraordinary together.
              </p>
            </div>

            <Button variant="secondary"><Link href={envConstants.CALENDAR_URL}>Schedule an appointment</Link></Button>
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  );
}
