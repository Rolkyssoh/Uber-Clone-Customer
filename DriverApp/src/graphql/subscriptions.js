/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      userID
      carID
      type
      originLatitude
      originLongitude
      destinationLongitude
      destinationLatitude
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      userID
      carID
      type
      originLatitude
      originLongitude
      destinationLongitude
      destinationLatitude
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      userID
      carID
      type
      originLatitude
      originLongitude
      destinationLongitude
      destinationLatitude
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
    onCreateCar(filter: $filter) {
      id
      type
      latitude
      longitue
      heading
      Orders {
        items {
          id
          userID
          carID
          type
          originLatitude
          originLongitude
          destinationLongitude
          destinationLatitude
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      userID
      isActive
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
    onUpdateCar(filter: $filter) {
      id
      type
      latitude
      longitue
      heading
      Orders {
        items {
          id
          userID
          carID
          type
          originLatitude
          originLongitude
          destinationLongitude
          destinationLatitude
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      userID
      isActive
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
    onDeleteCar(filter: $filter) {
      id
      type
      latitude
      longitue
      heading
      Orders {
        items {
          id
          userID
          carID
          type
          originLatitude
          originLongitude
          destinationLongitude
          destinationLatitude
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      userID
      isActive
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      Orders {
        items {
          id
          userID
          carID
          type
          originLatitude
          originLongitude
          destinationLongitude
          destinationLatitude
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Car {
        items {
          id
          type
          latitude
          longitue
          heading
          userID
          isActive
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      Orders {
        items {
          id
          userID
          carID
          type
          originLatitude
          originLongitude
          destinationLongitude
          destinationLatitude
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Car {
        items {
          id
          type
          latitude
          longitue
          heading
          userID
          isActive
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      Orders {
        items {
          id
          userID
          carID
          type
          originLatitude
          originLongitude
          destinationLongitude
          destinationLatitude
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Car {
        items {
          id
          type
          latitude
          longitue
          heading
          userID
          isActive
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
