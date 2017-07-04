/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/index.html?launcher=true',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/],
  runtimeCaching: [
    {
      // cache Google user profile pics
      urlPattern: /^https:\/\/lh3.googleusercontent.com\/.*/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /service-worker.js/,
      handler: 'networkFirst'
    }
  ]
};
