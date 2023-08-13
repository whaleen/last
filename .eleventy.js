module.exports = function (eleventyConfig) {

  //* PASSTHROUGH COPIES
  // Passthrough File Copy entries are relative to the root of your project and not the input directory, e.g. `dir: {input: "app/pages"}`.


  // eleventyConfig.addPassthroughCopy({ "app/styles/": "css" });

  eleventyConfig.addPassthroughCopy({ "app/public/images": "images" });

  eleventyConfig.addPassthroughCopy({ "robots.txt": "/robots.txt" });

  //* Collection to sort pages
  eleventyConfig.addCollection("page", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "app/pages",
      output: ".last",
      data: "_data",
      includes: "_components",
      layouts: "_layouts",
    }
  }
};
