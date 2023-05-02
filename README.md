# Final Project: Diet Record App
This project is a Diet Record app built using AWS Amplify and React. Users can create and manage personal body records, view their age, BMI, Body Fat, and create custom foods to add to their daily food intake.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the project structure hold on AWS:

![](./figure.jpeg)

## Features
1. User authentication with AWS Amplify+Cognito
2. Create and manage personal body records
3. Calculate age and BMI based on the closest body record
4. Create and manage custom food items
5. Add custom food items to daily food intake
6. Store images associated with notes
7. Real-time updates with AWS AppSync and GraphQL

## How to Run the app
Please visit the following link for the application through AWS API:

https://main.d3fuok9qvl92xs.amplifyapp.com/

Also please visit the deployment of advanced version(Combined) on my personal web:
https://yuxuanyang.com/health

## How to Run Locally

1. Install Node.js version 16 or later from Node.js website
2. Install the Amplify CLI:
```sh
npm install -g @aws-amplify/cli
```
3. clone the repo
4. cd dietrecord
5. Configure the amplify:
```sh
amplify configure
amplify init
amplify add auth
amplify add api
amplify push --y
npm start
```

If your npm environment was not properly configured, you should run the following command in the project folder:
```sh
npm install
```

## How does AppSync(GraphQL) work with React

The GraphQL import the request from schema, and pull the record from cloud database.

```js
import { listBodyRecords } from "./graphql/queries";
import {
  createBodyRecord as createBodyRecordMutation,
  updateBodyRecord as updateBodyRecordMutation,
} from "./graphql/mutations";
```

The corresponding schema:
```graphql
type BodyRecord @model @auth(rules: [ { allow: public } ] ) {
  id: ID!
  height: Float!
  weight: Float!
  birthday: AWSDate!
}
```

## Usage
1. Sign up and sign in to the app.
2. Add or update personal body records (height, weight, birthday).
3. View your age and BMI calculated based on the closest body record.
4. Add custom food items with their nutritional information.
5. Edit or delete custom food items.
6. Add custom food items to your daily food intake.
7. Remove food items from your daily food intake.


