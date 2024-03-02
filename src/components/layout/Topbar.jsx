'use client'
import { Add, Logout, Search } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import logo from '@../public/assert/unity.logo.png'

const Topbar = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    return (
        <div className='flex justify-between items-center mt-6'>
            <div className='relative px-2'>
                <input type='text' className='search-bar px-3' placeholder='Search posts, people, ...' value={search} onChange={(e) => setSearch(e.target.value)}>

                </input>
                <Search className='search-icon ' onClick={() => { }} />
            </div>
            <div>
                <button className='create-post-btn' onClick={() => router.push('/create-post')}>
                    <Add /> <p>Create A Post</p>
                </button>
                <div className='flex gap-2 justify-center items-center'>
                    {/* <SignedIn> */}

                    <div className='flex cursor-pointer text-center md:hidden'>
                        <Logout sx={{ color: "white", fontSize: "32px" }} />
                        
                    </div>

                    {/* </SignedIn> */}
                    <Link href='/'>
                        <Image src={logo} alt='profile picture ' width={50} height={50} className='rounded-full md:hidden' />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Topbar;