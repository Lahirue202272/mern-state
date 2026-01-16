#  Full-Stack MERN Real Estate Marketplace

A modern, production-ready **Real Estate Marketplace Application** built using the **MERN stack (MongoDB, Express.js, React, and Node.js)**.  
This project showcases real-world full-stack development practices, including secure authentication, CRUD operations, advanced search functionality, cloud storage integration, CI/CD automation, and deployment.

---

##  Project Overview

This application enables users to browse, create, and manage real estate listings through a secure and responsive web interface.  
It follows industry best practices for authentication, database optimization, and scalable deployment, making it suitable for portfolio showcasing and real-world use.

---

##  Features

###  Secure Authentication
- Email & password authentication using **JSON Web Tokens (JWT)**
- **Google OAuth** integration for quick and secure login
- Protected routes and user-specific access control

---

###  Property Listings Management
- Create, read, update, and delete property listings
- Upload and manage multiple images per property
- Listings are tied to individual user accounts

---

###  Advanced Search & Filtering
- Search properties by title
- Sort results by price or creation date
- Efficient filtering and result limiting using optimized **MongoDB queries**

---

###  Modern UI / UX
- Built with **React** and **Tailwind CSS**
- Fully responsive layout for mobile and desktop devices
- Clean and intuitive user experience

---

###  Cloud & Third-Party Integrations
- **Firebase Storage** for secure image uploads and management
- **Google OAuth** for social authentication

---

###  Deployment
- Deployed on **Render**
- Production-ready build configuration
- Publicly accessible and scalable deployment

---

###  CI/CD Pipeline
- Automated build and deployment workflow
- Continuous Integration with **GitHub**
- Automatic deployment to Render on code updates

---

##  Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Authentication
- JSON Web Tokens (JWT)
- Google OAuth

### DevOps
- Render
- CI/CD Pipeline (GitHub Actions / Render Auto Deploy)

---

##  Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FIREBASE_API_KEY=your_firebase_api_key
