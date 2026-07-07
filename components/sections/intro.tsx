import Image from 'next/image';

export default function Intro() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div>
          <h1 className="text-base">Thomas Michel</h1>
          <h2 className="text-cool-gray text-sm font-light">
            Software Engineer Freelance | ex-Startup Founder
          </h2>
        </div>

        <Image
          src="/assets/profile.webp"
          alt="Thomas Michel"
          width={72}
          height={72}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p>
          👋 I&apos;m Thomas, a freelance{' '}
          <strong>Full-Stack Software Engineer</strong> specializing in building
          🚀 modern, scalable web and 📱 mobile applications for startups and
          growing companies.
        </p>

        <p>
          🎓 I graduated from EPITECH Institute of Technology in 2024, and I've
          been working as a freelance engineer for the past four years,
          partnering with startups to 💡 design, 🛠️ build, and 📈 scale SaaS
          products from idea to production.
        </p>

        <p>
          🤝 Whether you need to 🚀 launch an MVP, ⚡ accelerate an existing
          SaaS platform, 🏗️ modernize your architecture, or 💪 strengthen your
          engineering team, I enjoy collaborating closely with founders and
          product teams to deliver ✅ robust, production-ready solutions.
        </p>
      </div>
    </>
  );
}
