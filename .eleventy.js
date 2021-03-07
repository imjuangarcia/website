// Global Imports
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const readingTime = require('eleventy-plugin-reading-time');
const toc = require('eleventy-plugin-nesting-toc');

// Local Imports
const sortByDisplayOrder = require('./src/utilities/sort-by-display-order.js');
const htmlMinTransform = require('./src/utilities/html-min-transform.js');
const dateFilter = require('./src/utilities/filters/date-filter.js');
const w3DateFilter = require('./src/utilities/filters/w3-date-filter.js');

// Production flag
const isProduction = process.env.NODE_ENV === 'production';

module.exports = config => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  
  // To pass the fonts and images to the dist version
  config.addPassthroughCopy('./src/public/fonts/');
  config.addPassthroughCopy('./src/public/images/');
  config.addPassthroughCopy('./src/public/js/');
  config.addPassthroughCopy('./src/robots.txt');

  // Only minify HTML if we are in production to avoid slowing builds
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(readingTime);
  config.addPlugin(toc);

  // Returns work items, sorted by display order
  config.addCollection('work', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/content/work/*.md'));
  });

  // Returns work items, sorted by display order then filtered by featured
  config.addCollection('featuredWork', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/content/work/*.md')).filter(
      x => x.data.featured
    );
  });

  // Returns a collection of blog posts in reverse date order
  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/content/posts/*.md')].reverse();
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Configuration
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};