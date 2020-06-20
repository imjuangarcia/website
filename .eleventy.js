module.exports = config => {
  config.addPassthroughCopy('./src/fonts/');
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