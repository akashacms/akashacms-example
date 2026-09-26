

Currently `npm install` gives these warnings:

```shell
$ npm install
npm warn deprecated prebuild-install@7.1.3: No longer maintained. Please contact the author of the relevant native addon; alternatives are available.
npm warn gitignore-fallback No .npmignore file found, using .gitignore for file exclusion. Consider creating a .npmignore file to explicitly control published files.
npm warn gitignore-fallback No .npmignore file found, using .gitignore for file exclusion. Consider creating a .npmignore file to explicitly control published files.
npm warn gitignore-fallback No .npmignore file found, using .gitignore for file exclusion. Consider creating a .npmignore file to explicitly control published files.
npm warn gitignore-fallback No .npmignore file found, using .gitignore for file exclusion. Consider creating a .npmignore file to explicitly control published files.
```

The prebuild-install issue comes from `@pintora/cli` which references `canvas@3.2.3`.  That's the latest release, and has the reference to prebuild-install.

For the `.npmignore` issue, read: https://github.com/npm/cli/issues/8687 -- This seems to be triggered by a subdirectory which is expected to have a `.npmignore`, there is one, and it's falling back to the `.gitignore` instead.

1. I added `.npmignore` to this directory - no change
2. I added `private: true` to `package.json` as noted in the issue queue entry - no change.

> 12 moderate severity vulnerabilities

Running `npm audit` shows two issues, and there are no fixes for either

1. akasharender uses csv-parse which has a known issue, no known fix
2. @akashacms/plugins-embeddables refers to meta-extractor which refers to file-type which has a problem, no known fix


The directory `view-js-examples` no longer compiles.  The code in `documents/vue-js-example.html.md` which refers to that code has been commented-out.
