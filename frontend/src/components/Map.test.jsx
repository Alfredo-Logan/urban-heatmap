import { render, screen } from "@testing-library/react";
import Map from "./Map";

describe("Map Component", () => {
    it("provides the correct location coordinates", async () => {
        render(<Map />);

        const marker = screen.getByTestId("mock-marker");
        expect(marker).toHaveAttribute("data-position", "[51.500786,-0.124681]");
    });

    it("renders the correct popup text for location marker", () => {
        render(<Map />);

        const popup = screen.getByTestId("mock-popup");
        expect(popup).toHaveTextContent(/your location/i);
    });
});
