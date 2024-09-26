import Image from 'next/image';
import Button from './components/widgets/Button';

export default function Home() {
  return (
    <div className="min-h-screen w-full p-0 pb-20 font-content sm:p-4">
      <div className="min-h-124 shadow-base w-full bg-theme-blue-1 sm:rounded-2xl sm:p-16">
        <div className="flex flex-col gap-6">
          <nav>
            <ul>
              <li>About me</li>
              <li>Projects</li>
              <li>Career</li>
              <li>Skills</li>
              <li>Contact me</li>
            </ul>
          </nav>

          <div className="flex justify-center gap-16">
            <div>
              <Image src="assets/id_card.svg" alt="Thomas Michel Dev ID Card" width={350} height={500} />
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-title font-semibold leading-tight text-theme-white-1">
                  I build software for <span className="text-theme-black-1">developers,</span>
                </h2>
                <h2 className="text-title font-semibold leading-tight text-theme-white-1">
                  I create products for <span className="text-theme-black-1">customers</span>
                </h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
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
                  Take a tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
