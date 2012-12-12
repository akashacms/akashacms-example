
var akasha = require('../akashacms');
var util   = require('util');
var async  = require('async');
var oembed = require('oembed');
var url    = require('url');

akasha.process({
    root_layouts: 'layouts',               // Directory for layout files
    root_out: 'out',                       // Rendered output goes here
    root_docs: [ 'assets', 'documents'],   // Directory/ies of input files
    
    data: {
        // Any objects put here are available in templates as data
    },
    
    funcs: {
        // Any functions put here are available in templates as functions
    }

});