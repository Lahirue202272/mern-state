## Full-Stack MERN Real Estate Marketplace

A modern and fully functional real estate marketplace application built using the MERN stack (MongoDB, Express.js, React, Node.js).
This project demonstrates real-world full-stack development practices including authentication, CRUD operations, advanced search, image uploads, deployment, and CI/CD automation.

## Features

## Secure Authentication

Email & password login using JWT

Google OAuth integration

## Property Listings Management

Create, read, update, and delete listings

Upload and manage multiple images per property

User-specific listing ownership

## Advanced Search

Search listings by title

Sort by price or creation date

Efficient filtering and result limiting using MongoDB queries

## Modern UI / UX

Built with React and Tailwind CSS

Fully responsive design

## Cloud & Integrations

Firebase for image storage

Google OAuth for authentication

## Deployment

Deployed on Render

Production-ready build configuration

## CI/CD Pipeline

Automated build and deployment workflow

Continuous integration with GitHub

Automatic deployment on code updates

## Tech Stack
Frontend:React,Tailwind CSS,Axios

Backend:Node.js,Express.js,MongoDB (Mongoose)

Authentication:JSON Web Tokens (JWT),Google OAuth

DevOps:Render,CI/CD Pipeline (GitHub Actions / Render Auto Deploy)

## Environment Variables

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

FIREBASE_API_KEY=your_firebase_api_key

## Run Locally

Install backend dependencies : npm install
Install frontend dependencies : npm install --prefix client
Start the application : npm run dev

## CI/CD Pipeline

This project includes a CI/CD pipeline that:

Automatically builds the application

Runs checks on every push

Deploys the latest version to Render

