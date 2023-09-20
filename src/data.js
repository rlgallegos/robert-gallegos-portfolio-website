

export const intros = {
    en: [
        'Hey!', 
        "I'm Bobby and I'm a software engineer specializing in web development.", 
        "What's that? You'd like to learn a little more about me?", 
        "Alright!"
    ],
    sp: [
        '¡Hola!',
        "Soy Bobby y soy un ingeniero de software especializado en desarrollo web.",
        '¿Qué? ¿Te gustaría saber un poco más sobre mí?',
        '¡De acuerdo!'
    ],
    fr: [
        'Salut!',
        "Je m'appelle Bobby et je suis un ingénieur en logiciel spécialisé dans le développement web.",
        'Quoi? Vous aimeriez en savoir un peu plus sur moi?',
        'D\'accord!'
    ],
    ger: [
        'Hallo!',
        "Ich bin Bobby und ich bin ein Softwareingenieur, spezialisiert auf Webentwicklung.",
        'Was ist das? Möchten Sie ein wenig mehr über mich erfahren?',
        'In Ordnung!'
    ]
}


export const testimonials = [
    {
        id: 1,
        name: "Tayler",
        pic: "/tayler-pic.jpeg",
        text: ` “I have worked with a few independent developers before, but Robert has been the best.
        He was reliable, efficient, and created exactly what I asked for. 
        My website looks amazing and has already gotten more traction than my previous page.” `
    },
    {
        id: 2,
        name: "David",
        pic: "/david-pic.jpeg",
        text: ` "Working with Robert has been awesome! 
        His tech skills are top-notch, and he's a joy to collaborate with." `
    },
    {
        id: 3,
        name: "Marisa",
        pic: "/marisa-pic.jpeg",
        text: ` "Thrilled with the results. 
        Robert understood my project, and communication was seamless. 
        He was extremely professional and his attention to detail, technical skills, and creativity set him apart. 
        I'd absolutely recommend Robert." `
    },
]

export const projects = [
    {
      "id": 1,
      "title": "Skyvault",
      "description": [
        "Skyvault is an ongoing project designed to market the Skyvault app, which is currently available for both iOS and Android. The primary goal of the app is to assist small business owners in efficiently managing their inventory, keeping track of all associated costs and profits related to inventory management.", 
        "The website itself is a single-page application developed using React.js, and it plays a pivotal role in promoting the Skyvault app. Throughout the development process, one of the most significant challenges was ensuring mobile responsiveness. Given that the target audience primarily uses their mobile devices for business purposes, meticulous attention was dedicated to crafting an exceptional UI/UX design optimized for smaller screens.",
        "Presently, our focus is centered on integrating the website with the mobile application seamlessly. Additionally, we are in the process of establishing an API that will facilitate automatic email sending, enhancing the overall user experience and functionality of both the app and the website."
      ],
      "image": "skyvault-preview-pic.jpeg",
      "git": "https://github.com/rlgallegos/skyvault-website",
      "demo": "https://skyvaultinventory.com",
      "video": "skyvault-website-demo.mov",
      "languages": [
        "HTML",
        "CSS",
        "JavaScript (React)",
        "Tailwind CSS"
      ],
      "skills": [
        "User-driven UI/UX",
        "Mobile-responsive design",
        "Mobile App Development",
        "UI/UX Design",
        "API Integration",
      ]
    },
    {
      "id": 2,
      "title": "The Restaurant Companion",
      "description": [
        "Restaurant Companion is a full-stack, mobile-responsive application developed as a capstone project at Flatiron. Its intended use is to smooth out two of the most difficult aspects of server-guest communication in the restaurant industry: language, and allergies. From the guest perspective, a QR code is given to them directly leading them to the restaurant companion for the given restaurant. On scanning, the user can tap filter through the allergies the restaurant has on its menu, as well as translate the dish and its allergies, building the order as they go in whatever language(s) they choose. Once they are finished, the order is translated into english, allowing them to see both the translated and untranslated version of the order, and assigning them a number. From here, they can show the order to the server, or, optionally, give the designated order number to the  server who can, themselves, pull up the english version of the order via a hidden route.",
        "From the managerial perspective, the manager creates a restaurant, and before being allowed to navigate freely, is required to sign up for a 14-day free trial on Stripe. They can create new users, give them specific roles, build a menu with its specific dishes and allergies, and manage their account settings including payment details with Stripe, etc, from inside the 'Manager Portal'.",
        "Developing the Restaurant Companion required the use of several different languages/frameworks. Frontend was React, leveraging its component structure to split the website into the two 'portals.' Styling was accomplished using TailwindCSS. Flask was the web framework chosen; using RESTFUL routes where logical and custom routes where necessary. The backend language was Python which allowed integration with Google Translate's library (googletrans). An online database (PostgreSQL) was used, with flask-migrate handling all migrations. Authorization and authentication were handled by 'bcrypt.'"
      ],
      "image": "restaurant-companion-preview-pic.jpeg",
      "git": "https://github.com/rlgallegos/restaurant-companion",
      "demo": "https://restaurant-companion.vercel.app/",
      "video": "restaurant-companion-demo-video.mp4",
      "languages": [
        "Python",
        "JavaScript (React)",
        "SQLAlchemy",
        "JSON"
      ],
      "skills": [
        "Backend/Frontend Deployment",
        "Stripe API Integration",
        "Restful, Custom, and Webhook Endpoints",
        "GogoleTrans Library"
      ]
    },
    {
      "id": 3,
      "title": "Space Blasters",
      "description": [
        "Space Blasters was created while in my second month at Flatiron in React in a team of three developers. Its essentially a retro, arcade-style space shooter game. Focusing on the audio-visual aspects were of specific importance, given the nature of the project. Frontend validation was achieved using bcrypt within the React framework. All routing is front-end, taking advantage of the 'react-router-dom' library. Allowing the use of a leaderboard and saved stats for each user required enabling full CRUD capabilities within the React component tree.",
        "Deployment was accomplished using express and json-server to manage frontend and backend connections."
      ],
      "image": "space-blasters-preview-pic.jpeg",
      "git": "https://github.com/rlgallegos/space-blasters",
      "demo": "https://space-blasters.vercel.app/",
      "video": "space-blasters-demo-video.mp4",
      "languages": [
        "JavaScript (React)",
        "HTML/CSS",
        "JSON"
      ],
      "skills": [
        "React.js",
        "Frontend Validation",
        "Frontend Routing",
        "CRUD Operations",
        "Express",
        "JSON-Server"
      ]
    }
  ]