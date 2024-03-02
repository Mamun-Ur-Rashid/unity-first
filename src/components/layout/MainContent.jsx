import React from 'react';
import Topbar from './Topbar';

const MainContent = ({children}) => {
    return (
        <section className='flex flex-col flex-1 max-w-3xl md:px-10 lg:px-4 xl:px-20'>
            <Topbar></Topbar>
        </section>
    );
};

export default MainContent;