import React from 'react';

type Props = {
    data: any;
};

const Sidebar = ({ data }: Props) => {

    console.log(data);
    
    return <div className='md:w-[32rem] sticky top-8 w-full'>
        <p>Projects</p>
        <h2 className='text-xl font-bold'>{data.portfolioname}</h2>
        <p className='mt-8 text-justify leading-loose'>{data.description.text}</p>
    </div>;
};

export default Sidebar;
