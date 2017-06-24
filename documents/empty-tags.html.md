---
layout: default.html.ejs
title: Automatically filling in empty link tags
---

We support automatically filling in anchor text for empty links like so:  [](markdown.html)

AkashaRender also checks whether links to local content is still correct.  If not, AkashaRender throws an error.  Uncomment the following to see that behavior `[](nonexistent.html)`
