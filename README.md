# Project React: Cashflow Management System

## Project Description
Cashflow is a React-based project designed to manage personal or business finances. The application allows users to track income and expenses, categorize transactions, and store data locally or in a database for persistent management. The backend is built using Node.js with MongoDB as the database.

## Features
- Add income and expenses
- Categorize transactions
- Persistent storage using MongoDB
- Responsive React frontend for user interaction

---

## Steps Completed

### 1. Project Initialization
- Created a new directory for the project.
- Initialized a Git repository locally using:
  ```bash
  git init
  ```

### 2. Frontend Development
- Created a React project structure using `create-react-app`.
- Developed `Cadastro.js` to allow users to add transactions (income/expense) with fields such as:
  - Date
  - Category
  - Description
  - Value
  - Type (Income/Expense)
- Stored transaction data in localStorage for temporary persistence.

### 3. Backend Development
- Set up a Node.js project using:
  ```bash
  npm init -y
  ```
- Installed required dependencies:
  ```bash
  npm install express mongoose dotenv
  ```
- Configured a MongoDB database connection using Mongoose.
- Created a model for transactions with fields:
  - Name
  - Description
  - Price
- Added data population script (`populateDB.js`) to seed the database.

### 4. GitHub Integration
- Created a repository on GitHub to store project code.
- Added the remote repository using SSH:
  ```bash
  git remote add origin git@github.com:MarcosLevySilveira/project_react.git
  ```
- Resolved issues with `ERROR: Repository not found` by reconfiguring SSH keys and ensuring the repository exists.

### 5. Local Development
- Ensured MongoDB is running locally for backend database management.
- Fixed dependency issues in the frontend:
  ```bash
  npm install axios
  ```
- Verified full-stack integration between React frontend and Node.js backend.

---

## Pending Steps
1. **Frontend-Backend Integration**:
   - Use Axios to connect React with the Node.js API for data retrieval and submission.
2. **Styling**:
   - Improve UI with CSS or a frontend library (e.g., Material-UI, Bootstrap).
3. **Deployment**:
   - Deploy the application using platforms like Heroku (backend) and Vercel/Netlify (frontend).
4. **Testing**:
   - Implement unit and integration tests for both frontend and backend.

---

## How to Run the Project Locally

### Prerequisites
- Node.js (v20.11.0 or later)
- MongoDB installed locally or a connection string for a cloud MongoDB instance
- Git

### Steps
1. **Clone the Repository**:
   ```bash
   git clone git@github.com:MarcosLevySilveira/project_react.git
   cd project_react
   ```

2. **Install Dependencies**:
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Backend:
     ```bash
     cd backend
     npm install
     ```

3. **Set Environment Variables**:
   - Create a `.env` file in the `backend` directory with:
     ```env
     MONGO_URI=<your_mongo_connection_string>
     PORT=5000
     ```

4. **Start the Applications**:
   - Backend:
     ```bash
     cd backend
     node server.js
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

---

## License
This project is licensed under the MIT License.

---

## Contributors
- Marcos Levy Silveira

