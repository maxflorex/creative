import Image from 'next/image';
import React, { useRef } from 'react';
import logo from '../../assets/mx-logo.svg';
import xvw from '../../assets/mx-icon-line.svg';

type Props = {};

const Hero = (props: Props) => {
    const Top = useRef(null);

    return (
        <div
            className="bg-navy -mx-4"
            ref={Top}
            style={{
                backgroundImage:
                    'url("https://www.transparenttextures.com/patterns/asfalt-dark.png',
            }}
        >
            <div className="h-[40vh] flex flex-col justify-center items-center relative container mx-auto">
                <Image
                    src={logo}
                    alt="logo"
                    width={200}
                    height={100}
                    objectFit="contain"
                />
                <div className="w-24 absolute flex justify-center -bottom-2">
                    <Image src={xvw} alt="logo" className="w-16" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
