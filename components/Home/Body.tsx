import OtherArts from './OtherArts';
import Portfolio from './Portfolio';
import pic from '../../assets/mx-icon-line.svg';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    categories: any;
};

const Body = ({ categories }: Props) => {
    return (
        <div className="container mx-auto relative">
            <Portfolio categories={categories} />
            <div className="h-96 flex flex-col items-center justify-center gap-2 my-32 bg-repeat bg-[url('/wild-sea.png')] bg-cream relative bg-blend-soft-light">
                <h1 className="text-3xl font-bold">I'm Max Flores</h1>
                <p className="">A creative professional since 2011</p>
                <Link href="/about" className='cursor-pointer'>
                    <a className="btn2 mt-4">Know More</a>
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
