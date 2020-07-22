module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/script.js");
  return {
    dir: {
      input: "src"
    },
    templateFormats: [
      'css',
      'md',
      'njk',
    ]
  };
};