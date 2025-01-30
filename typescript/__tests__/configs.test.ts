import fs from "fs";
import path from "path";
import {describe, it, expect, beforeAll} from "@jest/globals";
import webpackConfig from "../webpack.config";
import postcssConfig from "../postcss.config";
import stylelintConfig from "../stylelint.config";
import eslintConfig from "../eslint.config";
import jestConfig from "../jest.config";


describe("Webpack Config", () => {
    it("should be a function", () => {
        expect(typeof webpackConfig).toBe("function");
    });

    it("should configure production mode correctly", () => {
        const env = {};
        const argv = {
            mode: "production"
        };
        const config = webpackConfig(env, argv);

        expect(config.output.path).toBe(path.resolve(process.cwd(), "dist"));
        expect(config.mode).toBe("production");
    });

    it("should configure development mode correctly", () => {
        const env = {};
        const argv = {
            mode: "development"
        };
        const config = webpackConfig(env, argv);

        expect(config.output.path).toBe(path.resolve(process.cwd(), "dist"));
        expect(config.mode).toBe("development");
    });

    it("should include lint plugins when env.lint is true", () => {
        const env = {
            lint: true
        };
        const argv = {
            mode: "development"
        };
        const config = webpackConfig(env, argv);
        const pluginNames = config.plugins.map(plugin => plugin.constructor.name);

        expect(pluginNames).toContain("StylelintWebpackPlugin");
        expect(pluginNames).toContain("ESLintWebpackPlugin");
    });
});

describe("PostCSS Config", () => {
    it("should be a function", () => {
        expect(typeof postcssConfig).toBe("function");
    });

    it("should return the config for production mode", () => {
        const context = {
            mode: "production"
        };
        const result = postcssConfig(context);

        expect(result).toEqual({
            plugins: {
                "postcss-preset-env": {autoprefixer: {}},
                "cssnano": {},
            },
        });
    });

    it("should return the config for non-production mode", () => {
        const context = {
            mode: "development"
        };
        const result = postcssConfig(context);

        expect(result).toEqual({
            plugins: {
                "postcss-preset-env": {autoprefixer: false},
                "cssnano": false,
            },
        });
    });
});

describe("Stylelint Config", () => {
    it("should be an object", () => {
        expect(typeof stylelintConfig).toBe("object");
    });
});

describe("ESLint Config", () => {
    it("should be an object", () => {
        expect(typeof eslintConfig).toBe("object");
    });
});

describe("Jest Config", () => {
    it("should be an object", () => {
        expect(typeof jestConfig).toBe("object");
    });
});

describe("package.json", () => {
    let packageJson: {
        type: any;
    };

    beforeAll(() => {
        const packageJsonPath = path.resolve(process.cwd(), "package.json");
        const rawData = fs.readFileSync(packageJsonPath, "utf-8");
        packageJson = JSON.parse(rawData);
    });

    it("should have the correct type", () => {
        expect(packageJson.type).toBe("module");
    });
});