import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRandom } from '../../hooks/useRandom';

const OtherArts = ({ categories }: any) => {
    const Photo: any = useRandom('Photography', categories);
    const Printing: any = useRandom('Printing', categories);

    return (
        <section className="grid grid-cols-3 gap-8 mb-32">
            <div className="relative w-full h-96 col-span-3 md:col-span-1">
                {Printing[0] && (
                    <>
                        <Image
                            src={`${Printing[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-4xl text-white absolute h-full w-full flex items-center justify-center ">
                            <div className="absolute md:left-8 md:bottom-8 flex flex-col gap-4 left-4 bottom-4">
                                <Link href={`/${Printing[0].slug}`}>
                                    <a className="btn">
                                        {Printing[0].portfolioname}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="md:col-span-2 relative w-full h-96 col-span-3">
                {Photo[0] && (
                    <>
                        <Image
                            src={`${Photo[0].procat[0].banner.url}`}
                            alt="Portfolio"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="text-8xl text-white absolute h-full w-full flex items-center justify-center ">
                            <div className="absolute md:left-8 md:bottom-8 flex flex-col gap-2 left-4 bottom-4">
                                <Link href={`/${Photo[0].slug}`}>
                                    <a className="btn">
                                        {Photo[0].portfolioname}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default OtherArts;
