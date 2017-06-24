---
layout: default.html.ejs
title: Test of embedding video
tags: Embed, Video Embed
---

This demonstrates using asynchronous information retrieval in a template.  The problem with EJS or Markdown is that you cannot retrieve data in an asynchronous manner, and in a Node.js environment getting remotely stored data (say via a REST API) requires asynchronous operations.

Retrieving information about a video from Youtube or Vimeo, as well as its HTML player code, is an example of asynchronous operations.

The following examples rely on the [akashacms-embeddables](https://www.npmjs.com/packages/akashacms-embeddables) plugin.  It supports a long list of embeddable stuff, many of which require asynchronous operations to fully render.

The implementation of asynchronous information retrieval depends on [Mahabhuta](http://akashacms.com/documents/mahabhuta.html).

Mahabhuta is run after the EJS or Markdown is processed, and a Mahabhuta function can execute asynchronous operations.

The Youtube examples are set up to not execute because retrieving data from youtube requires an access key.

```
<youtube-thumbnail width="200" align="right" href="https://www.youtube.com/watch?v=QweNsLesMrM"/>
```

```
<div class="panel panel-default">
    <div class="panel-heading">
        <h3><youtube-title href="https://www.youtube.com/watch?v=QweNsLesMrM"/></h3>
    </div>
    <p>Source: Youtube, by
    <a href="https://www.youtube.com/watch?v=QweNsLesMrM" rel="nofollow">
    	<youtube-author href="https://www.youtube.com/watch?v=QweNsLesMrM"/>
    </a>
    on <youtube-publ-date  href="https://www.youtube.com/watch?v=QweNsLesMrM"/>
    </p>
    <youtube-description href="https://www.youtube.com/watch?v=QweNsLesMrM"></youtube-description>
    <div class="embed-responsive js-video" style="clear: both;">
        <youtube-video-embed href="https://www.youtube.com/watch?v=QweNsLesMrM"
            autohide="0" modestbranding="1" rel="0" showinfo="0" iv_load_policy="3"
            />
    </div>
</div>
```

This next example uses `framed-embed` to load the above video

<framed-embed href="https://www.youtube.com/watch?v=QweNsLesMrM"/>

And this example uses `simple-embed`

<simple-embed href="https://www.youtube.com/watch?v=QweNsLesMrM"/>

This next set of examples are a video stored on Vimeo.  That service offers a simple REST based protocol (using oEmbed) meaning this can be a live example where we cannot with Youtube.



<div class="panel panel-default">
<div class="panel-heading">
<vimeo-thumbnail width="200" align="right" url="https://vimeo.com/110572345"></vimeo-thumbnail>
<h3><vimeo-title url="https://vimeo.com/110572345"/></h3>
</div>
<p>Source: Vimeo, by
<a href="https://vimeo.com/110572345" rel="nofollow">
<vimeo-author url="https://vimeo.com/110572345"/>
</a></p>
<vimeo-description url="https://vimeo.com/110572345"></vimeo-description>
<vimeo-player url="https://vimeo.com/110572345" />
</div>
