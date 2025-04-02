# TaskFlow

## Overview
TaskFlow is a React-based task management application designed to simplify task assignment, tracking, and visualization. It provides an intuitive interface for administrators to assign tasks and employees to manage their workload efficiently. The application leverages **browser local storage** for seamless data persistence, ensuring tasks and user information remain intact across sessions.

## Live Demo
🔗 **Access TaskFlow here:** [TaskFlow Live](https://task-flow-three-gilt.vercel.app/)

## Features
### 🔹 Admin Dashboard
- Assign tasks to employees
- View employee details and task progress
- Manage overall task workflow efficiently

### 🔹 Employee Panel
- View assigned tasks in an organized dashboard
- Update task status in real-time
- Track completed and pending tasks

### 🔹 Task Management
- Create, edit, and delete tasks
- Update task progress dynamically
- Task filtering and sorting for better organization

### 🔹 Authentication
- Simple local storage-based login system
- Persistent user sessions without the need for a backend

### 🔹 User-Friendly Interface
- **Responsive UI** ensuring a seamless experience across all devices
- **Modern design** powered by Tailwind CSS / Bootstrap

## Technologies Used
- **Frontend:** React.js, Tailwind CSS / Bootstrap
- **State Management:** React Context API
- **Authentication:** Local storage-based login system

## Installation
Follow these steps to set up TaskFlow locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kunall0880/taskflow.git
   cd taskflow
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
1. **Sign Up / Login:** Users can register and log in (stored in local storage).
2. **Admin Panel:** Manage tasks and track employee progress.
3. **Employee Dashboard:** View assigned tasks and update their status.
4. **Task Management:** Add, update, and delete tasks dynamically.
5. **Persistent Storage:** All data is stored in browser local storage for continuity.

## Folder Structure
```
/taskflow
│── src
│   ├── components     # Reusable components
│   ├── pages          # Page components (Dashboard, Login, etc.)
│   ├── hooks          # Custom React hooks
│   ├── context        # Global state management
│   ├── assets         # Images, icons, etc.
│   ├── App.js         # Main application file
│   ├── index.js       # Entry point
│── public
│── package.json
│── README.md
```

## Contributing
Contributions are welcome! To contribute:
1. **Fork** the repository.
2. **Create a new branch** (`feature/your-feature-name`).
3. **Commit your changes** and push them to GitHub.
4. **Open a pull request** for review.

## License
TaskFlow is licensed under the **MIT License**.

## Contact
For any queries or suggestions, feel free to reach out:
- **GitHub:** [kunall0880](https://github.com/kunall0880)
- **Email:** kunall0880@gmail.com

