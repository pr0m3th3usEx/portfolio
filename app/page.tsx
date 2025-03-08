import EmailContact from '../components/contact/email-contact';
import SocialNetworks from '../components/contact/social-networks';
import Header from '../components/header';

export default function Home() {
  return (
    <div className="relative min-h-screen min-w-screen px-8 pt-8">
      <Header />

      <SocialNetworks className="absolute bottom-0" />
      <EmailContact className="absolute right-8 bottom-0" />
    </div>
  );
}
