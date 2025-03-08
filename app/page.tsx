import EmailContact from '../components/contact/email-contact';
import SocialNetworks from '../components/contact/social-networks';
import Header from '../components/header';
import Footer from '@/components/footer';
import BeatBehindTheCode from '@/components/sections/beat-behind-the-code';
import Roles from '@/components/sections/roles';
import ClientFeedbacks from '@/components/sections/feedback';
import Expertise from '@/components/sections/expertise';
import Intro from '@/components/sections/intro';
import Projects from '@/components/sections/projects';

export default function Home() {
  return (
    <div className="relative flex min-h-screen max-w-screen flex-col">
      <Header />

      <div className="fixed bottom-0 z-0 flex w-full items-end justify-between px-8 pt-8">
        <SocialNetworks />
        <EmailContact />
      </div>

      <main className="mx-auto mt-16 flex w-[640px] flex-col gap-12 py-20">
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
