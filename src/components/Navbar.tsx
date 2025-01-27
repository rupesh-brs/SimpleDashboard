'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiHome } from "react-icons/fi";
import { FaTasks, FaMoneyBillAlt } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BsCollectionFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (menu) => {
        setHoveredMenu(menu === hoveredMenu ? null : menu);
    };

    const handleMouseEnter = (menu) => {
        setHoveredMenu(menu);
    };

    const handleMouseLeave = () => {
        setHoveredMenu(null);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-screen bg-gray-700 min-h-[80px] flex flex-col md:flex-row gap-4 md:gap-12 items-center px-4 md:px-12 border-s-white border-b-2 shadow-2xl">
                <div>
                    <Image src='/logo.png' width={50} height={50} alt="logo" className='rounded-md' />
                </div>

                {/* Menu Items */}
                {[
                    { name: 'Home', icon: <FiHome color='white' />, dropdown: null },
                    { 
                        name: 'Tasks', 
                        icon: <FaTasks color='white' />, 
                        dropdown: (
                            <>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">View Tasks</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Add Task</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Task Settings</li>
                            </>
                        )
                    },
                    { 
                        name: 'Loan', 
                        icon: <FaMoneyBillAlt color='white' />, 
                        dropdown: (
                            <>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">View Loans</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Request Loan</li>
                            </>
                        )
                    },
                    { 
                        name: 'Reports', 
                        icon: <GiNetworkBars color='white' />, 
                        dropdown: (
                            <>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Daily Report</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Monthly Report</li>
                            </>
                        )
                    },
                    { 
                        name: 'Collections', 
                        icon: <BsCollectionFill color='white' />, 
                        dropdown: (
                            <>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">View Collections</li>
                                <li className="p-2 hover:bg-gray-200 cursor-pointer">Manage Collections</li>
                            </>
                        )
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-center gap-2"
                        onMouseEnter={() => handleMouseEnter(item.name.toLowerCase())}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => item.dropdown && toggleDropdown(item.name.toLowerCase())}
                    >
                        {item.icon}
                        <h1 className="text-white">{item.name}</h1>
                        {item.dropdown && (
                            <>
                                <RiArrowDropDownLine color='white' size={20} className='cursor-pointer' />
                                {hoveredMenu === item.name.toLowerCase() && (
                                    <div className="absolute top-full mt-2 w-32 bg-white shadow-lg rounded-md p-2 z-10">
                                        <ul>
                                            {item.dropdown}
                                        </ul>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}

                {/* Search Bar */}
                <div className="ml-auto">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-white text-black rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-500"
                    />
                </div>
            </div>
        </div>
    );
}
