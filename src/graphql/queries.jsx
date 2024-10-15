import { gql } from '@apollo/client';
 
export const LOGIN_QUERY = gql`
  query GlAdmin($admin: GlAdminInput!) {
    glAdmin {
      GlAdmin(admin: $admin) {
        ... on GlAdmin {
          id
          name
          jwt
          email
          phone
          gender
          avatarUrl
          address
        }
        ... on Error {
          status
          message
        }
      }
    }
  }
`;

export const Customer= gql`
  query GlAdmin($admin: GlAdminInput!) {
    glAdmin {
      GlAdmin(admin: $admin) {
        ... on GlAdmin {
          id
          name
          jwt
          email
          phone
          gender
          avatarUrl
          address
        }
        ... on Error {
          status
          message
        }
      }
    }
  }
`;



export const GET_REVENUE = gql`
  query GlAdmin {
    glAdmin {
      Revenue {
        ... on RevenuePage {
          grandTotal
          monthlyRevenues {
            month
            total
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


