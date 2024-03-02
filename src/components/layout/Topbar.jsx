'use client'
import { Add, Search } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Topbar = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    return (
        <div className='flex justify-between items-center mt-6'>
            <div className='relative'>
                <input type='text' className='search-bar px-2' placeholder='Search posts, people, ...' value={search} onChange={(e) => setSearch(e.target.value)}>
                
                </input>
                <Search className='search-icon' onClick={() => {}} />
            </div>
            <div>
                <button className='create-post-btn' onClick={() => router.push('/create-post')}>
                    <Add /> <p>Create A Post</p>
                </button>
            </div>
        </div>
    );
};

export default Topbar;