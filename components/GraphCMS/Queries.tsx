import { gql } from 'graphql-request';

export const PROJECTS_ALL = gql`
    {
        projects(first: 20) {
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
            procat {
                banner {
                    url
                }
            }
        }
    }
`;
