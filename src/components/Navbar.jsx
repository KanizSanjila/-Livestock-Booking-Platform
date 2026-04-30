import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/cow.jpg'

const Navbar = () => {
    const link = <>
        <li className='text-xl'><Link href='/'>Home</Link></li>
        <li className='text-xl'><Link href='/'>All-Animals</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <Image src={logo} alt='logo' width={50} height={50} className='rounded-full w-15 h-15 object-cove'></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {link}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <button className='btn bg-[#631a37] text-white font-bold'><Link href='/login'>Login</Link></button>
    <button className='btn bg-[#631a37] text-white font-bold'><Link href='/register'>Register</Link></button>
  </div>
</div>
    );
};

export default Navbar;