import Image from 'next/image';
import React, { useState } from 'react';
import ExpandImageModal from '../Modals/ExpandImageModal';

type Props = {
    data: any;
};

const Body = ({ data }: Props) => {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState('');

    const handleClick = (pic: any) => {
        setClicked(pic);
        setShow(true);
        // SHOW SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = 'auto';
    };

    return (
        <div className="w-full min-h-96 flex flex-col gap-8">
            {data &&
                data.procat.map((project: any, i: number) => {
                    return (
                        <div
                            key={i}
                            className="h-full grid lg:grid-cols-2 gap-8"
                        >
                            {/* <img
                                src={project.banner.url}
                                className="w-full h-auto"
                              /> */}
                            {project.pictures.map((pic: any, i: number) => (
                                <div
                                    key={i}
                                    className="h-full flex flex-col gap-8"
                                    >
                                    <img
                                        src={pic.url}
                                        className="w-full opacity-70 hover:opacity-100 cursor-pointer"
                                        onClick={(e) => handleClick(pic)}
                                    />
                                </div>
                            ))}
                        </div>
                    );
                })}
            {show && <ExpandImageModal data={clicked} setShow={setShow} />}
        </div>
    );
};

export default Body;
