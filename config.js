
module.exports = {
    
    root_assets: [ 'assets' ],
    root_layouts: [ 'layouts' ],    // Directory for layout files
    root_partials: [ 'partials' ],  // Directory for partials
    root_out: 'out',                // Rendered output goes here
    root_docs: [ 'documents' ],     // Directory/ies of input files
    
    root_url: "http://example.akashacms.com", // Root URL for the site this will generate
    
    doMinimize: false,
    
    /* taggedContent: {
        pathIndexes: '/tags/',
        header: "---\ntitle: @title@\nlayout: tagpage.html.ejs\n---\n<p>Pages with tag @tagName@</p>"
    }, */
    
    // Change this to suit your own server
    deploy_rsync: {
        user: 'user-name',
        host: 'example.akashacms.com',
        dir:  'example.akashacms.com'
    },
    
    mahabhuta: [
      function($, metadata, dirty, done) {
          $('helloworld').replaceWith('<p class="hello-world">Hello world! '+ metadata.title +'</p>');
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
    
    google: {
        analyticsAccount: "UA-#########-##",
        analyticsDomain: "example.akashacms.com",
        // siteVerification: "....."
    },
    
    headerScripts: {
        stylesheets: [
        ],
        javaScriptTop: [
        ],
        javaScriptBottom: [
        ]
    },
    
    // embeddables: {
    //     youtubeKey: '... retrieve your own key'
    // },
    
    funcs: {
        // Any functions put here are available in templates as functions
    },
    
    config: function(akasha) {
        akasha.registerPlugins(module.exports, [
            { name: 'akashacms-theme-bootstrap', plugin: require('akashacms-theme-bootstrap') },
            { name: 'akashacms-embeddables', plugin: require('akashacms-embeddables') },
            { name: 'akashacms-booknav', plugin: require('akashacms-booknav') }
        ]);
    }

};