import Link from 'next/link';
import React from 'react';

type Props = {};

const Error = (props: Props) => {
    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center h-96 items-center gap-4">
                    <h1 className="text-6xl">Oops!</h1>
                    <div className="grid gap-4">
                        <p>This page does not exist</p>
                        <Link href={'/'}>
                            <a className='btn2 text-center'>Home</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
