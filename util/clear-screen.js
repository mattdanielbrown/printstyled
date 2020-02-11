"use strict";
const csi = require("control-sequence-introducer");

// Code String
function clearToEndOfScreenString() {
	return csi + "0" + "J"
}

function clearToBegOfScreenString() {
	return csi + "1" + "J"
}

function clearScreenString() {
	return csi + "2" + "J"
}

const clearToEndOfScreen = () => {
	process.stdout.write(clearToEndOfScreenString())
};
const clearToBegOfScreen = () => {
	process.stdout.write(clearToBegOfScreenString())
};
const clearScreen = () => {
	process.stdout.write(clearScreenString())
};

module.exports = clearScreen;
