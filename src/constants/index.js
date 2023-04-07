import {
  iconAccess,
  iconCollaboration,
  iconSecurity,
  iconAnyFile,
  profile1,
  profile2,
  profile3,
  intro,
  stayProductive,
} from "../assets";

export const navLinks = ["Features", "Team", "Sign In"];

export const header = {
  heading: "All your files in one secure location, accessible anywhere.",
  text: "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
  button: "Get Started",
  image: intro,
};

export const features = [
  {
    id: 1,
    heading: "Access your files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    icon: iconAccess,
  },
  {
    id: 2,
    heading: "Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    icon: iconSecurity,
  },
  {
    id: 3,
    heading: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    icon: iconCollaboration,
  },
  {
    id: 4,
    heading: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    icon: iconAnyFile,
  },
];

export const stayProductiveObj = {
  heading: "Stay productive, wherever you are",
  text: [
    "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
    "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  ],
  image: stayProductive,
  link: "See how Fylo works",
};

export const testimonials = [
  {
    id: 1,
    name: "Satish Patel",
    post: "Founder & CEO, Huddle",
    image: profile1,
    testimonial:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 2,
    name: "Bruce McKenzie",
    post: "Founder & CEO, Huddle",
    image: profile2,
    testimonial:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 3,
    name: "Iva Boyd",
    post: "Founder & CEO, Huddle",
    image: profile3,
    testimonial:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
];

export const cta = {
  heading: "Get early access today",
  text: "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.",
  button: "Get Started For Free",
};

export const footer = {
  address:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  phoneNo: "+1-543-123-4567",
  email: "example@fylo.com",
  links1: ["About Us", "Jobs", "Press", "Blog"],
  links2: ["Contact Us", "Terms", "Privacy"],
  socials: [],
};
