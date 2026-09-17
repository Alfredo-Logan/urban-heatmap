import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition([position.coords.latitude, position.coords.longitude]);
            },
            (err) => {
                console.error(err);
                setError("Could not fetch location.");
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 60000,
            }
        );
    }, []);

    if (!position) {
        return <div>{error ? error : "Loading user location..."}</div>;
    }

    return (
        <div className="h-full self-stretch md:mt-0 md:my-8">
            <MapContainer
                className="h-full w-full border border-gray-400 rounded-lg"
                center={position}
                zoom={13}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
