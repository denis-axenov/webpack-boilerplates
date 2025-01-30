export default {
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testEnvironment: "jsdom",
    testMatch: [
        "**/__tests__/**/*.js"
    ],
    transform: {
        "^.+\\.js$": "@swc/jest",
    },
    passWithNoTests: true
};