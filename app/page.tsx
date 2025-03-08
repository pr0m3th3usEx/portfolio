import EmailContact from './components/contact/EmailContact';
import SocialNetworks from './components/contact/SocialNetworks';

export default function Home() {
  return (
    <div className="relative min-h-screen min-w-screen px-8">
      <SocialNetworks className="absolute bottom-0" />
      <EmailContact className="absolute right-8 bottom-0" />
    </div>
  );
}
