module.exports = {
  setupFiles: ["<rootDir>/tests/setup.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|css|less)$": "identity-obj-proxy",
  },
};
