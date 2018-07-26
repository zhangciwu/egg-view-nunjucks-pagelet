'use strict';

const pagelet = require('nunjucks-pagelet-w');

module.exports = app => {
  const config = app.config;

  // configure pagelet
  pagelet.configure({
    root: config.view.root[0],
    manifest: config.nunjucksPagelet.manifest,
    cache: config.nunjucks.cache,
    crossorigin: config.nunjucksPagelet.crossorigin,
  });

  // configure custom parser
  const useCustomParser = config.nunjucksPagelet.useCustomParser;
  pagelet.tags.forEach(tag => {
    tag.useCustomParser = useCustomParser;
  });

  // register pagelet tags to the view engine
  pagelet.register(app.nunjucks);
};
