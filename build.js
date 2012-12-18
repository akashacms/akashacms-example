var akasha = require('akashacms');

akasha.process({
    root_layouts: 'layouts',               // Directory for layout files
    root_partials: 'partials',             // Directory for partials
    root_out: 'out',                       // Rendered output goes here
    root_docs: [ 'assets', 'documents'],   // Directory/ies of input files
    
    root_url: "http://example.akashacms.com", // Root URL for the site this will generate
    
    data: {
        // Any objects put here are available in templates as data
    },
    
    funcs: {
        // Any functions put here are available in templates as functions
    }

});
