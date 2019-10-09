
'use strict';

const akasha  = require('akasharender');
const path    = require('path');
const util    = require('util');

const config = new akasha.Configuration();

config.rootURL("https://example.akashacms.com");

config.configDir = __dirname;

config.findRendererName('.html.md')
    .use(require('markdown-it-plantuml'), {
        imageFormat: 'svg'
    });

config
    .addAssetsDir('assets')
    .addAssetsDir({
        src: 'node_modules/bootstrap/dist',
        dest: 'vendor/bootstrap'
    })
   .addAssetsDir({
        src: 'node_modules/jquery/dist',
        dest: 'vendor/jquery'
    })
    .addAssetsDir({
        src: 'node_modules/popper.js/dist',
        dest: 'vendor/popper.js'
    })
    .addAssetsDir({
        src: 'vue-js-examples/example-1/dist',
        dest: 'vue-js/example-01'
    })
    .addLayoutsDir('layouts')
    .addDocumentsDir('documents')
    .addDocumentsDir({
        src: 'node_modules/epub-skeleton/documents',
        dest: 'epub-skeleton',
        baseMetadata: {
            bookHomeURL: "/epub-skeleton/toc.html"
        }
    })
    .addPartialsDir('partials');

config
    .use(require('@akashacms/theme-bootstrap'))
    .use(require('@akashacms/plugins-base'), {
        generateSitemapFlag: true
    })
    .use(require('@akashacms/plugins-breadcrumbs'))
    .use(require('@akashacms/plugins-booknav'))
    .use(require('@akashacms/plugins-authors'), {
        default: "boygeorge",
        authors: [
            {
                code: "boygeorge",
                fullname: "Boy George",
                url: "URL",
                bio: "<p>Weird ass british rocker</p>"
            },
            {
                code: "eltonjohn",
                fullname: "Elton John",
                url: "URL",
                bio: "<p>Mainstream british rocker</p>"
            }
        ]
    })
    .use(require('akashacms-dlassets'))
    .use(require('@akashacms/plugins-document-viewers'))
    .use(require('akashacms-embeddables'))
    .use(require('akashacms-external-links'))
    .use(require('@akashacms/plugins-footnotes'))
    .use(require('akashacms-affiliates'))
    .use(require('@akashacms/plugins-tagged-content'), {
        sortBy: 'title',
        // @tagDescription@ can only appear once
        headerTemplate: "---\ntitle: @title@\nlayout: tagpage.html.ejs\n---\n<p><a href='./index.html'>Tag Index</a></p><p>Pages with tag @tagName@</p><p>@tagDescription@</p>",
        indexTemplate: "---\ntitle: Tags for AkashaCMS Example site\nlayout: tagpage.html.ejs\n---\n",
        pathIndexes: '/tags/',
        tags: [
            {
                name: "Embed",
                description: "Testing embeddeble thingies"
            },
            {
                name: "Eenie",
                description: "EENIE"
            },
            {
                name: "Meenie",
                description: "MEENIE"
            }
        ]
    })
    .use(require('epub-website'));

config.plugin("akashacms-affiliates")
    .amazonAffiliateCode(config, 'com', 'thereikipage')
    .loadAffiliateProducts(config, 
        path.join(__dirname, 'affiliate-products.yml'))
    .noSkimlinksDomain(config, 'amazon.com')
    .noViglinksDomain(config, 'amazon.com');

config.plugin("akashacms-external-links")
    // TARGET=_blank test
    .setTargetBlank(config, true)

    // FAVICON test
    // .setShowFavicons(config, "after")
    .setShowFavicons(config, "before")
    // .setShowFavicons(config, "never")

    // ICON test
    .setShowIcon(config, "after")
    // .setShowIcon(config, "before")
    // .setShowIcon(config, "never")

    // NOFOLLOW test
    .setPreferNofollow(config, false)
    .addBlacklistEntry(config, 'google.com')
    .addBlacklistEntry(config, 'docs.google.com')
    .addBlacklistEntry(config, 'cnn.com')
    .addBlacklistEntry(config, 'bbc.co.uk')
    .addWhitelistEntry(config, '7gen.com')
    // .addWhitelistEntry(config, 'visforvoltage.org')
    // .addWhitelistEntry(config, 'thereikipage.com');
    ;

config
    .addFooterJavaScript({ href: "/vendor/jquery/jquery.min.js" })
    .addFooterJavaScript({ href: "/vendor/popper.js/umd/popper.min.js" })
    .addFooterJavaScript({ href: "/vendor/bootstrap/js/bootstrap.min.js" })
    .addStylesheet({ href: "/vendor/bootstrap/css/bootstrap.min.css" })
    .addStylesheet({       href: "/style.css" });

config.setMahabhutaConfig({
    recognizeSelfClosing: true,
    recognizeCDATA: true,
    decodeEntities: true
});

/* config.plugin("akashacms-tagged-content")
    .sortBy('title')
    .headerTemplate("---\ntitle: @title@\nlayout: tagpage.html.ejs\n---\n<p>Pages with tag @tagName@</p>")
    .tagsDirectory('/tags/'); */

config.addMahabhuta(
    [
      function($, metadata, dirty, done) {
          $('helloworld').replaceWith('<p class="hello-world">Hello world! '+ metadata.title +'</p>');
          done();
      }
    ]);

config.prepare();

// console.log(`AssetDirs: ${util.inspect(config.assetDirs)}`);
// console.log(`DocumentDirs: ${util.inspect(config.documentDirs)}`);
// console.log(`PartialDirs: ${util.inspect(config.partialsDirs)}`);
// console.log(`LayoutDirs: ${util.inspect(config.layoutDirs)}`);
// console.log(`RenderDestination: ${util.inspect(config.renderDestination)}`);

module.exports = config;
