
# Netflix Project Backend 

This project aims to provide the backend services for a Netflix-like platform, allowing users to browse and watch content, manage profiles, and integrate with a shopping service. The backend is built using Node.js with Express, utilizing JWT for authentication, bcrypt for password hashing, Joi for validation, and Nodemailer for email notifications. This README provides an overview of the project, setup instructions, and key details.
## Demo

![Profile manage gif](https://res.cloudinary.com/djwetaeqt/image/upload/v1718221295/github_Images/Screenshot_2024-06-12_223629_ua8inx.png)


## Table of Contents

- Features
- Technologies Used
- Setup Instructions
- State Management
- Screen Limit



## Features

- User authentication (login and signup) with JWT
- Password hashing with bcrypt
- Data validation with Joi
- Email notifications with Nodemailer
- CORS policy implementation
- Multi-screen support (up to 5 profiles per user)
- Integrated shop for purchasing items

## Technologies Used

**Client:** React.js with Vite, TailwindCSS, DaisyUI, Redux.

**Server:** Node, Express, JWT authentication, bcrypt, Joi validation, Nodemailer verifaction.

 
[🔗 Link to client repo](https://github.com/Rosenfeld99/Netflix_project_client)




## Setup Instructions

Clone the repository:

```bash
  git clone https://github.com/Rosenfeld99/Netflix_project_server.git
```
Install dependencies:

```bash
  npm install
```
Start the development server:

```bash
  npm start
```
Create a .env file in the root directory and add the following environment variables:

```bash
  TOKEN_SECRET = ENTER HASH OR PASSWORD
  PORT= SERVER PORT // 3005
  MONGO_CONNECTION = mongodb://127.0.0.1:27017/myapp
  PASS = ENTER PASSWORD FOR NODEMAILER VARIFACTION
  USER = ENTER EMAIL FOR NODEMAILER VARIFACTION
  URL_BASED = ENTER URL BASED FOR CLIENT // VITE "http://localhost:5173/"
```

## State Management

Redux is used to manage the global state of the application, including user authentication, screen management, and content browsing.

- Auth Slice: Manages user login, signup, and authentication state
- User Slice: Manages user profile and screen limit state
- Content Slice: Manages movie and TV show data
- Shop Slice Manages products and categories

## Screen Limit

Each user is limited to a maximum of 5 screens. This is managed in the User Slice of the Redux store. If a user tries to add more than 5 screens, they will be notified and prevented from doing so.
is blocked in fron and server.
