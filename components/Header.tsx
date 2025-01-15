import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <Link href='/' className='flex items-center space-x-2'>
        <Image src='/icons/logo.svg' alt='logo' width={30} height={30} />
      </Link>
      <ul className='flex space-x-4'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/'>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
