export default (context) => {
    const isProduction = context.mode === "production";

    return {
        plugins: {
            "postcss-preset-env": {
                autoprefixer: isProduction ? {} : false
            },
            "cssnano": isProduction ? {} : false
        }
    };
};