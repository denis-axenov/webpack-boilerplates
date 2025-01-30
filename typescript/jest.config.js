export default {
    preset: 'ts-jest',
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(t|j)s$": "@swc/jest",
    },
    testMatch: [
        "**/__tests__/**/*.ts"
    ],
    passWithNoTests: true
};