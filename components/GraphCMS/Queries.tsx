import { gql } from 'graphql-request';

export const PROJECTS_ALL = gql`
    {
        projects(first: 20) {
            id
            title
            url
            location
            softwareused {
                ... on Software {
                    title
                    logo {
                        url
                    }
                }
            }
            portfolio {
                portfolioname
            }
            summary {
                text
            }
            pictures {
                url
            }
            banner {
                url
            }
        }
    }
`;

export const SOFTWARES = gql`
    {
        softwares {
            id
            title
            logo {
                url
            }
        }
    }
`;

export const CATEGORIES = gql`
    {
        portfolios {
            portfolioname
            slug
            procat {
                banner {
                    url
                }
            }
        }
    }
`;

export const SINGLE = gql`
    query GetSingleBySlug($slug: String!) {
        portfolio(where: { slug: $slug }) {
            id
            procat {
                banner {
                    url
                }
                title
                softwareused {
                    ... on Software {
                        id
                        title
                        logo {
                            url
                        }
                    }
                }
                pictures {
                    url
                }
            }
            portfolioname
        }
    }
`;
