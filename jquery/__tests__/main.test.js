import {jest, describe, it, expect, beforeEach, afterEach} from "@jest/globals";
import $ from "jquery";
import "@/scripts/main";

describe("jQuery Ready Event", () => {
    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation(jest.fn());
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should log "DOM Loaded" when DOM is ready', () => {
        $(document).trigger("ready");

        expect(console.log).toHaveBeenCalledWith("DOM Loaded");
    });
});