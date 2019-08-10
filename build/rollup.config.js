import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
    input: "src/index.js",
    output: {
        name: "Vuenity",
        exports: "named"
    },
    plugins: [
        babel({ presets: ["es2015-rollup", "stage-0"] }),
        vue({
            css: true,
            compileTemplate: true
        }),
        commonjs(),
        buble()
    ]
};
