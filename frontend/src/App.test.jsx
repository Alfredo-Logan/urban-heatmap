import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    it("requests user location on mount", () => {
        render(<App />);

        expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalledTimes(1);
    });

    it("displays loading message while waiting for geolocation", () => {
        navigator.geolocation.getCurrentPosition.mockImplementationOnce(() => {});
        render(<App />);

        const loadingElement = screen.getByText(/loading user location\.\.\./i);
        expect(loadingElement).toBeInTheDocument();
    });

    it("displays error text when location can't be found", () => {
        vi.spyOn(navigator.geolocation, "getCurrentPosition").mockImplementationOnce(
            (successCallback, errorCallback) => {
                errorCallback({
                    code: 1,
                    message: "User denied Geolocation",
                });
            }
        );

        render(<App />);

        screen.getByText(/could not fetch location./i);
        expect(screen.queryByTestId("mock-marker")).not.toBeInTheDocument();

        vi.restoreAllMocks();
    });

    it("renders map component", () => {
        render(<App />);

        const mapContainer = screen.getByTestId("mock-map-container");
        expect(mapContainer).toBeInTheDocument();
    });

    it("renders the header", () => {
        render(<App />);

        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
    });
});
