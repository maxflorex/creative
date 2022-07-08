import { gql } from 'graphql-request';
import React from 'react';
import { graphcms } from '../components/GraphCMS/GraphCMS';
import { CATEGORIES } from '../components/GraphCMS/Queries';

type Props = {};

export const getServerSideProps = async (context: any) => {
    const slug = context.query.slug;

    const query = gql`
        query GetSingleBySlug($slug: String!) {
            portfolio(where: { slug: $slug }) {
                id
            }
        }
    `

    const variables = {
        slug
    }
    

    const { portfolio } = await graphcms.request(query, variables);

    return {
        props: {
            portfolio
        }
    }
};

const projectSingle = ({ portfolios }: any) => {
    console.log(portfolios);

    return <div>Hellooooooo</div>;
};

export default projectSingle;
