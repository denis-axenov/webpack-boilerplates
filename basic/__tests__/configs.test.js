import {describe, it, expect} from "@jest/globals";
import webpackConfig from "../webpack.config";
import postcssConfig from "../postcss.config";
import stylelintConfig from "../stylelint.config";
import eslintConfig from "../eslint.config";
import jestConfig from "../jest.config";


describe("Test Configs", () => {
    it("Webpack config should be an function", () => {
        expect(typeof webpackConfig).toBe("function");
    });

    it("PostCSS config should be an function", () => {
        expect(typeof postcssConfig).toBe("function");
    });

    it("Stylelint config should be an object", () => {
        expect(typeof stylelintConfig).toBe("object");
    });

    it("ESLint config should be an object", () => {
        expect(typeof eslintConfig).toBe("object");
    });

    it("Jest config should be an object", () => {
        expect(typeof jestConfig).toBe("object");
    });
});