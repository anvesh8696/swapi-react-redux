/* eslint no-undef: 0 */
var $ = require('jquery');
window.jQuery = $;
jQuery = $;

require('bootstrap-webpack');
require('bootstrap-webpack!./bootstrap.config.js');
require('./assets/css/react-bootstrap-table.min.css');

require('./src/index.js');
