const admin = [
  {
    email: "admin@example.com",
    password: "adminSecurePassword",
  },
];

const employees = [
    {
      email: "employee1@example.com",
      password: "password123",
      tasks: [
        {
          title: "Develop Homepage",
          description: "Create the homepage using React.js and Ant Design",
          date: "2024-10-28",
          assigned: true,
          status: false,
          companyName: "Tech Solutions Inc.",
        },
        {
          title: "Fix Bugs",
          description: "Resolve the reported issues in the login module",
          date: "2024-10-30",
          assigned: true,
          status: false,
          companyName: "Tech Solutions Inc.",
        },
      ],
    },
    {
      email: "employee2@example.com",
      password: "securepass456",
      tasks: [
        {
          title: "Design Landing Page",
          description: "Create a modern landing page design using Figma",
          date: "2024-11-01",
          assigned: true,
          status: false,
          companyName: "Creative Labs",
        },
        {
          title: "Write Documentation",
          description: "Document API endpoints for the new features",
          date: "2024-11-05",
          assigned: false,
          status: false,
          companyName: "Creative Labs",
        },
      ],
    },
    {
      email: "employee3@example.com",
      password: "mypassword789",
      tasks: [
        {
          title: "Test Application",
          description: "Run test cases for the user dashboard",
          date: "2024-10-28",
          assigned: true,
          status: true,
          companyName: "Quality Assurance Corp.",
        },
        {
          title: "Database Backup",
          description: "Ensure daily backup of all database records",
          date: "2024-10-29",
          assigned: true,
          status: false,
          companyName: "Quality Assurance Corp.",
        },
      ],
    },
    {
      email: "employee4@example.com",
      password: "safeandsecure123",
      tasks: [
        {
          title: "Implement Auth",
          description: "Develop user authentication with JWT",
          date: "2024-11-02",
          assigned: true,
          status: false,
          companyName: "SecureTech Ltd.",
        },
        {
          title: "Set Up Server",
          description: "Deploy the application server on AWS",
          date: "2024-11-03",
          assigned: false,
          status: false,
          companyName: "SecureTech Ltd.",
        },
      ],
    },
    {
      email: "employee5@example.com",
      password: "uniquepassword101",
      tasks: [
        {
          title: "Optimize Performance",
          description: "Improve website loading speed and optimize images",
          date: "2024-10-29",
          assigned: true,
          status: true,
          companyName: "WebSolutions Co.",
        },
        {
          title: "Social Media Integration",
          description: "Add social media sharing buttons",
          date: "2024-11-06",
          assigned: true,
          status: false,
          companyName: "WebSolutions Co.",
        },
      ],
    },
  ];
  
  // set the data local Storage for employees
  export const setLocalStorageData = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
  }

  export const getLocalStorageData = () => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]")  
    const admin = JSON.parse(localStorage.getItem("admin") || "[]")
  }