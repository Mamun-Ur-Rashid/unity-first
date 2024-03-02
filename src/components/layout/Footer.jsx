'use client'
import { sidebarLinks } from '@contents';
import { usePathname } from 'next/navigation';
import Link from 'next/link'

const Footer = () => {
    const pathname = usePathname();
    return (
        <div className='flex bottom-0 z-20 text-light-1  bg-dark-1 px-3 py-3 justify-between items-center md:hidden'>
            {
                sidebarLinks.map((link) => {
                    const isActive = pathname === link.route;
                    return (
                        <Link key={link.label} href={link.route} className={`flex gap-2 items-center rounded-lg py-2 px-2 ${ isActive && "bg-purple-1"} `}>
                            {link.icon} <p className='text-subtle-medium max-sm:hidden'>{link.label}</p>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Footer;