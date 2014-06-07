
module.exports = {
    
    root_assets: [ 'assets' ],
    root_layouts: [ 'layouts' ],    // Directory for layout files
    root_partials: [ 'partials' ],  // Directory for partials
    root_out: 'out',                // Rendered output goes here
    root_docs: [ 'documents' ],     // Directory/ies of input files
    
    plugins: [
        // 'akashacms-tagged-content',
        require('akashacms-theme-bootstrap')
    ],
    
    root_url: "http://example.akashacms.com", // Root URL for the site this will generate
    
    doMinimize: false,
    
    tags: {
        pathIndexes: '/tags/',
        header: "---\ntitle: @title@\nlayout: tagpage.html.ejs\n---\n<p>Pages with tag @tagName@</p>"
    },
    
    // Change this to suit your own server
    deploy_rsync: {
        user: 'user-name',
        host: 'example.akashacms.com',
        dir:  'example.akashacms.com'
    },
    
    mahabhuta: [
      function(config, $, metadata, done) {
          $('hello-world').replaceWith('<p class="hello-world">Hello world! '+ metadata.title +'</p>');
          done();
      }
    ],
    
    data: {
        // Any objects put here are available in templates as data
        metarobots: "index,follow",
        metaOGtype: "website",
        metaOGsite_name: "AkashaCMS example website",
        metasubject: "AkashaCMS",
        metalanguage: "EN",
    },
    
    googleAnalyticsAccount: "UA-#########-##",
    googleAnalyticsDomain: "example.akashacms.com",
    googleSiteVerification: ".....",
    
    headerScripts: {
        stylesheets: [
        ],
        javaScriptTop: [
        ],
        javaScriptBottom: [
        ]
    },
    
    funcs: {
        // Any functions put here are available in templates as functions
    }

};