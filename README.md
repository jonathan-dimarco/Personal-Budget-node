# Personal Budget

Simple Node/Express API to manage a portfolio budget using a budget envelope strategy. Users can create, read, update, and delete envelopes.

## Running the app
To run locally, run `npm install`, then `node app.js`

Once the app is running locally, you can access the API at `http://localhost:3001/`

## Functionality

 - Retrieve envelopes using `GET /envelopes`
 - Retrieve a single envelope using `GET /envelopes/{id}`
 - Create an envelope using `POST /envelopes`
 - Update an envelope using `PUT /envelopes/{id}`
 - Delete an envelope using `DELETE /envelopes/{id}`
 - Transfer money between envelopes using `POST /envelopes/{fromId}/transfer/{toId}`
