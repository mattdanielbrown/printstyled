"use strict";

const parseOptions = require("./util/parse-options");

module.exports = (input, colorName, otherOpts) => {
    /*if (typeof input !== "string") {
        throw new TypeError(`Expected a string, got ${typeof input}`);
    }*/

    let defaultColor = "white";
    let defaultText = "Testing";
    let defaultStyle = "none";
    return parseOptions(
        input || defaultText,
        colorName || defaultColor,
        otherOpts || defaultStyle
    );
};
