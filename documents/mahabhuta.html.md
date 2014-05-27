---
layout: default.html.ejs
title: Mahabhuta (jQuery-like scripting) example
---

The Mahabhuta template engine allows the website author to use jQuery-like functions to manipulate website HTML.

The author inserts HTML tags in their content.  You can also invent wholly new tags if desired.

In `config.js` the author writes jQuery functions to manipulate content.  It uses a subset of the jQuery API as provided by the cheerio module.

Here's an example: 

```
<hello-world>This content will disappear.</hello-world>
```

Is replaced by:   <hello-world>This content will disappear.</hello-world>
