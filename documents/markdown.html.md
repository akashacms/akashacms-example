---
layout: default.html.ejs
title: Markdown example
tags: Markdown
---

AkashaCMS supports markdown.  The stuff below is from the standard Markdown test suite.

``` js
var a = 'hello';
console.log(a + ' world');
```

~~~bash
echo "hello, ${WORLD}"
~~~

```````longfence
Q: What do you call a tall person who sells stolen goods?
```````

~~~~~~~~~~ ManyTildes
A longfence!
~~~~~~~~~~

	code block on the first line

Regular text.

    code block indented by spaces

Regular text.

the lines in this block
all contain trailing spaces

Regular Text.

code block on the last line

<p>Already linked: <a href="http://example.com/">http://example.com/</a>.</p>

Already linked: [http://example.com/](http://example.com/).

Already linked: <a href="http://example.com/">**http://example.com/**</a>.

> hello
> [1]: hello

* * *

> hello
[2]: hello


* hello
* [3]: hello


* hello
[4]: hello


> foo
> bar
[1]: foo
> bar

hello world
    how are you
    how are you

hello world
```
how are you
```

hello world
* * *

hello world
# how are you

hello world
how are you
===========

hello world
> how are you

hello world
* how are you

hello world
<div>how are you</div>

hello world
<span>how are you</span>

hello [world][how]
[how]: /are/you

<div>hello</div>

<span>hello</span>
