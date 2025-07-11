import { div } from 'framer-motion/m';
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import HireME from '../hireMe/HireME';

const socialLinks = [
  { icon: <FaFacebookF />, url: 'https://facebook.com', name: 'Facebook' },
  { icon: <FaTwitter />, url: 'https://twitter.com', name: 'Twitter' },
  { icon: <FaInstagram />, url: 'https://instagram.com', name: 'Instagram' },
  { icon: <FaLinkedinIn />, url: 'https://linkedin.com', name: 'LinkedIn' },
  { icon: <FaGithub />, url: 'https://github.com', name: 'GitHub' },
];

export default function NavbarIcons() {
  
  return (
    <div className='flex justify-end lg:justify-center mr-[8%] items-center lg:mr-20'>
       <div className="hidden lg:block">
      <div className='lg:flex gap-8'>
        {socialLinks.map(({ icon, url, name }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="text-gray-600 hover:text-[#F97316] text-2xl transition-colors duration-200"
        >
          {icon}
        </a>
      ))}
    </div>
      </div>

      <HireME className='relative h-20 w-20 lg:hidden'/>

    </div>
  );
}