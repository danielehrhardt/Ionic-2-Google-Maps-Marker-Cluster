var fs = require('fs-extra')
var dependencies = [
    ['node_modules/js-marker-clusterer/src/markerclusterer_compiled.js','www/assets/js/markerclusterer.min.js']
];

dependencies.forEach(function(value) {
    fs.copy(value[0],value[1]);
});

