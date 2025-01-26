import {jest, describe, test, expect, beforeAll, afterAll} from "@jest/globals";
import "@/scripts/main";


describe("DOMContentLoaded Event", () => {
    beforeAll(() => {
        global.console = {
            log: jest.fn(),
        };
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("should call console.log when DOM content is loaded", () => {
        document.dispatchEvent(new Event("DOMContentLoaded"));

        expect(console.log).toHaveBeenCalledWith("DOM Loaded");
    });
});