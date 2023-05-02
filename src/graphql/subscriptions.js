/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBodyRecord = /* GraphQL */ `
  subscription OnCreateBodyRecord(
    $filter: ModelSubscriptionBodyRecordFilterInput
  ) {
    onCreateBodyRecord(filter: $filter) {
      id
      height
      weight
      birthday
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBodyRecord = /* GraphQL */ `
  subscription OnUpdateBodyRecord(
    $filter: ModelSubscriptionBodyRecordFilterInput
  ) {
    onUpdateBodyRecord(filter: $filter) {
      id
      height
      weight
      birthday
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBodyRecord = /* GraphQL */ `
  subscription OnDeleteBodyRecord(
    $filter: ModelSubscriptionBodyRecordFilterInput
  ) {
    onDeleteBodyRecord(filter: $filter) {
      id
      height
      weight
      birthday
      createdAt
      updatedAt
    }
  }
`;
