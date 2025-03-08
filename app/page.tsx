import EmailContact from '../components/contact/email-contact';
import SocialNetworks from '../components/contact/social-networks';
import Header from '../components/header';

export default function Home() {
  return (
    <div className="relative flex min-h-screen max-w-screen flex-col">
      <Header />

      <main className="mx-auto mt-16 flex w-[625px] flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800">Hello, I'm Alex</h1>

        <p className="mt-4 text-lg text-gray-600">
          I'm a software engineer with a passion for building web applications.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          I specialize in front-end development and have experience with
          technologies like React, TypeScript, and Tailwind CSS.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          I'm currently working on a project called{' '}
        </p>
      </main>

      <div className="fixed bottom-0 flex w-full items-end justify-between px-8 pt-8">
        <SocialNetworks />
        <EmailContact />
      </div>
    </div>
  );
}
