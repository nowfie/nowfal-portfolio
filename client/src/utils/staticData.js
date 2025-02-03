import { FaMobileAlt, FaSearch, FaShieldAlt, FaShoppingCart, FaBell, FaBolt, FaLaptopCode, FaServer, FaUsers, FaBrain, FaEye, FaLanguage, FaChartLine, FaLock, FaLayerGroup, FaCog, FaDatabase } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineCloud } from "react-icons/ai";

const serviceData = [{
        name: 'web-development',
        title: 'Web Development',
        image: '/blog.png',
        description: 'We provide top-notch web development services using the latest technologies and frameworks to build secure, scalable, and high-performance websites.',
        details: [
            "Our web development services focus on creating fully responsive and interactive websites tailored to meet the unique needs of your business. We use cutting-edge technologies such as React, Angular, and Vue.js for the frontend and Node.js, Django, or Laravel for the backend, ensuring that your website is robust, scalable, and easy to maintain.",
        ],
        features: [{
                heading: 'Responsive Design',
                icon: MdDevices,
                description: 'Ensuring your website adapts seamlessly across all devices, providing a consistent and user-friendly experience for all users.',
            },
            {
                heading: 'SEO Optimization',
                icon: FaSearch,
                description: 'Improving your website’s visibility and ranking on search engines to drive organic traffic and increase online presence.',
            },
            {
                heading: 'Fast Load Times',
                icon: FaBolt,
                description: 'Optimizing website performance for fast page load times, enhancing user experience and improving search rankings.',
            },
            {
                heading: 'Custom Web Applications',
                icon: FaLaptopCode,
                description: 'Developing custom web applications tailored to your business needs, ensuring high performance and seamless functionality.',
            },
            {
                heading: 'E-commerce Solutions',
                icon: FaShoppingCart,
                description: 'Creating secure and efficient e-commerce platforms with integrated payment gateways for online selling.',
            },
            {
                heading: 'Content Management Systems (CMS)',
                icon: FaServer,
                description: 'Building and integrating user-friendly CMS solutions for efficient and effortless website content management.',
            },
        ],
    },
    {
        name: 'mobile-app-development',
        title: 'Mobile App Development',
        image: '/blog.png',
        description: 'Our mobile app development services offer custom solutions for Android and iOS platforms, ensuring a seamless user experience and robust functionality.',
        details: [
            "We specialize in developing high-quality mobile applications for both Android and iOS platforms. Our team uses the latest development frameworks such as React Native, Flutter, and Swift to build apps that are fast, reliable, and user-friendly. We work closely with you to understand your business requirements and ensure that your app delivers a smooth and engaging user experience.",
            "Our mobile apps are designed to meet the highest standards of performance and security. Whether you're launching a new app or enhancing an existing one, we provide end-to-end services, from app design and development to testing, deployment, and ongoing maintenance. We ensure that your app is fully optimized for performance and security, delivering seamless functionality to your users."
        ],
        features: [{
                heading: 'Cross-Platform Development',
                icon: FaMobileAlt,
                description: 'Developing apps for both iOS and Android, ensuring wide accessibility and consistent user experience across devices.',
            },
            {
                heading: 'User-Centric UI/UX Design',
                icon: FaUsers,
                description: 'Creating intuitive and user-friendly interfaces that enhance engagement and ensure a smooth experience for users.',
            },
            {
                heading: 'Performance Optimization',
                icon: FaBolt,
                description: 'Focusing on performance optimization for smooth app functionality, minimal load times, and high responsiveness.',
            },
            {
                heading: 'Secure Apps',
                icon: FaShieldAlt,
                description: 'Prioritizing security with advanced encryption and security features to protect user data and ensure app safety.',
            },
            {
                heading: 'Push Notifications',
                icon: FaBell,
                description: 'Implementing push notifications to keep users engaged and informed, promoting retention and interaction.',
            },
            {
                heading: 'In-App Purchases',
                icon: FaShoppingCart,
                description: 'Integrating in-app purchase capabilities for effective app monetization and additional user features.',
            },
        ],
    },
    {
        name: 'desktop-software-development',
        title: 'Desktop Software Development',
        image: '/blog.png',
        description: 'We specialize in creating powerful and efficient desktop software applications tailored to meet your business needs, with cross-platform compatibility.',
        details: [
            "Our desktop software development services help businesses automate processes and improve efficiency with custom software solutions. Whether you're looking for a tool to manage internal workflows, enhance customer interaction, or manage data, we design and develop desktop applications that work seamlessly across Windows, macOS, and Linux platforms.",
            "We ensure that the software is optimized for speed, security, and scalability, making sure it meets the unique needs of your business. Our applications are built with intuitive interfaces, powerful functionality, and are fully scalable to accommodate future growth. We use technologies like Electron, C++, and .NET to create robust applications that deliver high performance across different platforms."
        ],
        features: [{
                heading: 'Cross-Platform Compatibility',
                icon: FiMonitor,
                description: 'Building desktop applications that work seamlessly across Windows, macOS, and Linux operating systems.',
            },
            {
                heading: 'Custom Software Solutions',
                icon: FaCog,
                description: 'Developing software tailored to your specific business needs, streamlining operations and improving efficiency.',
            },
            {
                heading: 'Advanced Data Processing',
                icon: FaDatabase,
                description: 'Including powerful data processing capabilities for efficient data analysis and management.',
            },
            {
                heading: 'Intuitive Interfaces',
                icon: MdDevices,
                description: 'Designing user-friendly interfaces that are easy to navigate, ensuring a positive user experience.',
            },
            {
                heading: 'Secure Solutions',
                icon: FaLock,
                description: 'Implementing robust encryption and user authentication to protect sensitive business data.',
            },
            {
                heading: 'Integration Services',
                icon: FaLayerGroup,
                description: 'Offering seamless connectivity between your desktop software and other systems or applications.',
            },
        ],
    },
    {
        name: 'ai-solutions',
        title: 'AI Solutions',
        image: '/blog.png',
        description: 'Our AI solutions leverage cutting-edge technologies in computer vision, NLP, and predictive modeling to drive innovation and solve complex challenges.',
        details: [
            "We provide advanced AI solutions that help businesses automate processes, enhance decision-making, and unlock new growth opportunities. Using state-of-the-art machine learning algorithms and neural networks, we develop custom solutions tailored to your business needs. Whether it's image recognition, natural language processing, or predictive analytics, we have the expertise to build AI models that deliver real-world results.",
            "Our AI solutions are designed to be scalable, adaptable, and capable of processing large amounts of data in real-time. We use platforms like TensorFlow, Keras, and PyTorch to build intelligent systems that can learn, adapt, and make decisions. By integrating AI into your business operations, we can help you increase efficiency, reduce costs, and gain a competitive advantage in your industry."
        ],
        features: [{
                heading: 'Custom AI Models',
                icon: FaBrain,
                description: 'Developing custom AI models tailored to your needs, ensuring optimal performance and precision.',
            },
            {
                heading: 'Computer Vision',
                icon: FaEye,
                description: 'Advanced algorithms to analyze and interpret visual data, automating tasks like object detection and image recognition.',
            },
            {
                heading: 'Natural Language Processing (NLP)',
                icon: FaLanguage,
                description: 'Building systems that understand, interpret, and respond to human language, enhancing interaction and automation.',
            },
            {
                heading: 'Predictive Analytics',
                icon: FaChartLine,
                description: 'Utilizing analytics to forecast trends, detect anomalies, and optimize business processes.',
            },
            {
                heading: 'Real-Time Data Processing',
                icon: AiOutlineCloud,
                description: 'Processing and analyzing data in real-time, delivering insights and actions quickly and efficiently.',
            },
            {
                heading: 'AI-Powered Chatbots',
                icon: FaUsers,
                description: 'Enhancing customer service with AI chatbots, providing instant responses and support.',
            },
        ],
    }
];

