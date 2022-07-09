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
            className="fixed w-full h-full overflow-hidden bg-white/90 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
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
            <span className="fixed top-8 right-8 px-4 py-2 bg-off-1 rounded-full font-semibold hover:bg-fire cursor-pointer dismiss duration-700 transition-all">
                Close
            </span>
        </div>
    );
};

export default ExpandImageModal;
