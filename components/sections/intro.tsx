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
        Ciao 👋🏼 — I’m a software developer and designer based in Belgrade,
        passionate about delivering high-quality digital products. My focus is
        on crafting intuitive, user-centered software that empowers users and
        drives meaningful change.
      </p>
    </>
  );
}
