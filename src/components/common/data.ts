export const intro = {
  name: "Vinay Kachare",
  role: "Backend Developer",
  mobile: "+91 9664944700",
  email: "vinaykachare@gmail.com",
  location: "Mumbai",
  experience: [
    { type: "Total Experience", years: "9+ years" },
  ],
  social: [
    ["linkedin", "https://www.linkedin.com/in/vinaykachare/"],
    ["github", "https://github.com/vinaykachare"],
    ["medium", "https://vinaykachare.medium.com/"]

  ],
  about: {
    title: "About me",
    description: `I am a highly skilled and motivated Lead Backend Developer with expertise in Python. My deep understanding of backend architecture and extensive experience in designing scalable and efficient systems allows me to create robust and reliable solutions.I am very good at Serverless Architecture and can adapt to most of the backend frameworks & languages quickly.`,
  }
  // ,
  // objective: {
  //   title: "Career Objective",
  //   description:
  //     "Eager to expand my skill set through external trainings to help boost all major front desk KPIs. Hoping to leverage organizational skills to help ABC Corp introduce time-saving schemes for all executives.",
  // },
};

export const skills = {
  technical: {
    title: "Technical Expertise",
    items: [
      { name: "Python", rating: 5 },
      { name: "C#", rating: 4 },
      { name: "Serverless", rating: 4 },
      { name: "JavaScript", rating: 4 },
      { name: "Go", rating: 2 },
    ],
  },

  frameworks: {
    title: "Backend Frameworks",
    items: [
      "FastAPI",
      "Django",
      "Django REST",
      "Flask",
      "Node JS"
    ]

  },
  exposure: {
    title: "Cloud Expsoure (AWS)",
    items: [
      "Lambda",
      "API Gateway",
      "WebSocket",
      "SQS",
      "DynamoDB",
      "SNS",
      "Textract",
      "S3",
      "IAM",
      "CloudFormation",
      "EC2",
      "Serverless Application Model (SAM)",
    ],
  },


  methodology: {
    title: "Methodology / Approach",
    items: [
      "RESTful architecture",
      "Agile methodology",
      "Design Patterns",
      "Test Driven Development",
    ],
  },
  tools: {
    title: "Tools",
    items: ["Git", "Docker", "VS Code", "TFS", "Jira", "Visual Studio", "Bitbucket", "Jenkins"],
  },
};

export const experience = {
  title: "Experience",
  companies: [
    {
      name: "Morningstar",
      role: "Lead Software Developer",
      years: "Nov 2020 - present",
      expYears: "2.6 years",
      description: [
        "Use my extensive experience with back end development to define the structure and components for the project, making sure they are reusable",
        "Keep the code quality high reviewing code from other developers and suggesting improvements",
        "Developed serverless applications with AWS using services like Lambda, API Gateway, SQS, SNS & Textract",
      ],
    },
    {
      name: "SME Corner",
      role: "Full Stack Developer",
      years: "Jul 2019 - Nov 2020",
      expYears: "1.5 years",
      description: [
        "Develop web application which will scrap the customer details from the several government portals. This application is helpful to cross verify the customer background",
        "Keep the code and the features implemented by the other developers in accordance to the requirements",
      ],
    },
    {
      name: "Ingram Micro India",
      role: "Senior Software Engineer",
      years: "Feb 2016 - Jun 2019",
      expYears: "3.5 years",
      description: [
        "Worked as a part of the International Team, handling the Nordics division Developed the Web Services which provides the real time inventory from ERP to the customers so that they can reserve the stock accordingly",
        "Built a reporting portal for the Vodafone NZ. This provided the user an amenity to track the products sold to the end customer by Vodafone, in turn making the reverse logistic process easy for these products",
      ],
    },
    {
      name: "CCM PVT LTD",
      role: "Application Developer",
      years: "April 2015 - Feb 2016",
      expYears: "10 months",
      description: [
        "Developed web portal for client (Citi Bank) to cover the changes they make in the documents that are recognized, tracked and displayed in the web",
      ],
    },
    {
      name: "HDFC Bank LTD",
      role: "Software Developer",
      years: "Nov 2013 - April 2015",
      expYears: "1.6 years",
      description: [
        "Developed database driven applications independently from scratch, also worked on performance improvement of existing applications",
      ],
    },
  ],
};

export const achievements = {
  keyProjects: {
    title: "Key Projects / Involvements",
    items: [
      "Introduced AWS SAM (IaC) framework to the project in order to build the serverless application faster, making it easier not only to debug but to deploy and maintain the app's on AWS.",
      "Improved project performance by identifying the bottleneck using profiler & implemented parallelism and concurrency based on profiling result.",
      "Implemented Data Extractor which will extract data from PDF based on Event Driven Architecture.",
      "Successfully developed a POC on site (New Zealand) to get the project approval from client.",
    ],
  },
  certificates: {
    title: "Certificates and Awards",
    items: [
      "Rewarded with <strong>Star of the Quarter</strong> twice, for extraordinary performance in a quarter.",
      "Best performer award for consistently exceeding the performance.",
    ],
  },
};

export const education = {
  title: "Education",
  items: [
    {
      institution: "Mumbai, University",
      years: "2014 - 2017",
      degree: "MCA",
    },
  ],
};
