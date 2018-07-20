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

<div id="app-2">
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

<div id="app-4">
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

<div id="app-5">
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

