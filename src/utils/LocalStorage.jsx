localStorage.clear();
const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop Login Module",
        "taskDescription": "Create and integrate a secure login module with email and password authentication.",
        "taskDate": "2025-04-01",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write API Documentation",
        "taskDescription": "Prepare and publish API documentation for developers using Swagger.",
        "taskDate": "2025-04-02",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Research on Competitors",
        "taskDescription": "Analyze competitors’ products and pricing strategies for a quarterly business report.",
        "taskDate": "2025-04-01",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation for Clients",
        "taskDescription": "Design and finalize a presentation outlining our services and success stories.",
        "taskDate": "2025-04-02",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Finalize Project Proposal",
        "taskDescription": "Review and finalize the proposal document for the new client project.",
        "taskDate": "2025-04-03",
        "category": "Management"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Debug Frontend Issues",
        "taskDescription": "Fix reported UI bugs and improve performance of the React web application.",
        "taskDate": "2025-04-01",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test API Endpoints",
        "taskDescription": "Perform thorough testing on REST API endpoints and report bugs.",
        "taskDate": "2025-04-02",
        "category": "Quality Assurance"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Complete UI Wireframes",
        "taskDescription": "Design wireframes for the upcoming mobile application and share with the team.",
        "taskDate": "2025-04-01",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Meeting Preparation",
        "taskDescription": "Prepare reports and strategy documents for the upcoming client meeting.",
        "taskDate": "2025-04-02",
        "category": "Business"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Resolve Server Downtime Issue",
        "taskDescription": "Investigate and fix the unexpected server crashes affecting live services.",
        "taskDate": "2025-04-03",
        "category": "IT Support"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Employee Handbook",
        "taskDescription": "Revise HR policies and update the employee handbook with the latest regulations.",
        "taskDate": "2025-04-01",
        "category": "Human Resources"
      }
    ]
  },
  {
    "id": 6,
    "firstName": "Neha",
    "email": "employee6@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Social Media Strategy",
        "taskDescription": "Plan content strategy for social media engagement for the next quarter.",
        "taskDate": "2025-04-01",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Database Connection Issues",
        "taskDescription": "Investigate and fix recurring database connection problems in production.",
        "taskDate": "2025-04-02",
        "category": "IT Support"
      }
    ]
  }
];
const admin=[
      {"id": 1,
      "email": "admin@example.com",
      "password": "123"}
];
export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees,admin}
}