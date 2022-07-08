import Image from 'next/image';
import React, { useRef } from 'react';
import logo from '../../assets/mx-logo.svg';
import xvw from '../../assets/mx-icon-line.svg';

type Props = {};

const Hero = (props: Props) => {

    const Top = useRef(null);


    return (
        <div className="bg-navy" ref={Top}>
            <div className="h-[40vh] flex flex-col justify-center items-center relative container mx-auto">
                <Image src={logo} alt="logo" />
                <div className="w-24 absolute flex justify-center -bottom-2">
                    <Image src={xvw} alt="logo" className="w-16" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
