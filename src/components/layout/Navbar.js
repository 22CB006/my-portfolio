import React from 'react';
import { Home, Briefcase, FolderOpen, User, Mail } from 'lucide-react';
import { AnimeNavbar } from '../ui/AnimeNavbar';
import { siteConfig } from '../../data/config';

// Map navigation items to include icons
const navItems = [
  {
    name: 'Home',
    url: '/',
    icon: Home,
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: FolderOpen,
  },
  {
    name: 'About',
    url: '/about',
    icon: User,
  },
  {
    name: 'Contact',
    url: '/contact',
    icon: Mail,
  },
];

const Navbar = () => {
  return <AnimeNavbar items={navItems} defaultActive="Home" />;
};

export default Navbar;
