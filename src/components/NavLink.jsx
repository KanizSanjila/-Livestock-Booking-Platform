"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href,children}) => {
    const pathname = usePathname();
    // console.log("pathname",pathname)
const isActive = href === pathname;
    return <Link href={href} className={`${isActive ? 'bg-[#6E1A37] p-2 text-white':""}`}>{children}</Link>
};

export default NavLink;