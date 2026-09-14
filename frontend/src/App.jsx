import Map from "./components/Map";

function App() {
    return (
        <main className="bg-pastel-green min-h-screen flex flex-col items-center">
            <h1 className="p-8 text-5xl font-bold">Urban HeatMap</h1>
            <Map />
        </main>
    );
}

export default App;
