import React from 'react';

type Props = {
    data: any;
    setShow: any;
};

const ExpandImageModal = ({ data, setShow }: Props) => {
    const handleClick = (e: any) => {
        if (e.target.classList.contains('dismiss')) {
            setShow(false);
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    console.log(data);

    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-black/60 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <img
                        src={data.url}
                        alt="Artwork enlarged"
                        className="max-h-[70vh] rounded-md max-w-[80vw] drop-shadow-sm"
                    />
                </div>
            </div>
            <span className="fixed px-2 py-1 md:top-8 md:right-8 top-4 right-4 bg-white rounded-full hover:bg-fire cursor-pointer dismiss text-xs">
                Close
            </span>
        </div>
    );
};

export default ExpandImageModal;
