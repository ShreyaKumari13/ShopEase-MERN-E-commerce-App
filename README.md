
# ShopEase: MERN Stack E-commerce App

## Objective
The goal of this project is to develop a basic e-commerce web application using the MERN stack (MongoDB, Express, React, Node.js). This application demonstrates skills in both frontend and backend development, as well as database management.

## Project Overview
**ShopEase** is a simplified e-commerce web application that allows users to view a list of products and add items to a shopping cart. This project was designed to offer a foundational understanding of building full-stack applications and managing e-commerce functionalities using the MERN stack.

## Features
- **Product Listing:** Displays a list of products fetched from the MongoDB database.
- **Shopping Cart:** Users can add items to a cart, which updates in real-time.
- **Frontend:** Built with React, offering a responsive and user-friendly interface.
- **Backend API:** Developed with Express and Node.js to handle product data and cart operations.
- **Database Management:** Utilizes MongoDB for storing product data.

## Technology Stack
- **Frontend:** React
- **Backend:** Node.js and Express
- **Database:** MongoDB
- **Other Tools:** REST APIs, Axios

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or MongoDB Atlas account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ShreyaKumari13/taskmanager.git
   cd taskmanager
   ```

2. **Install dependencies for both frontend and backend**

   ```bash
   # In the root folder, install backend dependencies
   npm install

   # Move to the frontend folder and install frontend dependencies
   cd client
   npm install
   ```

3. **Setup Environment Variables**

   Create a `.env` file in the root directory and add the following:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the Application**

   - Start the backend server:
     ```bash
     npm run server
     ```

   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

5. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000` to view the frontend.
   - The backend server runs on `http://localhost:5000`.

## Folder Structure

```
taskmanager
├── client                 # React frontend
│   ├── public
│   └── src
├── models                 # Database models
├── routes                 # API routes
├── .env                   # Environment variables
├── server.js              # Express server
└── README.md              # Project documentation
```

## Future Improvements
- Add user authentication
- Implement product filtering and sorting
- Integrate payment gateway

## License
This project is licensed under the MIT License.

## Author
Developed by [Shreya Kumari](https://github.com/ShreyaKumari13)
