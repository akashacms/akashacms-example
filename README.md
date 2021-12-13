akashacms-example
=================

Showing how to use [AkashaCMS](https://akashacms.com)

For a live example see https://example.akashacms.com

To use this repository do the following

```
$ cd into the repository
$ npm run update:modules
$ npm install
$ npm run build
$ npm run preview
```

After the last step you'll be able to visit http://localhost:3000 to view the website

This website is also the official way AkashaCMS features are tested.

The AkashaCMS plugins are installed here as Git submodules.  This lets you edit the plugin source directly and have your changes directly recognized without any rigamarole of reinstalling the code.

To properly set this up, use the `npm run update:modules` script as shown above.
