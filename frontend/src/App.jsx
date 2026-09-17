import Map from "./components/Map";
import { UserKey, Menu } from "lucide-react";

function App() {
    return (
        <main className="bg-pastel-green h-screen flex flex-col items-center md:px-8">
            <header className="self-stretch flex justify-between items-center m-3 md:mx-0 md:my-8">
                <div className="flex gap-1 items-center">
                    <Menu className="size-4 md:size-8" />
                    <p className="text-xs md:text-xl">Navigation</p>
                </div>
                <h1 className="md:text-5xl font-bold">Urban HeatMap</h1>
                <div className="flex gap-1 items-center">
                    <UserKey className="size-4 md:size-8" />
                    <p className="text-xs md:text-xl">User Login</p>
                </div>
            </header>
            <Map />
        </main>
    );
}

export default App;
