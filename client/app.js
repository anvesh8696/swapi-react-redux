/* eslint no-undef: 0 */
var $ = require('jquery');
window.jQuery = $;
jQuery = $;

require('bootstrap-webpack');
require('bootstrap-webpack!./bootstrap.config.js');

require('./src/index.js');
