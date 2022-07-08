import Image from 'next/image';
import { useRandom } from '../../hooks/useRandom';
import pic from '../../public/_MAX7756.jpg';

type Props = {
    categories: any;
};

const Body = ({ categories }: Props) => {
    const D3 = useRandom('3D', categories);
    const Logo: any = useRandom('Logo', categories);

    return (
        <div>
            <div className="grid grid-cols-3 container mx-auto">
                <div className="col-span-2">
                    {/* {Logo && (
                        <Image
                            src={Logo[0]?.procat[0].banner.url}
                            alt="Fuera"
                            width="100"
                            height="100"
                        />
                    )} */}
                </div>

                <div className="h-full">
                    <Image src={pic} alt="Fuera" />
                </div>
            </div>
        </div>
    );
};

export default Body;
