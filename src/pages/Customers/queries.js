import { gql } from "@apollo/client"
export const ALL_CUSTOMERS_QUERY = gql`
  query AllCustomers($id: String!) {
    allCustomers(input: { id: $id }) {
      ... on Error {
        status
        message
      }
      ... on EnterpriseCustomerResponse {
        status
        message
        customer {
          id
          name
          email
          avatarUrl
          customerId
          role
          customerStatus
          accountType
          pricePlan
          countryState
          isDeleted
          deletedAt
          updatedAt
          createdAt
          otherContactInfo {
            name
            contactNumber
          }
        }
      }
    }
  }
`