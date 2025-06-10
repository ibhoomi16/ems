const employees = [ 
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create a responsive login UI using MUI.",
        date: "2025-06-07",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve dropdown issue in mobile view.",
        date: "2025-06-05",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update ReadMe",
        description: "Add new installation steps in README.md.",
        date: "2025-06-03",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
      
    ]
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Implement JWT Auth",
        description: "Integrate JWT for secure API login.",
        date: "2025-06-07",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Cleanup",
        description: "Remove obsolete collections from MongoDB.",
        date: "2025-06-06",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Write Unit Tests",
        description: "Increase code coverage for controllers.",
        date: "2025-06-02",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Review Pull Requests",
        description: "Go through pending PRs in frontend repo.",
        date: "2025-06-04",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Kabir",
    email: "employee3@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Deploy on Netlify",
        description: "Host frontend on Netlify for testing.",
        date: "2025-06-07",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress images and lazy load them.",
        date: "2025-06-06",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Handle Edge Cases",
        description: "Fix edge case in form validation.",
        date: "2025-06-05",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Refactor Routes",
        description: "Move all routes to a separate folder.",
        date: "2025-06-04",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Set Up CI/CD",
        description: "Create a GitHub workflow for deployments.",
        date: "2025-06-07",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Add Dark Mode",
        description: "Toggle theme for dark/light modes.",
        date: "2025-06-01",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test Payment Flow",
        description: "Verify Stripe integration in test mode.",
        date: "2025-06-05",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Broken Links",
        description: "Update outdated footer links.",
        date: "2025-06-06",
        category: "Maintenance",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

  const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }

];

export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
 const employees=JSON.parse(localStorage.getItem('employees'))
const admin=JSON.parse(localStorage.getItem('admin'))
return{employees,admin}
}