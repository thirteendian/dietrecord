/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createBodyRecord = /* GraphQL */ `
  mutation CreateBodyRecord(
    $input: CreateBodyRecordInput!
    $condition: ModelBodyRecordConditionInput
  ) {
    createBodyRecord(input: $input, condition: $condition) {
      id
      height
      weight
      birthday
      createdAt
      updatedAt
    }
  }
`;
export const updateBodyRecord = /* GraphQL */ `
  mutation UpdateBodyRecord(
    $input: UpdateBodyRecordInput!
    $condition: ModelBodyRecordConditionInput
  ) {
    updateBodyRecord(input: $input, condition: $condition) {
      id
      height
      weight
      birthday
      createdAt
      updatedAt
    }
  }
`;
export const deleteBodyRecord = /* GraphQL */ `
  mutation DeleteBodyRecord(
    $input: DeleteBodyRecordInput!
    $condition: ModelBodyRecordConditionInput
  ) {
    deleteBodyRecord(input: $input, condition: $condition) {
      id
      height
      weight
      birthday
      createdAt
      updatedAt
    }
  }
`;
