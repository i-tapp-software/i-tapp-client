const service1 = require("@/assets/icons/services-1.svg");
const service2 = require("@/assets/icons/services-2.svg");
const service3 = require("@/assets/icons/services-3.svg");
const service4 = require("@/assets/icons/services-4.svg");

export const data: {
  services: { icon: any; title: string; description: string }[];
  how_it_works: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
} = {
  services: [
    {
      icon: service1,
      title: "Tailored Internship Experience",
      description:
        "Discover a tailored SIWES application, and unlock a personalized experience.",
    },
    {
      icon: service2,
      title: "Track Applications",
      description: "Effortlessly track and manage all SIWES applications.",
    },
    {
      icon: service3,
      title: "Maximize Your Reach",
      description:
        "Apply to various companies at a go, one profile, multiple comapny application",
    },
    {
      icon: service4,
      title: "Verified Companies",
      description:
        "Connect with companies that provide reliable, secure, and valuable student experince, essential for a successful industrial experience.",
    },
  ],
  how_it_works: [
    {
      title: "Get Started and get verified",
      description:
        "Click on the “Get started” button. Complete the onboarding process;",
    },
    {
      title: "Complete your profile",
      description:
        "Your profile is the gateway to making meaningful connections. Create a  profile showcasing your field of study.",
    },
    {
      title: "Connect and thrive",
      description:
        "Apply to various comapnies of your choice, you are one-tapp away from your desired IT experience.",
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
