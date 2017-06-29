---
layout: default.html.ejs
title: Test of embedding video
tags: Embed, Video Embed
---

The following examples rely on the [akashacms-embeddables](https://www.npmjs.com/packages/akashacms-embeddables) plugin.  It supports a long list of embeddable stuff, many of which require asynchronous operations to fully render.


This example uses `framed-embed` to load the video

<embed-resource template="embed-resource-framed.html.ejs" href="https://www.youtube.com/watch?v=QweNsLesMrM"/>

And this example uses `simple-embed`

<embed-resource href="https://www.youtube.com/watch?v=QweNsLesMrM"/>

This next set of examples are a video stored on Vimeo.  That service offers a simple REST based protocol (using oEmbed) meaning this can be a live example where we cannot with Youtube.


<embed-resource template="embed-resource-framed.html.ejs" href="https://vimeo.com/110572345"/>
