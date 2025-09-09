/*import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Bitcoin",
    short: "BTC/USD",
    icon: "/images/icons/icon-bitcoin.svg",
    background: "bg-warning/20",
    price: "$93,291.24",
    mark: "$94,040.99 (-0.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Ethereum",
    short: "ETH/USD",
    icon: "/images/icons/icon-ethereum.svg",
    background: "bg-light_grey",
    price: "$3,128.84",
    mark: "$4,878.26 (-35.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Polkadot",
    short: "BTC/USD",
    icon: "/images/icons/icon-bitcoin-circle.svg",
    background: "bg-warning/20",
    price: "$443.27",
    mark: "$3,785.82 (-88.3%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Litecoin",
    short: "LTC/USD",
    icon: "/images/icons/icon-litecoin.svg",
    background: "bg-light_grey",
    price: "$86.11",
    mark: "$410.26 (-79.1%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Solana",
    short: "SOL/USD",
    icon: "/images/icons/icon-solana.svg",
    background: "bg-light_grey",
    price: "$238.70",
    mark: "$259.96 (-8.2%)",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Dogecoin",
    short: "DOGE/USD",
    icon: "/images/icons/icon-dogecoin.svg",
    background: "bg-light_grey",
    price: "$0.394",
    mark: "$0.7316 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/portfolio-icon-1.svg",
    title: "Manage your portfolio",
  },
  {
    image: "/images/portfolio/portfolio-icon-2.svg",
    title: "Vault protection",
  },
  {
    image: "/images/portfolio/portfolio-icon-3.svg",
    title: "Mobile apps",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "100% Secure" },
  { title: "Free figma file" },
  { title: "A fraction of the cost" },
  { title: "Powerful in performance" },
  { title: "More durable" },
  { title: "Designed for crypto" },
  { title: "Easier to use" },
  { title: " 100% free framer template" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/peak-icon-1.svg",
    title: "24/7 Support",
    text: "Need help? Get your requests solved quickly via support team.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/peak-icon-2.svg",
    title: "Community",
    text: "Join the conversations on our worldwide OKEx communities",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/peak-icon-3.svg",
    title: "Academy",
    text: "Learn blockchain and<br /> crypto for free.",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Planning",
    text: "Map the project's scope and architecture",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Refinement",
    text: "Refine and improve your solution",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Prototype",
    text: "Build a working prototype to test your product",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Support",
    text: "Deploy the product and ensure full support by us",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
*/
// src/app/api/data.tsx

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Privacy", herf: "#" },
  { label: "Projects", herf: "#" },
];



import { IconType } from 'react-icons';

import { AiOutlineRobot, AiOutlineLineChart } from 'react-icons/ai';

export interface CardItem {
  title: string;
  short: string;
  icon: IconType;
  background: string;
  mark: string;
  width?: number; 
  height?: number;
  padding: string;
}

import { FaMobileAlt, FaReact, FaLaravel, FaWordpress } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { SiOpenai } from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';
import { RiCustomerService2Line } from 'react-icons/ri';

export interface CardItem {
  title: string;
  short: string;
  icon: IconType;
  background: string;
  mark: string;
  padding: string;
}

export const pricedeta: CardItem[] = [
  {
    title: "AI-Powered Web Apps",
    short: "Smart, responsive applications",
    icon: SiOpenai,
    background: "bg-primary/20",
    mark: "Build AI-enhanced web applications that adapt to user behavior and provide intelligent features.",
    padding: "p-4",
  },
  {
    title: "Mobile App Development",
    short: "iOS & Android platforms",
    icon: FaMobileAlt,
    background: "bg-secondary/20",
    mark: "Develop fast, reliable, and user-friendly mobile applications tailored to your business needs.",
    padding: "p-4",
  },
  {
    title: "Responsive Web Design",
    short: "Modern & adaptive sites",
    icon: MdWeb,
    background: "bg-light_grey",
    mark: "Create visually appealing, responsive websites that deliver excellent user experiences on all devices.",
    padding: "p-4",
  },
  {
    title: "Custom Software Solutions",
    short: "Tailored apps & systems",
    icon: FaCode,
    background: "bg-tealGreen/20",
    mark: "Develop customized applications and systems that perfectly fit your business requirements.",
    padding: "p-4",
  },
  {
    title: "Advanced Feature Integration",
    short: "Payments, auth, realtime",
    icon: FiSettings,
    background: "bg-primary/20",
    mark: "Integrate complex functionalities such as payment gateways, authentication, and real-time data systems with best practices.",
    padding: "p-4",
  },
  {
    title: "Consultation & Strategy",
    short: "Plan before you build",
    icon: GiBrain,
    background: "bg-secondary/20",
    mark: "Receive expert guidance to define project scope, technology stack, and roadmap tailored to your timeline and budget.",
    padding: "p-4",
  },
  {
    title: "Maintenance & Support",
    short: "Post-launch care",
    icon: RiCustomerService2Line,
    background: "bg-light_grey",
    mark: "Ensure continuous performance with updates, monitoring, and proactive support for your applications and websites.",
    padding: "p-4",
  },
];




// /app/api/data.ts
import { ReactElement } from 'react';
import {  FaRobot, FaSearch, FaPaintBrush, FaServer, FaCogs } from 'react-icons/fa';

export const servicesData: { icon: ReactElement; title: string }[] = [
  { icon: <FaMobileAlt size={28} />, title: "Custom Web & Mobile Apps" },
  { icon: <FaDesktop size={28} />, title: "Responsive Websites" },
  { icon: <FaRobot size={28} />, title: "AI-Powered Features" },
  { icon: <FaSearch size={28} />, title: "SEO & Performance Optimization" },
  { icon: <FaPaintBrush size={28} />, title: "UI/UX Design & Prototyping" },
  { icon: <FaServer size={28} />, title: "Scalable Backends & APIs" },
  { icon: <FaCogs size={28} />, title: "Custom Solutions & Consulting" },
];


export const upgradeData: { title: string }[] = [
  { title: "On-time delivery" },
  { title: "Clean, testable code" },
  { title: "Scalable architecture" },
  { title: "Pixel-perfect UI" },
  { title: "SEO-ready websites" },
  { title: "Secure by design" },
  { title: "Post-launch support" },
  { title: "Free consultation" },
];

import { ReactNode } from "react";
import { FaCode, FaBolt, FaDesktop } from "react-icons/fa";
export const perksData: {
  icon: ReactNode;
  title: string;
  text: string;
}[] = [
  {
    icon: <FaCode size={44} className="text-primary" />,
    title: "Efficient Coding",
    text: "Write clean, maintainable code that scales effortlessly.",
  },
  {
    icon: <FaBolt size={44} className="text-primary" />,
    title: "Agile Development",
    text: "Fast iterations and continuous improvements to deliver value quickly.",
  },
  {
    icon: <FaDesktop size={44} className="text-primary" />,
    title: "Optimized UX",
    text: "User-focused interfaces with accessibility and performance in mind.",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Discovery",
    text: "Clarify goals, users, and success metrics. Define scope and roadmap.",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Design",
    text: "Wireframes → UI design → prototypes. Iterate quickly with feedback.",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Development",
    text: "Implement features with clean code, reviews, and automated testing.",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Launch & Support",
    text: "Deploy, monitor, and optimize. We handle updates and scaling.",
    position: "md:bottom-0 md:right-0",
  },
];

// Keep this export to avoid breaking legacy imports (e.g., buy-form)
export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
