import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { graphcms } from '../components/GraphCMS/GraphCMS';
import { CATEGORIES } from '../components/GraphCMS/Queries';
import { useFilter } from './useFilter';

export const useRandom = (cat: any, categories: any) => {
    const [random, setRandom] = useState([]);

    const data = useFilter(categories, cat);

    useEffect(() => {
        let arr = data?.sort(() => Math.random() - 0.5);
        data?.length >= 0 ? setRandom(arr) : setRandom(data);
    }, [categories]);

    return random;
};
