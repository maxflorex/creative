import Image from 'next/image';
import React, { useRef } from 'react';
import logo from '../../assets/mx-logo.svg';
import xvw from '../../assets/mx-icon-line.svg';
import { motion } from 'framer-motion';

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
            <motion.div
                className="h-[40vh] flex flex-col justify-center items-center relative container mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.2,
                }}
            >
                <Image
                    src={logo}
                    alt="logo"
                    width={200}
                    height={100}
                    objectFit="contain"
                />
                <motion.div
                    className="w-24 absolute flex justify-center -bottom-2"
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4
                    }}
                >
                    <Image src={xvw} alt="logo" className="w-16" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
