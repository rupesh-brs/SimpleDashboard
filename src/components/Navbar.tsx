'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiHome } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BsCollectionFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-screen bg-gray-700 h-20 flex flex-col md:flex-row gap-4 md:gap-12 items-center px-4 md:px-12 border-s-white border-b-2 shadow-2xl">
                <div>
                    <Image src='/logo.png' width={50} height={50} alt="logo" className='rounded-sm' />
                </div>

                {/* Home Section */}
                <div className="flex items-center gap-2">
                    <FiHome color='white' />
                    <h1 className="text-white hover:text-cyan-950">Home</h1>
                </div>

                {/* Tasks Section */}
                <div className="flex items-center gap-2">
                    <FaTasks color='white' />
                    <h1 className="text-white hover:text-blue-950">Tasks</h1>
                    <RiArrowDropDownLine color='white' size={20} onClick={toggleDropdown} className='cursor-pointer' />
                </div>

                {/* Loan Section */}
                <div className="flex items-center gap-2">
                    <FaMoneyBillAlt color='white' />
                    <h1 className="text-white hover:text-blue-950">Loan</h1>
                    <RiArrowDropDownLine color='white' size={20} onClick={toggleDropdown} className='cursor-pointer' />
                </div>

                {/* Reports Section */}
                <div className="flex items-center gap-2">
                    <GiNetworkBars color='white' />
                    <h1 className="text-white hover:text-blue-950">Reports</h1>
                    <RiArrowDropDownLine color='white' size={20} onClick={toggleDropdown} className='cursor-pointer' />
                </div>

                {/* Collections Section */}
                <div className="flex items-center gap-2">
                    <BsCollectionFill color='white' />
                    <h1 className="text-white hover:text-blue-950">Collections</h1>
                    <RiArrowDropDownLine color='white' size={20} onClick={toggleDropdown} className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
}
