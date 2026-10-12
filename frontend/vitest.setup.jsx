import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// mock map and map components
vi.mock("react-leaflet", () => ({
    MapContainer: ({ children, center, zoom, ...props }) => (
        <div
            data-testid="mock-map-container"
            data-center={JSON.stringify(center)}
            data-zoom={zoom}
            {...props}
        >
            {children}
        </div>
    ),

    TileLayer: () => <div data-testid="mock-tile-layer" />,

    Marker: ({ position, children, alt, ...props }) => (
        <div
            data-testid="mock-marker"
            data-position={JSON.stringify(position)}
            aria-label={alt}
            {...props}
        >
            {children}
        </div>
    ),

    Popup: ({ children, ...props }) => (
        <div data-testid="mock-popup" {...props}>
            {children}
        </div>
    ),
}));

// mock geolocation call & successful response
const mockGetCurrentPosition = vi.fn((success) =>
    success({
        coords: { latitude: 41.45, longitude: -82.02 },
    })
);

vi.stubGlobal("navigator", {
    userAgent: "node.js",
    geolocation: {
        getCurrentPosition: mockGetCurrentPosition,
        watchPosition: vi.fn(),
        clearWatch: vi.fn(),
    },
});
