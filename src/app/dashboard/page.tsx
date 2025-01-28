import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full p-4 md:p-8">
                <Main />
            </main>
            <Footer />
        </div>
    );
}
