module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/images");
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