// This is our mock database. In a real MERN app,
// this data would come from MongoDB.

export const MOCK_USER_DATA = {
  // Corresponds to "Personal Information"
  personalInfo: {
    name: 'Santhosh Kumar G',
    title: 'Full-Stack Developer',
    email: 'santhosh@example.com',
    phone: '9876543210',
    location: 'Bengaluru, India',
    links: [
      { id: 1, name: 'LinkedIn', url: 'https://linkedin.com/in/santosh' },
      { id: 2, name: 'GitHub', url: 'https://github.com/santhoshkumar555' },
    ],
  },
  
  // Corresponds to "Professional Summary"
  summary: 'Creative Full-Stack Developer with a passion for building intuitive and performant web applications. Proficient in the MERN stack (MongoDB, Express, React, Node.js) and exploring Machine Learning with Python. Eager to turn complex problems into simple, beautiful solutions.',
  
  // Corresponds to "Professional Experience"
  experience: [
    {
      id: 1,
      title: 'Full-Stack Developer',
      company: 'Streamify (Personal Project)',
      startDate: '2025-09-01',
      endDate: 'present',
      description: 'Designed and built a real-time chat application with a React frontend and a Node.js/MongoDB backend. Implemented a full admin dashboard for user management.',
    },
    {
      id: 2,
      title: 'ML Intern',
      company: 'AI Solutions Inc.',
      startDate: '2025-06-01',
      endDate: '2025-08-31',
      description: 'Assisted the data science team in developing a model to predict cyber hacking breaches using Python and scikit-learn.',
    },
  ],

  // Corresponds to "Projects"
  projects: [
    {
      id: 1,
      name: 'Cyber Hacking Prediction',
      description: 'A Python/Flask application using machine learning to predict the likelihood of cyber breaches based on network traffic patterns.',
    },
    {
      id: 2,
      name: 'Doctor Appointment App',
      description: 'A React Native application for booking and managing doctor appointments, focusing on a clean and simple UI/UX.',
    },
  ],

  // Corresponds to "Skills"
  skills: [
    { id: 1, name: 'React' },
    { id: 2, name: 'Next.js' },
    { id: 3, name: 'Node.js' },
    { id: 4, name: 'MongoDB' },
    { id: 5, name: 'JavaScript (ES6+)' },
    { id: 6, name: 'Python' },
    { id: 7, name: 'Tailwind CSS' },
    { id: 8, name: 'Git & GitHub' },
  ],
  
  // Corresponds to "Education"
  education: [
     {
      id: 1,
      school: 'University of Bengaluru',
      degree: 'Bachelor of Engineering in Computer Science',
      startDate: '2021-01-01',
      endDate: '2025-01-01',
    },
  ]
};