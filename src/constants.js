// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import nexus from './assets/company_logo/nexus_logo.jpg';
import atnatic from './assets/company_logo/atnatic_logo.jpg';

// Education Section Logo's
import iiits from './assets/education_logo/iiits.png';
import narayana from './assets/education_logo/narayana.png';
import ratnam from './assets/education_logo/ratnam.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Ai/ml',
    skills:[
      { name: 'pandas', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu9xFbA6COOd9Wq-koFEoAFD7wpFgbvdz6Q&s' },
      { name: 'matplotlib', logo: 'https://media.licdn.com/dms/image/v2/D5612AQGRm6OtaKYi5Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679667852686?e=2147483647&v=beta&t=xsH1DrH0XatcltjS07lCM8FwdWR91hxkQeRgAK4vdpA' },
      { name: 'PyTorch', logo: 'https://pytorch.org/assets/images/pytorch-logo.png' },
      { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
      { name: 'Keras', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' },
      { name: 'scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
      { name: 'spaCy', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg' },
      { name: 'NLTK', logo: 'https://miro.medium.com/v2/resize:fit:1184/0*zKRz1UgqpOZ4bvuA' },
      { name: 'Langchain', logo: 'https://api.nuget.org/v3-flatcontainer/langchain.core/0.17.0/icon' },
      { name: 'HuggingFace', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
      { name: 'OpenAI', logo: 'https://yt3.googleusercontent.com/MopgmVAFV9BqlzOJ-UINtmutvEPcNe5IbKMmP_4vZZo3vnJXcZGtybUBsXaEVxkmxKyGqX9R=s900-c-k-c0x00ffffff-no-rj' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Google Colab', logo: 'https://algotrading101.com/learn/wp-content/uploads/2021/05/Google-Colab-Guide-e1620759490851.jpg' },
  { name: 'Jupyter Notebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg' },
  { name: 'Streamlit', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDKmSgL7UJ6sstMUQTtjI2iDN7ClN2jRZ5Q&s' },
  { name: 'IntelliJ IDEA', logo: 'https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png' },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: atnatic,
      role: "E-comm Website Intern",
      company: "Atnatic",
      date: "May 2025 - June 2025",
      desc: "My responsibilities included customizing themes, adding and organizing products, setting up collections, configuring payment/shipping options, shipping integrations and ensuring a smooth user experience. Learned the fundamentals of online store management, and improved my understanding of UX/UI design and digital branding strategies.",
      skills:["HTML","Css","JavaScript","UI/UX","Shopify","E-commerce","Razorpay"]
    },
    {
      id: 1,
      img: nexus,
      role: "AI/ML Intern",
      company: "Nexus Info",
      date: "September 2024 - October 2024",
      desc: "Developed a Medicine Recommendation System that predicts diseases based on user symptoms. Using supervised machine learning and a curated healthcare dataset. I built an interactive web app using Streamlit, allowing users to enter their symptoms and instantly receive disease predictions along with personalized health advice such as diet plans and preventive care.",
      skills: [
        "Python",
        "Scikit-learn",
        "Machine Learning",
        "Data Preprocessing",
        "Pandas",
        "Streamlit",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: iiits,
      school: "Indian Institute of Information Technology, Sricity",
      date: "Sept 2022 - May 2026",
      grade: "8.0 CGPA",
      desc: "I am pursuing my B.Tech in Computer Science from Indian Institute of Indian Institute of Information Technology Sri City.",
      degree: "Batchelor of Technology - B.Tech(CSE)",
    },
    {
      id: 1,
      img: narayana,
      school: "Narayana Junior College",
      date: "June 2020 - May 2022",
      grade: "97.5%",
      desc: "I completed my class 12 education from Narayana Junior College, Nellore, where I studied Mathematics, Physics and Chemistry(MPC)",
      degree: "Class XII - MPC",
    },
    {
      id: 2,
      img: ratnam,
      school: "Ratnam High School",
      date: "March 2020",
      grade: "100%",
      desc: "Built a strong base in all the subjects, from English grammar to Indian histories. ",
      degree: "Class X",
    },
  ];
  
  export const projects = [
  {
    id: 0,
    title: "Medicine Recommendation System",
    description:
    "A machine learning-based web app that predicts diseases from user symptoms with 97.8% accuracy. It provides tailored health recommendations like diets and preventive care. Built using Streamlit and deployed for real-time interaction.",
    tags: ["Python", "Scikit-learn", "Pandas", "Numpy", "Streamlit","Feature Extraction", "Machine Learning", "Data Cleaning ","Data Analysis"],
    github: "https://github.com/suryamanoj07/medicine_recommendation_system",
    webapp: "https://medicinerecommendationsystem2024.streamlit.app/",
  },
  {
    id: 1,
    title: "Heavenly Homes",
    description:
      "A fully responsive house rental web application developed using the MERN stack. Improved SEO by 58% and reduced load time by 40% through front-end and API optimizations.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "CSS", "HTML","Firebase","Postman"],
    github: "https://github.com/suryamanoj07/Heavenly_homes",
    // webapp: "https://medicinerecommendationsystem2024.streamlit.app/",
  },
  {
    id: 2,
    title: "Harvest Hub",
    description:
      "A full-stack MERN e-commerce platform connecting farmers with customers. Features real-time dashboards for inventory and reduced inquiry response time. Aimed to streamline order management and improve farmer outreach.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "CSS", "HTML","GraphQL","REST"],
    github: "https://github.com/suryamanoj07/harvest-hub2",
    webapp: "https://harvest-hub-main.vercel.app/",
  },
  {
    id: 3,
    title: "Smart PDF Chat-Bot AI",
    description:
      "An AI-powered PDF chatbot that uses Google Gemini and LangChain to answer document-based queries with 93% accuracy. Enhanced with FAISS for vector search and deployed via Streamlit for fast and intuitive interaction.",
    tags: ["Langchain", "Google Gemini", "FAISS", "PyPDF2", "Streamlit", "Python", "AI", "Vector Search"],
    github: "https://github.com/suryamanoj07/Multi-PDF_chatbot",
    webapp: "https://multi-pdfchatbot2024.streamlit.app/",
  },
  {
    id: 4,
    title: "Developer Trends Analysis",
    description:
      "Analyzed data from over 1,000 developers to uncover key satisfaction trends and insights. Helped improve developer career development strategies using visual data insights.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    github: "https://github.com/suryamanoj07/stack-overflow_Data_Analysis",
    // webapp: "https://your-live-link.com/",
  },
  {
    id: 5,
    title: "Email-SMS Spam Classifier",
    description:
      "A classification model that detects spam in emails and SMS messages using machine learning algorithms. Trained on real-world datasets for high accuracy predictions.",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "NLP"],
    github: "https://github.com/suryamanoj07/Email-SMS-spam-classifier",
    // webapp: "https://email-sms-spam-classifier-2024.streamlit.app/",
  }
];
