import $ from 'jquery';
import {test, expect} from "@jest/globals";
import "@scripts/plugin";


test.each([
    'string',
    123,
    true,
    null,
    undefined,
    []
])("should throw an error if the parameter is not an object: %p", (param) => {
    expect(() => {
        $(document).plugin(param);
    }).toThrow("Parameter must be an object");
});

test("should throw an error if required parameters are not provided", () => {
    expect(() => {
        $(document).plugin({
            param1: 1
        });
    }).toThrow("Required parameters param1 and param2 must be provided");
});

test("should throw an error if required parameters are not numbers", () => {
    expect(() => {
        $(document).plugin({
            param1: "1",
            param2: 2
        });
    }).toThrow("Parameters param1 and param2 must be numbers");
});