export const useFilter = (arr: any, title: string) => {
    return arr.filter((item: any) => {
        return item.portfolioname === title;
    });
};
