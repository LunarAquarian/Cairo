CAIRO.Elements = (function () {
  'use strict';

  function init() {
    CAIRO.Elements.Template = document.getElementById('nice-app');
    CAIRO.Elements.Loader = document.getElementById('showbox');
    
  }

  return {
    init: init
  };
}());