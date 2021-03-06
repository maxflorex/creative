import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { graphcms } from '../components/GraphCMS/GraphCMS';
import { CATEGORIES } from '../components/GraphCMS/Queries';
import Body from '../components/Home/Body';
import Hero from '../components/Home/Hero';

export const getStaticProps: GetStaticProps = async () => {
    const { portfolios } = await graphcms.request(CATEGORIES);
    return {
        props: {
            portfolios,
        },
    };
};

const Home: NextPage = ({ portfolios }: any) => {
    
    return (
        <div>
            <Head>
                <title>Max - Flores</title>
                <meta name="Graphic Designer" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='px-4'>
                <Hero />
                <div className="md:h-96 h-56 flex flex-col items-center justify-center gap-2">
                    <h1 className="">For great graphic needs</h1>
                    <p className="text-2xl md:text-3xl font-bold text-center">
                        Greater creative solutions
                    </p>
                </div>
                <Body categories={portfolios} />
            </main>
        </div>
    );
};

export default Home;
