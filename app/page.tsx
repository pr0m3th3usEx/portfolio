import EmailContact from '../components/contact/email-contact';
import SocialNetworks from '../components/contact/social-networks';
import Header from '../components/header';
import Footer from '@/components/footer';
import Intro from '@/components/sections/intro';
import Projects from '@/components/sections/projects';
import Expertise from '@/components/sections/expertise';
import Roles from '@/components/sections/roles';
import ClientFeedbacks from '@/components/sections/feedback';
import BeatBehindTheCode from '@/components/sections/beat-behind-the-code';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full max-w-screen flex-col">
      <Header />

      <div className="invisible fixed bottom-0 z-0 flex w-full items-end justify-between px-8 pt-8 md:visible">
        <SocialNetworks />
        <EmailContact />
      </div>

      <main className="z-0 mx-auto mt-16 flex w-full flex-col gap-12 px-4 py-20 md:w-[640px] md:px-0">
        <Intro />
        <Projects />
        <Expertise />
        <Roles />
        <ClientFeedbacks />
        <BeatBehindTheCode />
        <Footer />
      </main>
    </div>
  );
}
