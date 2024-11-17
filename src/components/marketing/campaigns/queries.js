import { gql } from '@apollo/client';

export const CREATE_CAMPAIGN_MUTATION = gql`
  mutation CreateCampaign($input: CreateCampaignInput!) {
    glAdmin {
      createCampaign(input: $input) {
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
      }
    }
  }
`;

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


export const DELETE_CAMPAIGNS = gql`
  mutation DeleteCampaign($id: String!) {
    glAdmin {
      updateCampaign(input: { id: $id, isDeleted: true }) {
        ... on CampaignResponse {
          status
          message
          campaign {
            id
            isDeleted
            deletedAt
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

export const UPDATE_CAMPAIGN = gql`
  mutation UpdateCampaign(
    $id: String!,
    $campaignType:String!,
    $campaignName: String!,
    $targetAudience: String!,
    $description: String!,
    $startDate: DateTime!,
    $endDate: DateTime!,
    
    
    $imageUrls: [String!]!,
    $videoUrls: [String!]!,
    $audioUrls: [String!]!
  ) {
    glAdmin {
      updateCampaign(
        input: { 
          id: $id, 
          campaignName: $campaignName,
          targetAudience: $targetAudience,
          description: $description,
          startDate: $startDate,
        campaignType:$campaignType
          endDate: $endDate,
          
          
          imageUrls: $imageUrls,
          videoUrls: $videoUrls,
          audioUrls: $audioUrls
        }
      ) {
        ... on CampaignResponse {
          status
          message
          campaign {
            id
            campaignType
            campaignName
            targetAudience
            description
            startDate
            endDate
            publishStatus
            activeStatus
            imageUrls
            videoUrls
            audioUrls
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
export const UPDATE_CUSTOMER=gql`
mutation GlAdmin( $id: String!,
$name:String!) {
  glAdmin {
      updateEnterpriseCustomer(
      input:{id: $id, 
          name: $name,}
      ) {
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
          ... on Error {
              status
              message
          }
      }
  }
}`
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