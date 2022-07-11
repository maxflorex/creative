import { GetStaticProps } from 'next';
import Head from 'next/head';
import Error from '../components/Error';
import { graphcms } from '../components/GraphCMS/GraphCMS';
import { CATEGORIES, SINGLE } from '../components/GraphCMS/Queries';
import Body from '../components/Single/Body';
import Hero from '../components/Single/Hero';
import Sidebar from '../components/Single/Sidebar';

export const getStaticPaths = async () => {
    const { portfolios } = await graphcms.request(CATEGORIES);
    const paths = portfolios.map((item: any) => {
        return {
            params: { slug: item.slug.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
    const slug = context.params.slug

    const variables = {
        slug,
    };

    const { portfolio } = await graphcms.request(SINGLE, variables);

    return {
        props: {
            portfolio,
        },
    };
};

const projectSingle = ({ portfolio }: any) => {
    if (!portfolio) {
        return <Error />;
    }

    return (
        <>
            <Head>
                <title>{portfolio.portfolioname} - MF</title>
                <meta name="Graphic Designer" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full px-4">
                <Hero data={portfolio} />
                <div className="container mx-auto flex justify-center py-24 lg:gap-32 md:gap-24 md:flex-row gap-16 flex-col">
                    <Sidebar data={portfolio} />
                    <Body data={portfolio} />
                </div>
            </div>
        </>
    );
};

export default projectSingle;
