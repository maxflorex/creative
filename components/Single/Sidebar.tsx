import Link from 'next/link';
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
                <p className="my-8 text-justify leading-loose">
                    {data.description.text}
                </p>
                <div className="flex gap-4">
                    <Link href={'/'}>
                        <button className="btn2">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
