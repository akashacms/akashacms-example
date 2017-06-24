---
layout: default.html.ejs
title: Mahabhuta (jQuery-like scripting) example
tags: Mahabhuta
---

The Mahabhuta template engine allows the website author to use jQuery-like functions to manipulate website HTML.

The author inserts HTML tags in their content.  You can also invent wholly new tags if desired.

In `config.js` the author writes jQuery functions to manipulate content.  It uses a subset of the jQuery API as provided by the cheerio module.  See [the Mahabhuta documentation](http://akashacms.com/documents/mahabhuta.html) for more information.

Here's an example:

```
<helloworld>This content will disappear.</helloworld>
```

Is replaced by: <helloworld>This content will disappear.</helloworld>
