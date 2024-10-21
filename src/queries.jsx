
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


export const GET_ALL_CAMPAIGNS = gql`
  query AllCampaigns {
    allCampaigns(input: { page: 1 }) {
      ... on CampaignResponse {
        status
        message
        campaign {
          id
          campaignName
          targetAudience
          description
          startDate
          endDate
          publishStatus
          activeStatus
          impressionsCount
          clicksCount
          earning
          campaignType
          isDeleted
          deletedAt
          updatedAt
          createdAt
          imageUrls
          videoUrls
          audioUrls
        }
      }
      ... on Error {
        status
        message
      }
      ... on PaginatedCampaignList {
        status
        message
        page
        totalCount
        data {
          id
          campaignName
          targetAudience
          description
          startDate
          endDate
          publishStatus
          activeStatus
          impressionsCount
          clicksCount
          earning
          campaignType
          isDeleted
          deletedAt
          updatedAt
          createdAt
          imageUrls
          videoUrls
          audioUrls
        }
      }
    }
  }
`;