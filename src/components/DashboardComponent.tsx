import { MdOutlineDashboard } from "react-icons/md";

export default function DashboardComponent() {
    return (
        <div className="flex flex-wrap items-center justify-center p-4 hover:shadow-inner">
            <div className="card bg-orange-400 shadow-lg rounded-lg p-6 m-4 w-full sm:w-52 h-52 sm:h-96 flex-shrink-0">
                <div className="card-body flex flex-col items-center justify-center">
                    <h2 className="card-title text-xl font-semibold mt-12">Dashboard</h2>
                    <p className="text-gray-500">
                        <MdOutlineDashboard size={50} className="rounded-full" />
                    </p>
                </div>
            </div>
        </div>
    );
}