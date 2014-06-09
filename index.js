'use strict';

var minify = require('html-minifier').minify;

var defaultOptions = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  //    removeCDATASectionsFromCDATA:  true,
  collapseBooleanAttributes: true,
  //    removeRedundantAttributes:     true,
  //    removeEmptyElements:           true,
  //    removeOptionalTags:            true,
  //    removeAttributeQuotes:         true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  collapseWhitespace: true
};


module.exports = function(ret, conf, settings, opt) { //打包后处理
  if (!opt.pack) {
    return;
  }

  fis.util.map(ret.src, function(subpath, file) {
    if (file.isHtmlLike && file.noMapJs !== false) { //类html文件
      var content = file.getContent();
      content = minify(content, defaultOptions);

      file.setContent(content);
    }
  });
};
