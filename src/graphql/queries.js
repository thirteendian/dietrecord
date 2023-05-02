/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBodyRecord = /* GraphQL */ `
  query GetBodyRecord($id: ID!) {
    getBodyRecord(id: $id) {
      id
      height
      weight
      birthday
      createdAt
      updatedAt
    }
  }
`;
export const listBodyRecords = /* GraphQL */ `
  query ListBodyRecords(
    $filter: ModelBodyRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBodyRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        height
        weight
        birthday
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
