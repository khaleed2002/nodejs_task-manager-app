# Task Manager API

Task Manager API is a RESTful web service that provides endpoints for managing tasks and user authentication.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage and API Reference](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Task Manager API is built using Node.js and Express, with MongoDB as the database. It includes features such as user authentication, task creation, updating, and deletion.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

### 1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```
### 2. Install dependencies:
   ```
cd task-manager
npm install
   ```
### 3. Create environment files:
Create .env file for development:
```
JWT_SECRET=your_jwt_secret
GMAIL_USERNAME=your_gmail_username
GMAIL_PASSWORD=your_gmail_password
MONGODB_URL=your_database_url
```
Create production.env and test.env files as needed.

### scripts
- npm run start (start the production server)
- npm run dev (start development server)
- npm run test (test spec files)

## Usage
API Base URL: http://localhost:3000

## API Reference
### User Endpoints

- Signup: Create a new user account.
   - `POST /users`
   - *Request body*
      ```bash
         {
            "email": "user@example.com",
            "password": "user_123",
            "name": "User",
            "age": 22
         }
      ```
   - *Response*
      - Status Code: 201 Created
      - Body
      ```bash
         {
            "user": {
               "_id": "user_id",
               "name": "User",
               "email": "user@example.com",
               "age": 22
            },
            "token": "access_token"
         }
      ```

------------------
- Login: Log in an existing user.

   - `POST /users/login`
   - *Request body*
      ```bash
         {
            "email": "user@example.com",
            "password": "user_123"
         }
      ```
   - *Response*
      - Status Code: 200 OK
      - Body
      ```bash
         {
            "user": {
               "_id": "user_id",
               "name": "User",
               "email": "user@example.com",
               "age": 22
            },
            "token": "access_token"
         }
      ```

------------------
- Logout:  Log out the authenticated user.

   - `POST /users/logout`
   - Authentication: Bearer Token
   - *Response*
      - Status Code: 200 OK
------------------
- Logout All:  Log out the authenticated user from all devices.

   - `POST /users/logoutAll`
   - Authentication: Bearer Token
   - *Response*
      - Status Code: 200 OK

------------------
- Get User Profile: Retrieve the profile of the authenticated user.

   - `GET  /users/me`
   - Authentication: Bearer Token
   - *Response*
      - Status Code: 200 OK
      - Body
      ```bash
         {
            "user": {
               "_id": "user_id",
               "name": "User",
               "email": "user@example.com",
               "age": 22
            },
            "token": "access_token"
         }
      ```

------------------
- Update User Profile: Update the profile of the authenticated user.

   - `PATCH /users/me`
   - Authentication: Bearer Token
   - *Request body*
      ```bash
         {
            "name": "New Name",
            "age": 26
         }
      ```
   - *Response*
      - Status Code: 200 OK
      - Body
      ```bash
         {
            "_id": "user_id",
            "name": "New Name",
            "email": "user@example.com",
            "age": 26
         }
      ```

------------------
- Delete User Account: Delete the account of the authenticated user.

   - `DELETE  /users/me`
   - Authentication: Bearer Token
   - *Response*
      - Status Code: 200 OK
      - Body
      ```bash
         {
            "_id": "user_id",
            "name": "User",
            "email": "user@example.com",
            "age": 22
         }
      ```
------------------
- Upload User Avatar: Upload avatar for the authenticated user.

   - `POST  /users/me/avatar`
   - Authentication: Bearer Token
   - Request
      - includes file attachment of type (jpg, jpeg, png)
   - *Response*
      - Status Code: 200 OK

------------------
- Get User Avatar: Get avatar for any user.

   - `GET  /users/:id/avatar`
   - Request
      - id parameter for the user
   - *Response*
      - Status Code: 200 OK
      - 'Content-Type': 'image/png'
      - user avater image (png)

------------------
- Delete User Avatar: Delete avatar of the authenticated user.

   - `DELETE  /users/me/avatar`
   - Authentication: Bearer Token
   - *Response*
      - Status Code: 200 OK
      - Body
      ```bash
         {
            "_id": "user_id",
            "name": "User",
            "email": "user@example.com",
            "age": 22
         }
      ```
