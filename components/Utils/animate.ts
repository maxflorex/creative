export const variants: any = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

export const item: any = {
    hidden: {
        opacity: 0,
        x: -50,
        y: 50,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0
    },
    transition: {
        duration: 2,
    },
};

export const fade: any = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0,
    },
    transition: {
        duration: 2,
    },
};