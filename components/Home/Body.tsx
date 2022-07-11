import OtherArts from './OtherArts';
import Portfolio from './Portfolio';
import pic from '../../assets/mx-icon-line.svg';
import Image from 'next/image';
import Link from 'next/link';
import me from '../../assets/portrait1.jpg';

type Props = {
    categories: any;
};

const Body = ({ categories }: Props) => {
    return (
        <div className="container mx-auto relative">
            <Portfolio categories={categories} />
            <div
                className="h-96 flex flex-col items-center justify-center gap-2 my-32 bg-repeat bg-white bg-opacity-50"
                style={{
                    backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/asfalt-dark.png',
                }}
            >
                <Image
                    src={me}
                    alt="Max"
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="rounded-full opacity-80 hover:opacity-100"
                />
                <h1 className="text-3xl font-bold">I'm Max Flores</h1>
                <p className="">A creative professional since 2011</p>
                <Link href="/about" className="cursor-pointer">
                    <a className="btn3 mt-4">About me</a>
                </Link>
                <div className="absolute w-24 -left-12 bottom-16 rotate-90">
                    <Image src={pic} alt="logo" />
                </div>
            </div>
            <OtherArts categories={categories} />
        </div>
    );
};

export default Body;
