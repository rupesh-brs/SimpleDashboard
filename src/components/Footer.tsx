import { LuCopyright } from "react-icons/lu";
export default function Footer(){
    return (
        <div className="w-screen bg-violet-400 h-16 flex flex-col md:flex-row gap-4 md:gap-12 items-center px-4 md:px-12 border-s-white border-b-2 shadow-2xl justify-center">
            <div className="flex items-center gap-2">
                <LuCopyright color="white" />
                <p className="text-white">2025 Vishnu Sai Finance Corporation. All Rights Reserved.</p>

            </div>
        </div>
    );
}