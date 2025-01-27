import { IoMdHome } from "react-icons/io";
import { IoMdCheckmarkCircle, IoMdCloseCircle, IoMdConstruct, IoMdWarning } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";

import DashboardComponent from "./DashboardComponent";
import ChildrenComponent from './ChildrenComponent';

export default function Main() {
    return (
        <div className="flex flex-col items-start justify-start ml-5 mb-44 mt-5">
            <div className="flex items-center gap-2 ml-6">
                <IoMdHome size={30} color="gray" />
                <h3 className="text-pretty">Home</h3>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-start ml-5">
                <DashboardComponent />
                <div className="flex flex-wrap gap-2 ml-5 mt-4 md:mt-0">
                    <ChildrenComponent 
                        bgColor="bg-blue-300" 
                        content="Pending Approvals" 
                        icon={<IoMdCheckmarkCircle size={20} />} 
                        value="777"
                    />
                    <ChildrenComponent 
                        bgColor="bg-red-500" 
                        content="Rejected Tasks" 
                        icon={<IoMdCloseCircle size={20} />} 
                        value="277"
                    />
                    <ChildrenComponent 
                        bgColor="bg-green-500" 
                        content="Repair Tasks" 
                        icon={<IoMdConstruct size={20} />} 
                        value="43"
                    />
                    <ChildrenComponent 
                        bgColor="bg-yellow-300" 
                        content="Initiate Repossession" 
                        icon={<IoMdWarning size={20} />} 
                        value="76"
                    />
                    <ChildrenComponent 
                        bgColor="bg-blue-500" 
                        content="Tasks in Progress" 
                        icon={<FaTasks size={20} />} 
                        value="78"
                    />
                    <ChildrenComponent 
                        bgColor="bg-yellow-100" 
                        content="Notes" 
                        icon={<CgNotes size={20} />} 
                    />
                    <ChildrenComponent 
                        bgColor="bg-gray-300" 
                        content="Settings" 
                        icon={<CiSettings size={20} />} 
                    />
                </div>
            </div>
        </div>
    );
}
