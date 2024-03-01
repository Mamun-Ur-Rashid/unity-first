
import Link from 'next/link'
import Image from 'next/image'
import logo from '@../public/assert/unity.logo.png'
import Menu from './Menu';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { Logout } from '@mui/icons-material';

const SideBar = () => {
    
        return (
            <div className='h-screen text-light-1 left-0 top-0 sticky overflow-auto px-10 py-6  gap-6 max-md:hidden custom-scrollbar'>
                <div className='flex justify-center items-center gap-2 '>
                    <div>
                        <Link href='/'>
                            <Image src={logo} alt='logo' width={32} height={32}></Image>
                        </Link>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-base-bold'>UnityFirst</h1>
                    </div>
                </div>
    
                <div className=' flex flex-col my-4'>
                    <div className='flex justify-center items-center'>
                        <Link href='/'>
                            <Image src={logo} alt='profile photo' width={50} height={50} className='rounded-full text-center items-center' />
                        </Link>
                    </div>
                    <div className='text-center'>
                        <p className='text-small-bolt text-center p-2'>Angel Mim</p>
                    </div>
                </div>
    
                <div className='flex  justify-between gap-10 p-2'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-base-bold'>1</p>
                        <p className='text-tiny-medium ml-2'>Posts</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-2'>
                        <p className='text-base-bold'>1</p>
                        <p className='text-tiny-medium ml-2'>Followers</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-2'>
                        <p className='text-base-bold'>1</p>
                        <p className='text-tiny-medium'>Following</p>
                    </div>
    
                </div>

                <hr />

                <Menu></Menu>

                <hr />
                <div className='flex gap4 items-center'>
                    <UserButton />
                    <p className='text-body-bold'>Manage Account</p>
                </div>

                <SignedIn>
                    
                        <div className='flex cursor-pointer text-center'>
                        <Logout sx={{color: "white", fontSize: "32px"}} />
                        <p className='text-body-bold'>Log Out</p>
                        </div>
                </SignedIn>
            </div>
        );
    };
    
    export default SideBar;