---
layout: default.html.ejs
title: Example of embedding Vue.js application in AkashaCMS page
headerJavaScriptAddTop: 
        - href: https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js
        #  lang: application/javascript
headerStylesheetsAdd:
        - href: /vue-js-example.css
---

If this works, the following will say _Hello Vue_

<div id="app-1" class="vue-js-example">
  {{ message }}
</div>

<script>

var app = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!'
  }
});

</script>

<div id="app-2" class="vue-js-example">
  <span v-bind:title="message">
    SECOND VUE APPLICATION:  Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</div>

<script>
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});
</script>

Third Vue application

<div id="app-4" class="vue-js-example">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>

<script>
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

</script>

Fourth Vue application

<div id="app-5" class="vue-js-example">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>

<script>
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
</script>

<!--

CURRENTLY DISABLED - the build doesn't work.

> example-1@1.0.0 build
> cross-env NODE_ENV=production webpack --progress

[webpack-cli] Failed to load '/home/david/Projects/akasharender/akashacms-example/vue-js-examples/example-1/webpack.config.js' config
[webpack-cli] TypeError: webpack.optimize.UglifyJsPlugin is not a constructor
    at Object.<anonymous> (/home/david/Projects/akasharender/akashacms-example/vue-js-examples/example-1/webpack.config.js:68:5)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.require (node:internal/modules/cjs/loader:1674:12)
    at require (node:internal/modules/helpers:157:16)
    at WebpackCLI.tryRequireThenImport (/home/david/Projects/akasharender/akashacms-example/vue-js-examples/example-1/node_modules/webpack-cli/lib/webpack-cli.js:204:22)
    at loadConfigByPath (/home/david/Projects/akasharender/akashacms-example/vue-js-examples/example-1/node_modules/webpack-cli/lib/webpack-cli.js:1404:38)
ERROR: "build-vue:example-1" exited with 2.


Last Vue.js example - built using `vue init webpack-simple example-1`

<div id="app-example-01" class="vue-js-example"></div>
<script src="/vue-js/example-01/build.js"></script>

-->