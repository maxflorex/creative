import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import ExpandImageModal from '../Modals/ExpandImageModal';
import { item, variants } from '../Utils/animate';

type Props = {
    data: any;
};

const Body = ({ data }: Props) => {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState('');
    const [showS, setShowS] = useState('');

    const handleClick = (pic: any) => {
        setClicked(pic);
        setShow(true);
        // SHOW SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = 'auto';
    };

    return (
        <motion.div
            className="w-full min-h-96 flex flex-col gap-8"
            variants={variants}
            initial="hidden"
            animate="show"
        >
            {data &&
                data.procat.map((project: any, i: number) => {
                    return (
                        <div
                            key={i}
                            className="h-full grid lg:grid-cols-2 gap-8"
                        >
                            {project.pictures.map((pic: any, i: any) => (
                                <motion.div
                                    key={i}
                                    className="h-96 w-full flex flex-col gap-8 overflow-hidden"
                                    onMouseEnter={() => setShowS(i)}
                                    onMouseLeave={() => setShowS('')}
                                    variants={item}
                                >
                                    <Image
                                        src={pic.url}
                                        className="w-full hover:scale-105 cursor-pointer"
                                        onClick={() => handleClick(pic)}
                                        layout="fill"
                                        objectFit="cover"
                                        blurDataURL={`/_next/image?url=${pic.url}&w=16&q=1`}
                                        placeholder='blur'
                                    />
                                    <div className="absolute top-4 right-4 flex gap-4">
                                        <AnimatePresence>
                                            {showS === i &&
                                                project.softwareused.map(
                                                    (s: any, i: number) => {
                                                        return (
                                                            <motion.img
                                                                key={i}
                                                                src={s.logo.url}
                                                                className="w-12 h-12 object-contain"
                                                                initial={{
                                                                    y: 24,
                                                                    opacity: 0,
                                                                }}
                                                                animate={{
                                                                    y: 0,
                                                                    opacity: 1,
                                                                }}
                                                                transition={{
                                                                    duration: 0.3,
                                                                    delay:
                                                                        i * 0.2,
                                                                }}
                                                            />
                                                        );
                                                    }
                                                )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    );
                })}
            {show && <ExpandImageModal data={clicked} setShow={setShow} />}
        </motion.div>
    );
};

export default Body;
