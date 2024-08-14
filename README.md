# Basic CRUD Application

## Project Description
This project is a basic full stack web application demonstrating CRUD operations using Node.js, Express, and MongoDB.

## Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Ensure MongoDB is running locally or update the MongoDB connection string in `app.js`.
4. Start the application using `node app.js`.

## Running the Project
- Development: `node app.js`
- Production: `NODE_ENV=production node app.js`

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose

## API Endpoints
- **Create**: `POST /items`
- **Read All**: `GET /items`
- **Read One**: `GET /items/:itemId`
- **Update**: `PATCH /items/:itemId`
- **Delete**: `DELETE /items/:itemId`
