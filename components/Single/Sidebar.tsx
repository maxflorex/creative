import React from 'react';

type Props = {
    data: any;
};

const Sidebar = ({ data }: Props) => {
    return <div className='w-64 max-w-[40rem] sticky top-8'>
        <p>Projects</p>
        <h2 className='text-xl font-bold'>{data.portfolioname}</h2>
        <p className='mt-8 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, asperiores quidem, animi consequuntur perspiciatis recusandae odio veritatis eaque quia ullam itaque, illo hic iure?</p>
    </div>;
};

export default Sidebar;