const aboutData = {
    pageHeader: "About Me",
    heading: 'My vision is to create happy my clients',
    abstract: [
        "I am Mohammed Nowfal, a passionate and skilled software developer specializing in full-stack development, AI solutions, and innovative problem-solving.",
        "With expertise in web, mobile, and desktop applications, I strive to create efficient, scalable, and user-friendly solutions for businesses and individuals alike. My development process involves a combination of cutting-edge technologies, best coding practices, and a problem-solving mindset to ensure high performance and reliability.",
        "My mission is to leverage technology to solve real-world problems and drive digital transformation, making an impact in the evolving digital landscape. Whether it's automating workflows, enhancing user experiences, or deploying AI-powered solutions, I am committed to delivering excellence and innovation."
    ],
    detail: [
        "I specialize in full-stack development, AI, and software engineering, building scalable, high-performance applications. My expertise spans JavaScript, Python, and java, enabling me to create web, mobile, and AI-powered solutions that enhance productivity and efficiency. I constantly stay updated with emerging technologies to ensure my solutions are cutting-edge and adaptable to future trends.",
        "I focus on machine learning, computer vision, and automation, using TensorFlow, PyTorch, and OpenCV. From facial recognition to object detection, I develop intelligent solutions that improve security, business operations, and user experiences. My approach involves continuous learning and refining AI models to achieve higher accuracy and efficiency in real-world applications.",
        "I continuously explore new technologies, optimize architectures, and refine my skills in AI and cloud computing. My goal is to create cutting-edge solutions that drive digital transformation and make a lasting impact. By integrating automation and advanced analytics, I help businesses scale efficiently and stay ahead in a competitive digital landscape."
    ],
    image: "/nowfal.jpg",
    recordDummy: [1, 2, 3, 4],
    skillData: {
        heading: "My Tech Stack",
        paragraph: "I specialize in full-stack development, AI, and cloud computing. My experience spans frontend and backend frameworks, DevOps tools, and database management. I focus on integrating the latest technologies to create scalable, efficient, and innovative applications. With a deep understanding of cloud infrastructure, I ensure seamless integration of applications with robust, scalable cloud services.",
        technologies: {
            language: "JavaScript, Python, C++, Java, TypeScript",
            frontend: "React, Vue.js, Angular, Bootstrap, Tailwind CSS, Svelte, Next.js",
            backend: "Node.js, Django, Laravel, Flask, Express.js",
            aiml: "TensorFlow, PyTorch, OpenCV, Scikit-Learn, Keras",
            others: "Git, Docker, Firebase, MongoDB, PostgreSQL, MySQL, Redis, AWS, Azure, Google Cloud, Kubernetes"
        }
    },
    profileData: {
        heading: "Who Am I?",
        paragraph: "A software engineer passionate about innovation, problem-solving, and building intelligent solutions."
    }

}


const projectData = {
    heading: 'Designing a Better World Today',
    pageHeader: 'Our best works'
}

const blogData = {
    heading: 'latest from blog'
}

const heroData = {
    heading: 'hello i‘m mohammed nowfal, fullstack developer',
    subHeading: 'welcome my friend'
}

const navlist = [{
        name: 'home',
        to: 'hero',
        path: '/',
    },
    {
        name: 'About',
        to: 'about',
        path: '/',
    },
    {
        name: 'services',
        to: 'services',
        path: '/',
    },
    {
        name: 'Portfolio',
        to: 'portfolio',
        path: '/',
    },
    {
        name: 'blog',
        to: 'blog',
        path: '/',
    },
];

export { serviceData, aboutData, projectData, blogData, heroData, navlist };