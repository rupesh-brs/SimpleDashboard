'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiHome } from "react-icons/fi";
import { FaTasks, FaMoneyBillAlt } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BsCollectionFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiGrid41 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const menuItems = [
    { name: 'Home', icon: <FiHome color='white' />, dropdown: null },
    { name: 'Dashboard', icon: <CiGrid41 color='white' />, dropdown: ['Loan', 'colendin'] },
    { name: 'Tasks', icon: <FaTasks color='white' />, dropdown: ['Task Todo', 'Task in progress', 'Task Rejected','Task Repair','Task Approved','Batch Jobs','BSP Drafts','BSP  Repairs','Draft Propsol','Workflow Repair','Task Reallocation'] },
    { name: ' Vehicle Loan', icon: <FaMoneyBillAlt color='white' />, dropdown: ['New Loan', 'BSP Drafts Loans','Loan Requests','Customers','Vehicles','Sieze Management','Sieze Groups','Fleet Management','Uploads','Trash','Repossessiion','RTO Management','New Customer','Sanction Management','Draft Loans'] },
    { name: 'Reports', icon: <GiNetworkBars color='white' />, dropdown: ['Daily Report', 'Monthly Report'] },
    { name: 'Collections', icon: <BsCollectionFill color='white' />, dropdown: ['Collection Allocation', 'Communications','Collection Reports','Due Reports','MIS Reports','Customized Reports'] },
];

export default function Navbar() {
    const [hoveredMenu, setHoveredMenu] = useState(null);
    // const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex flex-col justify-center items-center">
            <div className="w-full bg-white min-h-[90px] flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-between px-4 md:px-12 border-s-white border-b-2 shadow-2xl">
                <Image src='/logo.png' width={50} height={50} alt="logo" className='rounded-md' />
                <Image src='/pooja.png' width={50} height={50} alt="logo" className='rounded-md' />
                <div className="flex items-center justify-center">
                    <CiGrid41 size={30} className="rounded-full" />
                    <IoIosNotificationsOutline size={30} />
                    <p className='text-gray-100'>|</p>
                    <MdAccountCircle size={30} color='cyan' />
                    <p className='text-gray-400 text-center text-pretty px-4'>VSF Nyros Technologies</p>
                </div>
            </div>
            
            <div className="w-screen bg-gray-700 min-h-[90px] flex flex-col md:flex-row gap-4 md:gap-12 items-center px-4 md:px-12 border-s-white border-b-2 shadow-2xl">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex items-center gap-2 cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(item.name.toLowerCase())}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => item.dropdown && toggleDropdown(item.name.toLowerCase())}
                    >
                        {item.icon}
                        <h1 className="text-white">{item.name}</h1>
                        {item.dropdown && (
                            <>
                              <RiArrowDropDownLine color='white' size={20} />
                                {hoveredMenu === item.name.toLowerCase() && (
                                    <div className="absolute top-full mt-2 w-32 bg-gray-100 shadow-lg  p-2 z-10 px-0">
                                        <ul>
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <li key={subIndex} className="p-2 hover:bg-gray-200 cursor-pointer">{subItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
                
                <div className="ml-auto w-full md:w-1/4">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-white text-black rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-cyan-500"
                    />
                </div>
            </div>
        </div>
    );
}
