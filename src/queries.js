import gql from "graphql-tag";

export const GET_PINNED_REPOS = gql`
  {
    viewer {
      login
      name
      pinnedItems(types: REPOSITORY, first: 7) {
        totalCount
        nodes {
          ... on Repository {
            id
            name
            createdAt
            description
            resourcePath
            url
          }
        }
      }
    }
  }
`;
