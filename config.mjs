
import akasha from 'akasharender';
import path from 'node:path';
import util from 'node:util';

import { default as MarkdownITPlantUML } from 'markdown-it-plantuml';
import { default as MarkdownITHighlightJS } from 'markdown-it-highlightjs';

import { ThemeBootstrapPlugin } from '@akashacms/theme-bootstrap';
import { BasePlugin } from '@akashacms/plugins-base';
import { BreadcrumbsPlugin } from '@akashacms/plugins-breadcrumbs';
import { BooknavPlugin } from '@akashacms/plugins-booknav';
import { EmbeddablesPlugin } from '@akashacms/plugins-embeddables';
// import { BlogPodcastPlugin } from '@akashacms/plugins-blog-podcast';
import { TaggedContentPlugin } from '@akashacms/plugins-tagged-content';

import { AuthorsPlugin } from '@akashacms/plugins-authors';
import { DownloadAssetsPlugin } from '@akashacms/plugins-dlassets';
import { DocumentViewersPlugin } from '@akashacms/plugins-document-viewers';
import { ExternalLinksPlugin } from '@akashacms/plugins-external-links';
import { FootnotesPlugin } from '@akashacms/plugins-footnotes';
import { AffiliatesPlugin } from '@akashacms/plugins-affiliates';

// import { default as EPUBWebsitePlugin } from 'epub-website';

const config = new akasha.Configuration();

config.rootURL("https://example.akashacms.com");

const __dirname = import.meta.dirname;
config.configDir = __dirname;

config.findRendererName('.html.md')
    .use(MarkdownITPlantUML, {
        imageFormat: 'svg'
    })
    .use(MarkdownITHighlightJS, { 
        auto: true, 
        code: true 
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
    /* .addAssetsDir({
        src: 'vue-js-examples/example-1/dist',
        dest: 'vue-js/example-01'
    }) */
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
    .use(ThemeBootstrapPlugin)
    .use(BasePlugin, {
        generateSitemapFlag: true
    })
    .use(BreadcrumbsPlugin)
    .use(BooknavPlugin)
    .use(AuthorsPlugin, {
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
    .use(DownloadAssetsPlugin)
    .use(DocumentViewersPlugin)
    .use(EmbeddablesPlugin)
    .use(ExternalLinksPlugin)
    .use(FootnotesPlugin)
    .use(AffiliatesPlugin)
    .use(TaggedContentPlugin, {
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
    // .use(EPUBWebsitePlugin)
    ;

config.plugin("@akashacms/plugins-affiliates")
    .amazonAffiliateCode(config, 'com', 'thereikipage')
    .loadAffiliateProducts(config, 
        path.join(__dirname, 'affiliate-products.yml'))
    .noSkimlinksDomain(config, 'amazon.com')
    .noViglinksDomain(config, 'amazon.com');

config.plugin("@akashacms/plugins-external-links")
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

config.addMahabhuta(
    [
      function($, metadata, dirty, done) {
          $('helloworld').replaceWith('<p class="hello-world">Hello world! '+ metadata.title +'</p>');
          done();
      }
    ]);

config.prepare();
export default config;
