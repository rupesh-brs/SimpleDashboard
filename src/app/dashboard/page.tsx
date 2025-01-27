import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Dashboard() {
    return (
        <div className="flex flex-col justify-between items-start">
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}
