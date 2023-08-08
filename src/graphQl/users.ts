import gql from "graphql-tag";

export const QUERY_USERS_INFO = gql`
  query Query(
    $distinctOn: [users_select_column!]
    $orderBy: [users_order_by!]
  ) {
    users(distinct_on: $distinctOn, order_by: $orderBy) {
      name
      id
    }
  }
`;

// This mutation does not work for me too
export const MUTATE_INSERT_USERS = gql`
  mutation Mutation($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      affected_rows
      returning {
        id
        name
        rocket
      }
    }
  }
`;
