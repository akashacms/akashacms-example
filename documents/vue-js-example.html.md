---
layout: default.html.ejs
title: Example of embedding Vue.js application in AkashaCMS page
headerJavaScriptAddTop: 
        - href: https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js
        #  lang: application/javascript
---

If this works, the following will say _Hello Vue_

<div id="app">
  {{ message }}
</div>

<script>

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

</script>
