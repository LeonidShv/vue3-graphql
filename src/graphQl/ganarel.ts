import gql from "graphql-tag";

export const QUERY_COMPANY_INFO = gql`
  query Company {
    company {
      founded
      founder
      name
      summary
    }
  }
`;

export const QUERY_DRAGONS = gql`
  query Dragons {
    dragons {
      active
      id
      name
      type
    }
  }
`;

export const QUERY_DRAGON_ID = gql`
  query Dragon($dragonId: ID!) {
    dragon(id: $dragonId) {
      active
      description
      first_flight
      name
      type
      wikipedia
    }
  }
`;
