import Image from 'next/image';

export default function Intro() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div>
          <h1 className="text-base">Thomas Michel</h1>
          <h2 className="text-cool-gray text-sm font-light">
            Software Engineer Freelance | ex-Founder @ Glowme
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

      <p className="text-xl">
        Hello 👋🏼 - Software Engineer Freelance, passionate about building SaaS
        products and optimizing UI/UX. Former co-founder of Glowme, open-source
        contributor, and Clean Code advocate. I help startups and businesses
        with web & backend projects, ensuring scalability and performance.
        Always looking for new challenges! 🚀
      </p>
    </>
  );
}
