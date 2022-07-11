import Image from 'next/image';
import React from 'react';
import me from '../../assets/MX - AVATAR - M.webp';
import mx from '../../assets/maxAtWork.webp';

type Props = {};

const Body = (props: Props) => {
    return (
        <div
            style={{
                backgroundImage:
                    'url("https://www.transparenttextures.com/patterns/asfalt-dark.png',
            }}
        >
            <div className="h-96 flex flex-col items-center justify-center gap-2 bg-repeat relative bg-opacity-50">
                <Image
                    src={me}
                    alt="Max"
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="rounded-full opacity-80 hover:opacity-100"
                />
                <h1 className="text-3xl font-bold">I&apos;m Max Flores</h1>
                <p className="">A creative professional since 2011</p>
            </div>
            <div className="xl:w-1/3 md:w-2/3 w-full mx-auto relative">
                <p className="leading-loose">
                    It all started back in 2008. after graduating high school, I
                    knew I had to study something flexible and related to arts.
                    So, there was me, a fresh student, ready to eat the world!
                </p>
                <p className="pb-16 leading-loose">
                    Due to multiple circumstances, I had to find a job to
                    support my education. So I was fortunate enough to land my
                    first job as a designer/editor of a tv show in my hometown.
                    I did this for less than a year before I was transferred to
                    another company to work as a production artist.
                </p>
                <p className="pb-16 leading-loose">
                    In 2015, I landed a job overseas as a production
                    artist/print shop manager, so I left my country and started
                    a new adventure.
                </p>
                <div className="w-full">
                    <Image src={mx} alt="At Work" objectFit="cover" />
                </div>
                <p className="py-16 leading-loose">
                    During this time, I worked with fine arts, painters, and
                    photographers. Simultaneously to this, I started doing
                    freelance jobs, designing and developing websites. I was
                    designing everything mostly in Figma and developing in
                    WordPress. However, the more work I was doing the faster I
                    realized that I needed to start coding myself, so that&apos;s
                    when a new journey started.
                </p>
                <p className="pb-16 leading-loose">
                    I stopped all freelance activity to focus on this. So, I
                    started studying HTML, CSS & JavaScript. I did this for over
                    a year! I&apos;m grateful to have had the opportunity and the
                    time to taught myself coding, this has become one of my
                    biggest passions and achivements of life.
                </p>
            </div>
        </div>
    );
};

export default Body;
