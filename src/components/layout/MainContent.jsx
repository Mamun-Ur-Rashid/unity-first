'use client'
import React from 'react';
import Topbar from './Topbar';
import { usePathname } from 'next/navigation';
import { pageTitles } from '@contents';

const MainContent = ({children}) => {
    const currentPath = usePathname();

    const regex = /^\/([^\/]+)/;
    const firstPath = currentPath.match(regex) ? currentPath.match(regex)[0] : currentPath;

    const title = pageTitles.find((page) => page.url === firstPath)?.title || "";
    return (
        <section className='flex flex-col flex-1 max-w-3xl md:px-10 lg:px-4 xl:px-20 px-2'>
            <Topbar></Topbar>
            <div className='mt-6 mb-20 text-light-1'>
                <h1 className='mb-5 max-sm:text-heading3-bold text-heading1-bold'>{title}</h1>
                <div className='h-screen overflow-y-scroll custom-scrollbar'>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default MainContent;