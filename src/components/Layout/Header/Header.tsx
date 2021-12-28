import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarToggler,
  NavbarCollapse,
  NavbarLink,
  NavbarNav,
} from '../../Elements';
import NavbarExample from './Navbar';

export default function Header(): JSX.Element {
  return (
    <NavbarExample />
    // <div className="mb-8">
    //   <Navbar className="text-white bg-indigo-900">
    //     <NavbarBrand href="#">
    //       <svg
    //         className="w-9 h-9"
    //         preserveAspectRatio="xMidYMid"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 256 153.6"
    //       >
    //         <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
    //           <stop offset="0" stopColor="#2298bd" />
    //           <stop offset="1" stopColor="#0ed7b5" />
    //         </linearGradient>
    //         <path
    //           d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
    //           fill="url(#a)"
    //         />
    //       </svg>
    //     </NavbarBrand>
    //     <NavbarToggler />
    //     <NavbarCollapse>
    //       <NavbarNav orientation="start">
    //         <NavbarItem>
    //           <NavbarLink href="#">Get Started</NavbarLink>
    //         </NavbarItem>
    //         <NavbarItem>
    //           <NavbarLink href="#">Core Concepts</NavbarLink>
    //         </NavbarItem>
    //       </NavbarNav>
    //       <NavbarNav orientation="end">
    //         <NavbarItem>
    //           <NavbarLink href="#">Base Styles</NavbarLink>
    //         </NavbarItem>
    //         <NavbarItem>
    //           <NavbarLink href="#">Customization</NavbarLink>
    //         </NavbarItem>
    //       </NavbarNav>
    //     </NavbarCollapse>
    //   </Navbar>
    // </div>
    // <div>
    //   <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
    //     <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    //       <div className="container-fluid">
    //         <a className="text-xl text-black font-semibold" href="#">
    //           Navbar
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}
