import Image from 'next/image';
import xvw from '../../assets/mx-icon-line.svg';
import Link from 'next/link';

type Props = {
    data: any;
};

const Hero = ({ data }: Props) => {
    return (
        <div
            className="bg-navy sticky top-0 -mx-4"
            style={{
                backgroundImage:
                    'url("https://www.transparenttextures.com/patterns/asfalt-dark.png',
            }}
        >
            <div className="h-[40vh] flex flex-col justify-center items-center relative container mx-auto gap-4">
                <p className="text-2xl text-fire">- Projects -</p>
                <h1 className="text-white text-6xl px-8 text-center">{data.portfolioname}</h1>
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
        </div>
    );
};

export default Hero;
