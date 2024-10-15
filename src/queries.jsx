
import { gql } from '@apollo/client';

export const GET_ALL_CUSTOMERS = gql`
  query GlAdmin {
    glAdmin {
      AllCustomers(customers: { page: null }) {
        ... on AllCustomersPage {
          page
          total
          items {
            id
            name
            jwt
            email
            phone
            gender
            avatarUrl
            headline
            bio
            address
            description
            notificationEvents {
              id
              label
              description
            }
            hobbies {
              id
              label
            }
            sightseeing {
              id
              label
            }
            profession {
              id
              label
            }
            language {
              id
              label
            }
            currency {
              id
              label
            }
            travellingUnit {
              id
              label
            }
          }
        }
        ... on Error {
          status
          message
        }
      }
    }
  }
`;
// queries.js


