import React from 'react';

type Props = {
    data: any;
};

const Sidebar = ({ data }: Props) => {
    return (
        <div className="relative">
            <div className="md:w-[32rem] w-full sticky top-16">
                <p className="">Projects</p>
                <h2 className="text-xl font-bold">{data.portfolioname}</h2>
                <p className="mt-8 text-justify leading-loose">
                    {data.description.text}
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
