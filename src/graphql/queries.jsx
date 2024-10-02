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





