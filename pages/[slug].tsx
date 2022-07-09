import Error from '../components/Error';
import { graphcms } from '../components/GraphCMS/GraphCMS';
import { SINGLE } from '../components/GraphCMS/Queries';
import Body from '../components/Single/Body';
import Hero from '../components/Single/Hero';
import Sidebar from '../components/Single/Sidebar';

export const getServerSideProps = async (context: any) => {
    const slug = context.query.slug;

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
        <div className='bg-stone-100'>
            <Hero data={portfolio} />
            <div className="container mx-auto flex justify-center py-24 xl:gap-40 lg:gap-32 md:gap-24 md:flex-row gap-16 flex-col">
                <Sidebar data={portfolio} />
                <Body data={portfolio} />
            </div>
        </div>
    );
};

export default projectSingle;
