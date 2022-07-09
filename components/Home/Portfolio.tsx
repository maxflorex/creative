import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRandom } from '../../hooks/useRandom';

const Portfolio = ({ categories }: any) => {
    const D3: any = useRandom('3D', categories);
    const UX: any = useRandom('UX / UI', categories);
    const Illustration: any = useRandom('Illustration', categories);
    const Logo: any = useRandom('Logo', categories);
    const Branding: any = useRandom('Branding', categories);
    const GD: any = useRandom('Graphic Design', categories);

    return (
        <section className="grid grid-cols-3 gap-8">
            <div className="col-span-2 relative w-full h-96">
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
                            <div className="absolute left-8 bottom-8 flex flex-col gap-2">
                                <Link href={`/${D3[0].slug}`}>
                                    <a className="btn">{D3[0].portfolioname}</a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="relative w-full h-96">
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
                            <div className="absolute left-8 bottom-8 flex flex-col gap-4">
                                <Link href={`/${Branding[0].slug}`}>
                                    <a className="btn">
                                        {Branding[0].portfolioname}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="col-span-2 relative w-full h-96">
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
                            <div className="absolute left-8 bottom-8 flex flex-col gap-2">
                                <Link href={`/${Illustration[0].slug}`}>
                                    <a className="btn">
                                        {Illustration[0].portfolioname}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="relative w-full h-full row-span-2">
                {Logo[0] && (
                    <>
                        <Image
                            src={`${Logo[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-4xl text-white absolute h-full w-full flex items-center justify-center">
                            <div className="absolute bottom-8 flex flex-col gap-4">
                                <Link href={`/${Logo[0].slug}`}>
                                    <a className="btn  -mb-32">
                                        {Logo[0].portfolioname}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="relative w-full h-96">
                {GD[0] && (
                    <>
                        <Image
                            src={`${GD[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-4xl text-white absolute h-full w-full flex items-center justify-center ">
                            <div className="absolute left-8 bottom-8 flex flex-col gap-4">
                                <Link href={`/${GD[0].slug}`}>
                                    <a className="btn">{GD[0].portfolioname}</a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="relative w-full h-96">
                {UX[0] && (
                    <>
                        <Image
                            src={`${UX[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-4xl text-white absolute h-full w-full flex items-center justify-center bg-black/40">
                            <div className="absolute left-8 bottom-8 flex flex-col gap-4">
                                <Link href={`/${UX[0].slug}`}>
                                    <a className="btn">{UX[0].portfolioname}</a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
