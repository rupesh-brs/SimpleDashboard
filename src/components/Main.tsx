import { IoMdHome } from "react-icons/io";
import { IoMdCheckmarkCircle, IoMdCloseCircle, IoMdConstruct, IoMdWarning } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";

import DashboardComponent from "./DashboardComponent";
import ChildrenComponent from './ChildrenComponent';

const childrenData = [
    {
        bgColor: "bg-blue-300",
        content: "Pending Approvals",
        icon: <IoMdCheckmarkCircle size={20} />,
        value: "777",
    },
    {
        bgColor: "bg-red-500",
        content: "Rejected Tasks",
        icon: <IoMdCloseCircle size={20} />,
        value: "277",
    },
    {
        bgColor: "bg-green-500",
        content: "Repair Tasks",
        icon: <IoMdConstruct size={20} />,
        value: "43",
    },
    {
        bgColor: "bg-yellow-300",
        content: "Initiate Repossession",
        icon: <IoMdWarning size={20} />,
        value: "76",
    },
    {
        bgColor: "bg-blue-500",
        content: "Tasks in Progress",
        icon: <FaTasks size={20} />,
        value: "78",
    },
    {
        bgColor: "bg-yellow-100",
        content: "Notes",
        icon: <CgNotes size={20} />,
    },
    {
        bgColor: "bg-gray-300",
        content: "Settings",
        icon: <CiSettings size={20} />,
    },
];

export default function Main() {
    return (
        <div className="flex flex-col items-start justify-start mx-5 my-5 md:mb-44">
            <div className="flex items-center gap-2">
                <IoMdHome size={30} color="gray" />
                <h3 className="text-pretty">Home</h3>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-start mt-4">
                <DashboardComponent />
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                    {childrenData.map((child, index) => (
                        <ChildrenComponent 
                            key={index} 
                            bgColor={child.bgColor} 
                            content={child.content} 
                            icon={child.icon} 
                            value={child.value} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
