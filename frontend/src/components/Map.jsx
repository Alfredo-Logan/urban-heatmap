import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);
    const isRequested = useRef(false); // used to work around strict mode calling for location twice

    // used to get location data asynchronously from Geolocation API
    useEffect(() => {
        if (isRequested.current) return;
        isRequested.current = true;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition([position.coords.latitude, position.coords.longitude]);
            },
            (err) => {
                console.error(err);
                setError("Could not fetch location.");
            }
        );
    }, []);

    if (!position) {
        return <div>{error ? error : "Loading user location..."}</div>;
    }

    return (
        <div className="h-[300px] w-[600px] border border-gray-400 rounded-lg overflow-hidden">
            <MapContainer
                className="h-full w-full"
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
