import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav className="hidden sm:block sm:w-104">
        <ul className="flex justify-center rounded-full border-2 border-white">
          <Link className="nav-item" href="#about-me">
            About me
          </Link>
          <Link className="nav-item" href="#projects">
            Projects
          </Link>
          <Link className="nav-item" href="#career">
            Career
          </Link>
          <Link className="nav-item" href="#skills">
            Skills
          </Link>
          <Link className="nav-item" href="#contact">
            Contact
          </Link>
        </ul>
      </nav>
      <nav className="flex w-full justify-center pt-12 sm:hidden">
        <Image src="/assets/picture.svg" alt="Thomas's picture" width={124} height={124} />
      </nav>
    </>
  );
};

export default Navbar;
