
const akasha   = require('akasharender');
const { assert } = require('chai');

const config = require('../config.js');

describe('build site', function() {
    it('should build site', async function() {
        this.timeout(15000);
        let failed = false;
        let results = await akasha.render(config);
        for (let result of results) {
            if (result.error) {
                failed = true;
                console.error(result.error);
            }
        }
        assert.isFalse(failed);
    });
});

describe('check pages', function() {
    it('should have correct home page', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, '/index.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.include($('head title').html(), 'Akasha CMS example');
        assert.include($('head meta[name="pagename"]').attr('content'), 
                'Akasha CMS example');
        assert.include($('head meta[name="DC.title"]').attr('content'), 
                'Akasha CMS example');
        assert.include($('head meta[name="og:title"]').attr('content'), 
                'Akasha CMS example');
        assert.include($('head meta[name="og:url"]').attr('content'), 
                'https://example.akashacms.com/index.html');
        assert.include($('head link[rel="canonical"]').attr('href'), 
                'https://example.akashacms.com/index.html');
        assert.include($('head link[rel="sitemap"]').attr('href'), '/sitemap.xml');

        assert.equal($('head link[href="/akasha/epub-website/style.css"]').length, 1);
        assert.equal($('head link[href="/vendor/bootstrap/css/bootstrap.min.css"]').length, 1);
        assert.equal($('head link[href="/style.css"]').length, 1);


        assert.include($('body header h1').html(), 'Akasha CMS example');
        
        assert.equal($('img[src="https://www.google.com/s2/favicons?domain=akashacms.com"]').length, 1);
        assert.equal($('img[src="/img/extlink.png"]').length, 1);

        assert.equal($('body script[src="/vendor/jquery/jquery.min.js"]').length, 1);
        assert.equal($('body script[src="/vendor/popper.js/umd/popper.min.js"]').length, 1);
        assert.equal($('body script[src="/vendor/bootstrap/js/bootstrap.min.js"]').length, 1);
    });

    it('should have correct affiliate links', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, '/affiliate.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.include($('head title').html(), 'Affiliate Products');
        assert.equal($('head meta[name="og:image"]').length, 1);
        assert.include($('head meta[name="og:image"]').attr('content'), 
            "https://images-na.ssl-images-amazon.com/images/I/41SzsmJa9uL.jpg");
        
        assert.equal($('a[href="http://amazon.com/?tag=thereikipage"]').length, 1);
        assert.include($('a[href="http://amazon.com/?tag=thereikipage"]').attr('rel'), "nofollow");
        assert.include($('a[href="http://amazon.com/?tag=thereikipage"]').attr('rel'), "norewrite");
        assert.include($('a[href="http://amazon.com/?tag=thereikipage"]').attr('rel'), "noskim");

        assert.equal($('a[href="http://google.com"]').length, 1);
        assert.include($('a[href="http://google.com"]').attr('rel'), "nofollow");
        assert.notInclude($('a[href="http://google.com"]').attr('rel'), "norewrite");
        assert.notInclude($('a[href="http://google.com"]').attr('rel'), "noskim");

        assert.equal($('div.affiliateproduct').length, 1);
        assert.include($('div.affiliateproduct div.modal-header .modal-title').html(),
            "Node.JS Web Development - Third Edition");
        assert.include($('div.affiliateproduct div.productdescription .infobox-title').html(),
            "Node.JS Web Development - Third Edition");
    });


    it('should have correct author bylines', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, 
                'author-bio.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.include($('div#byline1 span[itemprop="name"] a[rel="author"]').html(),
            "Elton John");
        assert.include($('div#byline2 span[itemprop="name"] a[rel="author"]').html(),
            "Elton John");
        assert.include($('div#byline3 span[itemprop="name"]:nth-child(1) a[rel="author"]').html(),
            "Boy George");
        assert.include($('div#byline3 span[itemprop="name"]:nth-child(2) a[rel="author"]').html(),
            "Elton John");
        
        assert.include($('div#bioblock1 div.author-bio-block-name').html(),
            "Elton John");
        
        assert.include($('div#bioblock2 div.author-bio-block-name').html(),
            "Elton John");
        
        // This doesn't seem to work
        // assert.include($('div#bioblock2 div.author-bio-block-name:nth-child(1)').html(),
        //    "Boy George");
        // assert.include($('div#bioblock2 div.author-bio-block-name:nth-child(2)').html(),
        //    "Elton John");
        
    });

    it('should have correct empty tags', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, 
                'empty-tags.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.include($('a[href="markdown.html"]').html(),
            "Markdown example");
        
    });

    it('should have correct settings on external links', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, 
                'external-links.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.include($('a[href="https://google.com"]').attr('rel'),
            "nofollow");
        assert.include($('a[href="https://google.com"]').attr('target'),
            "_blank");
        assert.include($('a[href="https://google.com"]').html(),
            "links to certain websites (google.com)");
        
        assert.equal($('img[src="https://www.google.com/s2/favicons?domain=google.com"]').length, 1);
        assert.include($('img[src="https://www.google.com/s2/favicons?domain=google.com"]')
            .attr('alt'), "(google.com)");
        
        assert.notExists($('a[href="https://7gen.com"]').attr('rel'));
        assert.include($('a[href="https://7gen.com"]').attr('target'),
            "_blank");
    });

    it('should have correct extra scripts', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, 
                'extra-scripts.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.equal($('head link[href="/extra.css"]').length, 1);
        assert.include($('head link[href="/extra.css"]').attr('media'),
            "screen");

        assert.equal($('head script[src="/extraTop.js"]').length, 1);

        assert.equal($('body script[src="/extraBottom.js"]').length, 1);

    });

    it('should have correct facebook embed', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, 
                'facebook-embed.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.equal($('body div.embed-responsive').length, 1);

        assert.equal($('body div.embed-responsive div.fb-post').length, 1);

        assert.include($('body div.embed-responsive div.fb-post').data('href'), 
            "https://www.facebook.com/joseph.romm/posts/10153908777222475");

        assert.include($('body div.embed-responsive div.fb-post a[href="https://www.facebook.com/joseph.romm"]')
            .html(), "Joseph Romm");

    });

    it('should have correct fig-img', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, 
                'figimg.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.equal($('figure.fig-img-class').length, 1);
        assert.equal($('figure.fig-img-class img[src="Human-Skeleton.jpg"]').length, 1);
        assert.include($('figure.fig-img-class figcaption').html(),
            "Implemented with fig-img tag");
        
    });

});

describe('check tags', function() {
    it('should have correct tagged content', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, 
                'mahabhuta.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.equal($('span.taglist').length, 1);
        assert.equal($('span.taglist a[href="/tags/mahabhuta.html"]').length, 1);
        assert.include($('span.taglist a[href="/tags/mahabhuta.html"]').html(), "Mahabhuta");

    });

    it('should have correct tags page', async function() {

        let { html, $ } = await akasha.readRenderedFile(config, 
            '/tags/mahabhuta.html');

        assert.exists(html, 'result exists');
        assert.isString(html, 'result isString');

        assert.equal($('ul.list-group li.list-group-item').length, 1);
        assert.equal($('ul.list-group li.list-group-item a[href="/mahabhuta.html"]').length, 1);
        assert.include($('ul.list-group li.list-group-item a[href="/mahabhuta.html"]').html(),
            "Mahabhuta (jQuery-like scripting) example");
    });

});
