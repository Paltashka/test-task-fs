# Express.js File Server

This is a simple Express.js server that performs CRUD operations on JSON files. It uses the `fs` module to interact with the file system.

## Installation

1. Make sure you have Node.js installed on your machine.
2. Clone this repository.
3. Navigate to the project directory and run `npm install`.

## Usage

The server provides the following endpoints:

### POST /file

Creates a new JSON file.

**Request body:**

```json
{
  "filename": "myFile",
  "content": {
    "key1": "value1",
    "key2": "value2"
  }
}
GET /files
Returns a list of all JSON files in the Files directory.

GET /file/:filename
Returns the content of the specified JSON file.

PUT /file/:filename
Updates the content of the specified JSON file.

Request body:
{
  "content": {
    "key1": "new value1",
    "key2": "new value2"
  }
}
DELETE /file/:filename
Deletes the specified JSON file.

Running the Server
To start the server, navigate to the project directory and run node app.js. The server will start on port 3000, or on the port specified in your PORT environment variable.
```
