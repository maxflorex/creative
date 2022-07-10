import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRandom } from '../../hooks/useRandom';
import { motion } from 'framer-motion';
import { item, variants } from '../Utils/animate';

const Portfolio = ({ categories }: any) => {
    const D3: any = useRandom('3D', categories);
    const UX: any = useRandom('UX / UI', categories);
    const Illustration: any = useRandom('Illustration', categories);
    const Logo: any = useRandom('Logo', categories);
    const Branding: any = useRandom('Branding', categories);
    const GD: any = useRandom('Graphic Design', categories);

    return (
        <motion.section
            className="grid grid-cols-3 gap-8"
            variants={variants}
            initial="hidden"
            animate="show"
        >
            <motion.div
                className="md:col-span-2 relative w-full h-96  col-span-3 "
                variants={item}
            >
                {D3[0] && (
                    <>
                        <Image
                            src={`${D3[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-8xl text-white absolute h-full w-full flex items-center justify-center ">
                            <div className="absolute md:left-8 md:bottom-8 left-4 bottom-4 flex flex-col gap-2">
                                <Link href={`/${D3[0].slug}`}>
                                    <a className="btn">{D3[0].portfolioname}</a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </motion.div>
            <motion.div
                className="col-span-3 md:col-span-1 relative w-full h-96"
                variants={item}
            >
                {Branding[0] && (
                    <>
                        <Image
                            src={`${Branding[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-4xl text-white absolute h-full w-full flex items-center justify-center ">
                            <div className="absolute md:left-8 md:bottom-8 left-4 bottom-4 flex flex-col gap-4">
                                <Link href={`/${Branding[0].slug}`}>
                                    <a className="btn">
                                        {Branding[0].portfolioname}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </motion.div>
            <motion.div
                className="md:col-span-2 relative w-full h-96     col-span-3 "
                variants={item}
            >
                {Illustration[0] && (
                    <>
                        <Image
                            src={`${Illustration[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-4xl text-white absolute h-full w-full flex items-center justify-center ">
                            <div className="absolute md:left-8 md:bottom-8 left-4 bottom-4 flex flex-col gap-2">
                                <Link href={`/${Illustration[0].slug}`}>
                                    <a className="btn">
                                        {Illustration[0].portfolioname}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </motion.div>
            <motion.div
                className="relative w-full h-96 md:h-full md:row-span-2 col-span-3 md:col-span-1"
                variants={item}
            >
                {Logo[0] && (
                    <>
                        <Image
                            src={`${Logo[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-4xl text-white absolute h-full w-full md:flex items-center justify-center hidden">
                            <div className="absolute bottom-8 flex flex-col gap-4">
                                <Link href={`/${Logo[0].slug}`}>
                                    <a className="btn2  -mb-32">
                                        {Logo[0].portfolioname}
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="text-4xl text-white absolute h-full w-full flex items-center justify-center md:hidden">
                            <div className="absolute md:left-8 md:bottom-8 left-4 bottom-4 flex flex-col gap-4">
                                <Link href={`/${GD[0].slug}`}>
                                    <a className="btn">{GD[0].portfolioname}</a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </motion.div>
            <motion.div
                className="col-span-3 relative w-full h-96 md:col-span-1"
                variants={item}
            >
                {GD[0] && (
                    <>
                        <Image
                            src={`${GD[0].procat[2].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-4xl text-white absolute h-full w-full flex items-center justify-center ">
                            <div className="absolute md:left-8 md:bottom-8 left-4 bottom-4 flex flex-col gap-4">
                                <Link href={`/${GD[0].slug}`}>
                                    <a className="btn">{GD[0].portfolioname}</a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </motion.div>
            <motion.div
                className="col-span-3 relative w-full h-96 md:col-span-1"
                variants={item}
            >
                {UX[0] && (
                    <>
                        <Image
                            src={`${UX[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-4xl text-white absolute h-full w-full flex items-center justify-center">
                            <div className="absolute md:left-8 md:bottom-8 left-4 bottom-4 flex flex-col gap-4">
                                <Link href={`/${UX[0].slug}`}>
                                    <a className="btn">{UX[0].portfolioname}</a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </motion.div>
        </motion.section>
    );
};

export default Portfolio;
