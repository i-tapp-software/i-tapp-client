const service1 = require("@/assets/icons/services-1.svg");
const service2 = require("@/assets/icons/services-2.svg");
const service3 = require("@/assets/icons/services-3.svg");
const service4 = require("@/assets/icons/services-4.svg");

export const data: {
  services: { icon: any, title: string, description: string }[],
  how_it_works: { title: string, description: string }[],
  faqs: { question: string, answer: string }[]
} = {
  services: [
    {
      icon: service1,
      title: "Internship Matching",
      description:
        "Unlock a personalized internship experience. We connects students with vacancies that align with their education.",
    },
    {
      icon: service2,
      title: "Effortless Application",
      description:
        "Companies can effortlessly manage internship applications, ensuring a seamless experience from submission to selection.",
    },
    {
      icon: service3,
      title: "One-Click Application",
      description:
        "Application to numerous internships with single and streamlined profile therefore saving you time and relieving stress.",
    },
    {
      icon: service4,
      title: "Company Showcase",
      description:
        "I-TAPP provides companies with a dynamic showcase to display their values, culture, and internship opportunities.",
    },
  ],
  how_it_works: [
    {
      title: "Get Started and get verified",
      description:
        "Click on the “Get started” button. Complete the onboarding process; you will be",
    },
    {
      title: "Complete your profile",
      description:
        "Your profile is the gateway to making meaningful connections. Students, create a  profile showcasing your field of study. Companies, build a  profile highlighting your brand and internship opportunities.",
    },
    {
      title: "Connect and thrive",
      description:
        "It's time to bridge the gap. Students, apply to multiple internships with few clicks and taps. Companies, efficiently manage applications and connect with students seamlessly.",
    },
  ],
  faqs: [
    {
      question: "What is iTapp?",
      answer: `Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.  make up the bulk of the card's content.Some quick example text to build on`,
    },
    {
      question: "How does iTapp work?",
      answer: "",
    },
    {
      question: "Is iTapp free to use?",
      answer: "",
    },
  ],
};
