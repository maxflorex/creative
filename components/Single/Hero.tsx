import Image from 'next/image';
import xvw from '../../assets/mx-icon-line.svg';
import icon from '../../assets/mx-logo.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
    data: any;
};

const Hero = ({ data }: Props) => {
    const banner = data.procat[0].banner.url;

    return (
        <div
            className="bg-navy -mx-4"
            style={{
                backgroundImage:
                    'url("https://www.transparenttextures.com/patterns/asfalt-dark.png',
            }}
        >
            <div className="relative">
                <div className="h-[40vh] flex flex-col justify-center items-center relative container mx-auto gap-4 z-20">
                    <p className="text-2xl text-fire">- Projects -</p>
                    <h1 className="text-white text-6xl px-8 text-center">
                        {data.portfolioname}
                    </h1>
                    {/* <Image src={logo} alt="logo" /> */}
                    <div className="w-24 absolute flex flex-col justify-center -bottom-2 items-center">
                        <Link href="/">
                            <a className="pb-8 hover:underline hover:text-cream text-fire underline-offset-8 text-sm">
                                Home
                            </a>
                        </Link>
                        <Image src={xvw} alt="logo" className="w-16" />
                    </div>
                </div>
                <div className="absolute top-12 flex w-full justify-center items-center cursor-pointer z-20">
                    <motion.div
                        className="w-12"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                    >
                        <Link href={'/'}>
                            <Image src={icon} alt="logo" />
                        </Link>
                    </motion.div>
                </div>
                <img
                    src={banner}
                    alt=""
                    className="absolute top-0 w-full h-full opacity-30 object-cover grayscale z-10 mix-blend-overlay blur"
                />
            </div>
        </div>
    );
};

export default Hero;
