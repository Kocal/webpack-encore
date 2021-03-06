# CHANGELOG

## 1.4.0

* [FEATURE] Allow less-loader v9 - #983 thanks to @bobvandevijver
* [BUG] Fix manifest key problem when using copy files - #936 thanks to @bobvandevijver

## 1.3.0

 * [DEPENDENCY CHANGE] `friendly-errors-webpack-plugin` was replaced by
   `@nuxt/friendly-errors-webpack-plugin` - the previous package was abandoned.
   There should be no noticeable changes, unless you are using
   `Encore.configureFriendlyErrorsPlugin()` and happen to configure some
   feature that differs between these libraries (the new library is a fork
   of the old)

## 1.2.0

 * [DEPENDENCY UPGRADE] `css-minimizer-webpack-plugin` was upgraded from version 1
   to version 2. This should not affect you directly, unless you were passing
   custom options to this plugin (e.g. via `configureCssMinimizerPlugin()`). #966
   thanks to @stof.

 * [FEATURE] Added `Encore.when()`, which can be used to easily add conditional code
   (e.g. code that should be run only in "dev"). See the `index.js` file for
   more details - #963 thanks to @Kocal.

 * [BUG] When using `webpack-dev-server`, if the target port (e.g. 8080) was
   unavailable, previously, a different port would be fine (e.g. 8081). This
   has now been disabled and you will get an error instead. This was done
   because there is no way for Encore to detect this change and update its
   config properly - #943 thanks to @weaverryan.

## 1.1.0

 * [DEPENDENCY UPGRADES] The following packages now *allow* new major versions:
   * Allow postcss-loader 5
   * Allow less-loader 8
   * Allow sass-loader 11
   * Allow stylus-loader 5

## 1.0.0

 * [DEPENDENCY UPGRADE] Webpack was upgraded from version 4 to 5.

 * [DEPENDENCY UPGRADES] The following packages had major version upgrades:
   * `css-loader` from 3 to 5
   * `assets-webpack-plugin` from 5 to 7
   * `mini-css-extract-plugin` from 0.4 to 1
   * `style-loader` from 1 to 2
   * `terser-webpack-plugin` from 1 to 5
   * `webpack-cli` from 3 to 4
   * `webpack-manifest-plugin` from 2 to 3
   * `webpack-dev-server` from 3 to 4-beta [CHANGELOG](https://github.com/webpack/webpack-dev-server/blob/master/CHANGELOG.md#400-beta0-2020-11-27)

 * [DEPENDENCY SUPPORT CHANGES] Encore has changed what versions it supports
   of the following packages:
   * `less` from 3 to 4 and `less-loader` from 6 to 7
   * `fork-ts-checker-webpack-plugin` from 4 to 5 or 6

 * [BC BREAK] Image and font processing was changed from using `file-loader`
   (and  optionally `url-loader` via `configureUrlLoader()`) to Webpack 5's
   new [Asset Modules](https://webpack.js.org/guides/asset-modules/).
   In practice, unless you have a highly-configured system, this should
   not cause significant changes.

 * [BC BREAK] The `configureUrlLoader()` method was removed. See
   `configureImageRule()` and `configureFontRule()` - specifically the
   `maxSize` option and type: 'asset'. The `url-loader` is no longer used.

 * [BC BREAK] The `disableImagesLoader()` and `disableFontsLoader()` methods
   have been removed. See `configureImageRule()` and `configureFontRule()`
   for a new option to disable these.

 * [BC BREAK] The `configureFilenames()` method no longer accepts paths
   for `images` or `fonts`. See `configureImageRule()` and `configureFontRule()`
   for how to configure these filenames. The `configureFilenames()` method
   *does* now accept an `assets` option, but out-of-the-box, this will not
   result in any filename changes. See `configureFilenames()` for more details.

 * [BC BREAK] `optimize-css-assets-webpack-plugin` was replaced by
   `css-minimizer-webpack-plugin` and the `optimizeCssPluginOptionsCallback()`
   method was replaced by `cssMinimizerPluginOptionsCallback()`.

 * [BC BREAK] The `file-loader` package is no longer required by Encore. If
   you use `copyFiles()`, you will need to install it manually (you
   will receive a clear error about this).

 * [BC BREAK] All previously-deprecated methods & options were removed.

 * [BEHAVIOR CHANGE] The `HashedModuleIdsPlugin` was previously used to
   help name "modules" when building for production. This has been removed
   and we now use Webpack's native `optimization.moduleIds` option, which
   is set to `deterministic`.

 * [configureMiniCssExtractPlugin()] `configureMiniCssExtractPlugin()` was
   added to allow the `MiniCssExtractPlugin.loader` and `MiniCssExtractPlugin`
   to be configured.

 * [enableBuildCache()] Added `enableBuildCache()` to enable the new
   Webpack 5 build caching. https://webpack.js.org/blog/2020-10-10-webpack-5-release/
   This feature should be considered experimental.

## 0.33.0

 * [disableCssExtraction()] Added boolean argument to `disableCssExtraction()`
   to make it easier to dynamically disable extraction - #756 thanks
   to @football2801.

 * [DEPENDENCY UPGRADE] Vue 3 was already supported, but the dependencies
   have been upgraded to explicitly support the stable version, instead
   of beta versions - #869 thanks to @weaverryan

 * [DEPENDENCY UPGRADE] Explicit support for `postcss-loader` v3 was
   dropped but support for v4 was added - #854 thanks to @railto.

 * [DEPENDENCY UPGRADE] Support for `sass-loader` v10 was added - #865
   thanks to @shmshd.

 * Allowed using `copyFiles()` even if you don't have any other
   entrypoints - #831 thanks to @pszalko.

 * [DEPENDENCY UPGRADE] Support for `ts-loader` was upgraded from
   `^5.3` to `^8.0.1`. This means that only `^8.0.1` of `ts-loader`
   is guaranteed to work - #800 thanks to @skmedix.

 * [DEPENDENCY UPGRADE] Support for `eslint` v5 was removed but support
   for v7 was added. Also, `eslint-loader` support for v3 was removed
   but support for v4 was added - see #774 thanks to @Kocal.

## 0.32.1

 * Fixing a bug where the new Stimulus Bridge always required the
   `@symfony/stimulus-bridge/webpack-helper` module, even if you
   were not using this feature - #863 thanks to @Kocal

## 0.32.0

 * [enableStimulusBridge] The new `enableStimulusBridge()` method was
   added to enable the Stimulus bridge and Symfony UX features. See
   https://symfony.com/ux for more details and #859 thanks to @tgalopin.

## 0.31.1

 * [DEPENDENCY UPGRADE] `resolve-url-loader` was updated from `^3.0.1`
   to `^3.1.2`, which should not affect most users. See #848 thanks
   to @Khartir.

## 0.31.0

 * [DEPENDENCY UPGRADE] `assets-webpack-plugin` was updated from `^3.9.7`
   to `^5.1.1`, which should not affect most users.

 * [DEPENDENCY UPGRADE] `less-loader` was updated from `^4.1.0`
   to `^6.2.0`. This will likely not affect you unless you're passing
   certain custom options in `enableLessLoader()`: [CHANGELOG](https://github.com/webpack-contrib/less-loader/blob/master/CHANGELOG.md)

 * [DEPENDENCY UPGRADE] `sass-loader` was updated from `^8.0.0`
   to `^9.0.1`, which has some options-related changes: [CHANGELOG](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md)

## 0.30.0

 * ~~[BC BREAK] The Vue "build" was changed from `vue.esm.js` (full build) to `vue.runtime.esm.js` (runtime build)~~
   This was reverted in Encore 0.30.1.

 * [DEPENDENCY UPGRADE] `sass-loader` was upgraded from version 7 to 8.
   See the [CHANGELOG](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md#800-2019-08-29)
   for breaking changes. This likely will not affect you unless pass
   custom options to `Encore.enableSassLoader()`: several options were
   moved or renamed - #758 thanks to @Kocal.

 * [BEHAVIOR CHANGE] Encore now resolves loaders directly from its
   `node_modules/`, instead of by name. This change will cause a behavior
   change if you do any of the following:

   * Add a different version of a loader (that Encore embeds) into your
     `package.json`: the different loader won't be used anymore.

   * Require a package that also included one of our embedded loaders:
     depending on which one was hoisted it could result in a different
     behavior.

   * Manipulate the generated config and filter loaders based on their
     names: the comparison won't be the same anymore

   See #739 thanks to @Lyrkan.

 * [DEPENDENCY UPGRADE] Webpack minimum version was changed from
   `4.20.0` to `4.36.0` - see #746 and #758.

 * [DEPENDENCY UPGRADE] Upgraded `clean-webpack-plugin` from `^0.1.19` to `^3.0.0`.
   You should not notice significant changes unless you use
   `Encore.cleanupOutputBeforeBuild()` and pass custom options.
   For more info, see [v1 to v2 upgrade notes](https://github.com/johnagan/clean-webpack-plugin/issues/106)
   and [v2 to v3 upgrade notes](https://github.com/johnagan/clean-webpack-plugin/releases/tag/v3.0.0).
   There were no changes from `0.1.19` to `1.0.0`. See #760 thanks to @weaverryan.

 * Encore will now correctly recognize a project-wide `babel.config.js` file - #738
   thanks to @jdreesen.

 * [DEPENDENCY UPGRADE] The `fork-ts-checker-webpack-plugin` package was upgraded for the tests
   from `^0.4.1` to `^4.0.0`. If you're using `enableForkedTypeScriptTypesChecking()`,
   you control the `fork-ts-checker-webpack-plugin` version in your
   `package.json` file. You should upgrade to `^4.0.0` to ensure
   that the plugin works correctly with Encore. See
   [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)
   for details about the changes. See #759 thanks to @weaverryan.

 * Added support for Vue3 - #746 thanks to @weaverryan.

## 0.29.0

 * Support for Node 8 was dropped.

 * [BC BREAK] Several loader dependencies we upgraded across major versions.
   These won't affect most users, but could affect you if you have custom
   configuration for those loaders that changed between versions:

   * `css-loader` upgraded from version 2 to 3 - #729 thanks to @weaverryan.
     [CHANGELOG](https://github.com/webpack-contrib/css-loader/blob/master/CHANGELOG.md#300-2019-06-11)
     This shouldn't affect most users - you are most likely to be affected
     if you're using `Encore.configureCssLoader()`.

   * `style-loader` upgraded from 0.21 to 1.1  - #710 thanks to @Grafikart.
     [CHANGELOG](https://github.com/webpack-contrib/style-loader/blob/master/CHANGELOG.md#100-2019-08-06)
     Unless you're doing custom configuration, it's unlikely you're affected.

   * `file-loader` upgraded from 1.1 to 6  - #731 thanks to @weaverryan.
     [CHANGELOG](https://github.com/webpack-contrib/file-loader/blob/master/CHANGELOG.md#600-2020-03-17)
     If you are importing images/fonts using the CommonJS syntax (`require('foo.png')`),
     you will now need to explicitely retrieve the default export (`require('foo.png').default`)
     in order to get the path of the file.
     Imports done using the `import` keyword should not be affected.

   * `url-loader` upgraded from allowing version 1 or 2 to allowing version 4 - #731 thanks to @weaverryan.
     [CHANGELOG](https://github.com/webpack-contrib/url-loader/blob/master/CHANGELOG.md#400-2020-03-17)
     Unless you're doing custom configuration, it's unlikely you're affected.

 * [BC BREAK] If you're using `enableEslintLoader()`, Encore no longer
   configures eslint for you: you now *must* configure your own
   `.eslintrc.js` file. If this is missing, you'll now get a nice
   error about this telling you how to fix it - #687 thanks to @Kocal.

 * Added `Encore.enableBabelTypeScriptPreset()` to "compile" TypeScript with
   Babel, which is a more performant option than `ts-loader` - #694
   thanks to @Kocal.

 * Added `Encore.configureDevServerOptions()` as an easy way to configure
   dev-server options - #693 thanks to @Kocal.

 * Added `Encore.addCacheGroup()` method as an easy way to add custom
   caching groups - #680 thanks to @Lyrkan.

 * Include the .pcss extension for PostCSS files - #718 thanks to @opdavies

 * Added `Encore.configureStyleLoader()` to configure the `style-loader` - #715
   thanks to @tooltonix.

 * Added `lintVue: true` option to `Encore.enableEslintLoader()` to explicitly
   turn on linting of Vue files (which requires  the `vue-eslint-parser`
   package) - #574 thanks to @Kocal.

## 0.28.0

 * Don't make `@babel/preset-env` use `forceAllTransforms` option
   in production - this will reduce build size in production
   for environments that only need to support more modern
   browsers - #612 thanks to @Lyrkan.

 * Added support with `enablePostCssLoader()` to process files
   ending in `.postcss` or using `lang="postcss"` in Vue - #594
   thanks to @Lyrkan.

 * Allow `resolve-url-loader` to be configured via `enableSassLoader()` -
   #603 thanks to @diegocardoso93.

 * Support was removed from Node 9 (a no-longer-supported version
   of Node) - #585 thanks to @weaverryan

 * [BC Break] Removed the ability to use `[chunkhash]` in
   `configureFilenames()`, which was already deprecated and
   no longer reliable - #608 thanks to @Lyrkan.

## 0.27.0

 * [Behavior Change] The Babel configuration `sourceType` default was
   changed from not being specified (so, the default `module` was used)
   to `unambiguous`. This is to help Babel's `useBuiltIns` functionality
   properly determine if a `require` or `import` should be automatically
   added to your files, based on that file's style - #555 thanks to @Lyrkan.

 * Added JSX support to Vue! #553 thanks to @Kocal.

 * Cleaned up the jsdoc in `index.js` to add better docs and better
   IDE auto-completion - #550 thank sto @Lyrkan.

## 0.26.0

 * [Behavior change] The Babel `useBuiltIns` option default value changed
   from `entry` to `false`, which means that polyfills may no longer be
   provided in the same way. This is due to a change in Babel and core-js.
   To get the same functionality back, run `yarn add core-js --dev`, then use:

   ```js
   Encore.configureBabel(() => {}, {
       useBuiltIns: 'entry', // or try "usage"
       corejs: 3
   })
   ```

   This comes from #545 thanks to @Lyrkan.

 * Added the ability to "resolve" CSS and Sass files without specifying
   the file extension and by taking advantage of the `sass` or `style`
   attribute in an npm package. For example, you can now import the main
   Bootstrap SASS file from within a SASS file by saying `@import ~bootstrap`.
   This will use the `sass` attribute from the bootstrap `package.json`
   file to find which file to load. #474 thanks to @deAtog.

 * Added a new `Encore.enableIntegrityHashes()`, which will cause a new
   `integrity` key to be added to `entrypoints.json` with integrity values
   that can be included in the `script` or `link` tag for that asset - #522
   thanks to @Lyrkan.

 * Allow some parts of `configureBabel()` to be used, even if there is
   an external `.babelrc` configuration file - #544 thanks to @Lyrkan.

## 0.25.0

 * [BC BREAK] Various dependency versions were updated, including
   `css-loader` updated from `^1.0.0` to `^2.1.1` and `resolve-url-loader`
   updated from `^2.3.0` to `^3.0.1`. The minimum Node version was
   also bumped from 6 to 8. See #540 for more details.

 * Added `Encore.disableCssExtraction()` if you prefer your CSS to
   be output via the `style-loader` - #539 thank to @Lyrkan.

 * Added `Encore.configureLoaderRule()` as a way to configure the
   loader config that Encore normally handles - #509 thanks to @Kocal.

 * Babel cache is no longer used for production builds to avoid a
   bug where the cache prevents browserslist from being used - #516
   thanks to @Lyrkan.

## 0.24.0

 * Add CSS modules support in Vue.js for Sass/Less/Stylus - #511
   thanks to @Lyrkan

 * Allow to use Dart Sass instead of Node Sass - #517 thanks to
   @Lyrkan

 * Allow to set a custom context in copyFiles - #518 thanks to
   @Lyrkan

 * Improve 'Install x to use y' and 'Unrecognized method' error
   messages - #520 thanks to @Lyrkan

 * Allow to set @babel/preset-env's useBuiltIns option - #521
   thanks to @Lyrkan

 * Allow setOutputPath to create nested directories - #525 thanks
   to @Lyrkan

## 0.23.0

 * Add support for CSS modules in Vue - #508 thanks to @Lyrkan

 * Store externals in an array - #495 thanks to @deAtog

 * Add `Encore.isRuntimeEnvironmentConfigured()` - #500 thanks
   to @stof.

 * Add the ability to configure watch options - #486 thanks
   to @Kocal

 * Enabled cache and parallelism for terser for faster builds -
   #497 thanks to @Kocal

## 0.22.0

 * [BC BREAK] The values/paths in entrypoints.json were previously
   stripped of their opening slash. That behavior has been changed:
   the opening slash is now included: Before: `build/foo.js`, After: `/build/foo.js`.

## 0.21.0

 * [BC BREAK] Webpack was upgraded to version 4. This includes a number of major
   and minor changes. The changes are listed below under the
   `Webpack 4 Upgrade` section.

 * [BC BREAK] The `createSharedEntry()` no longer can be passed an array of files.
   Instead, set this to just one file, and require the other files from inside that
   file.

 * [DEPRECATION] You must now call either `Encore.enableSingleRuntimeChunk()`
   or `Encore.disableSingleRuntimeChunk()`: not calling either method is
   deprecated. The recommended setting is `Encore.enableSingleRuntimeChunk()`.
   This will cause a new `runtime.js` file to be created, which must be included
   on your page with a script tag (before any other script tags for Encore
   JavaScript files). See the documentation above `enableSingleRuntimeChunk()` in
   `index.js` for more details.

 * [BEHAVIOR CHANGE] Previously, without any config, Babel was
   configured to "transpile" (i.e. re-write) your JavaScript so
   that it was compatible with all browsers that currently have
   more than 1% of the market share. The new default behavior
   is a bit more aggressive, and may rewrite even more code to
   be compatible with even older browsers. The *recommendation*
   is to add a new `browserslist` key to your `package.json` file
   that specifies exactly what browsers you need to support. For
   example, to get the old configuration, add the following to
   `package.json`:

```json
{
    "browserslist": "> 1%"
}
```

See the [browserslist](https://github.com/browserslist/browserslist) library
for a full description of all of the valid browser descriptions.

 * Added a new `copyFiles()` method that is able to copy static files
   into your build directory and allows them to be versioned. #409
   thanks to @Lyrkan

 * Introduced a new `configureSplitChunks()` method that can be
   used to further configure the `optimizations.splitChunks` configuration.

 * A new `entrypoints.json` file is now always output. For expert
   use-cases, the `optimizations.splitChunks.chunks` configuration
   can be set via `configureSplitChunks()` to `all`. Then, you
   can write some custom server-side code to parse the `entrypoints.js`
   so that you know which `script` and `link` tags are needed for
   each entry.

 * The "dynamic import" syntax is now supported out of the box
   because the `@babel/plugin-syntax-dynamic-import` babel plugin
   is always enabled. This allows you to do "Dynamic Imports"
   as described here: https://webpack.js.org/guides/code-splitting/#dynamic-imports

 * A new "version check" system was added for optional dependencies.
   Now, when you install optional plugins to support a feature, if
   you are using an unsupported version, you will see a warning.
   "Package recommendation" errors (i.e. when you enable a feature
   but you are missing some packages) will also contain the version
   in the install string when necessary (e.g. `yarn add foo@^2.0`).

 * Support was added `handlebars-loader` by calling `enableHandlebarsLoader()`.
   #301 thanks to @ogiammetta

 * Support was added for `eslint-loader` by calling `enableEslintLoader()`.
   #243 thanks to @pinoniq

 * The `css-loader` can now be configured by calling `configureCssLoader()`.
   #335 thanks to @XWB

 * It's now possible to control the `exclude` for Babel so that you can
   process certain node_modules packages  through Babel - use
   the new second argument to `configureBabel()` - #401 thanks to
   @Lyrkan.

## Webpack 4 Upgrade Details

 * Node 7 is no longer supported. This is because the new
   `mini-css-extract-plugin` does not support it (and neither)
   does Yarn.

 * For Preact, the necessary plugin the user needs to install
   changed from `babel-plugin-transform-react-jsx` to `@babel/plugin-transform-react-jsx`.

 * The NamedModulesPlugin was removed.

 * The `babel-preset-env` package (which was at version ^1.2.2) was
   removed in favor of `@babel/preset-env`.

 * ExtractTextPlugin was removed and replaced with
   mini-css-extract-plugin. Accordingly, `extractTextPluginOptionsCallback()`
   was removed.

 * Support for CoffeeScript was entirely removed.

 * Actual lang="sass" no longer works for Vue. However, lang="scss"
   continues to work fine.

 * uglifyjs-webpack-plugin was replaced by terser-webpack-plugin.
   If you're using `configureUglifyJsPlugin()`, please switch to
   `configureTerserPlugin()` instead.

## 0.20.1

 * Upgraded webpack-manifest-plugin from 2.0.0 RC1 to ^2.0.0.
   The original RC version was not meant to be used in a release.
   #306 via @weaverryan

## 0.20.0

 * Added `Encore.configureUrlLoader()` method that allows you
   to inline smaller images/file assets for better performance
   #296 via @Lyrkan

 * Improved error messages that recommend using yarn vs npm
   #291 via @Lyrkan

 * Fixed bug with using --stats option #299 via @Lyrkan

 * Allow configuration callbacks to return their value
   #300 via @Lyrkan

 * Updated to use the new v2 of webpack-manifest-plugin
   #164 via @weaverryan

## 0.19.0

 * Updated how Encore is exported to support better IDE auto-completion
   #263 via @florentdestremau

## 0.18.0

 * Added `Encore.addAliases()` and `Encore.addExternal()` shortcut methods
   #217 via @Lyrkan

 * Fixed hash lengths - normalized all to 8 - #216 via @Lyrkan

 * Added CoffeeScript loader - #201 via @harentius

## 0.17.0

 * Added build notifications by calling `Encore.enableBuildNotifications()` -
   #190 via @Lyrkan

 * Added Stylus support via `Encore.enableStylusLoader()` - #195
   via @mneuhaus

## 0.16.0

 * Added a priority argument to the `addPlugin()` method so that we
    can (mostly in the future) allow plugins to be ordered, if/when
    that becomes necessary - #177 via @Lyrkan

 * Fixed several minor bugs related to extra `.map` files (#170),
    always having a DefinePlugin enabled (#172), fixing extra
    instances of the ts-loader (#181) and upgrading a dependency
    to avoid a deprecation warning (#182) - all via @Lyrkan

## 0.15.1

 * Fixed bug with using `?` in your versioning strategy with
   `addStyleEntry` - #161 via @Lyrkan

 * Fixed bug when using `webpack.config.babel.js` with ES6
   imports - #167 via @Lyrkan

## 0.15.0

 * Add support for [Preact](https://preactjs.com/) - #144 via @Lyrkan
 
 * Added `Encore.configureManifestPlugin()` method - #142 via @Seikyo

 * Added 5 new methods to configure plugins! #152 via @Lyrkan
   * `Encore.configureDefinePlugin()`
   * `Encore.configureExtractTextPlugin()`
   * `Encore.configureFriendlyErrorsPlugin()`
   * `Encore.configureLoaderOptionsPlugin()`
   * `Encore.configureUglifyJsPlugin()`

## 0.14.0

 * Added `Encore.configureFilenames()` so that you can fully control
   the filename patterns for all types of files - #137 via @Lyrkan

 * Added `Encore.configureRuntimeEnvironment()`, which is useful
   if you need to require `webpack.config.js` from some non-Encore
   process (e.g. Karma) - #115 via @Lyrkan

## 0.13.0

 * [BEHAVIOR CHANGE] Image and font files now *always* include
   a hash in their filename, and the hash is shorter - #110 via @Lyrkan

 * Fixed a bug that caused extra comments to be in the final production
   compiled JavaScript - #132 via @weaverryan

 * `Encore.enablePostCssLoader()` now accepts an options callback -
   #130 via @Lyrkan

 * `Encore.enableLessLoader()` now accepts an options callback -
   #134 via @Lyrkan

 * Added `Encore.enableForkedTypeScriptTypesChecking()` to enable
   [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin)
   for faster typescript type checking - #101 via @davidmpaz

 * Added `Encore.disableImagesLoader()` and `Encore.disableFontsLoader()`
   to totally disable the `file-loader` rules for images and fonts -
   #103 via @Lyrkan

## 0.12.0

 * Fixed a bug with webpack 3.4.0 ("Can't resolve dev") - #114.

 * Added `--keep-public-path` option to `dev-server` that allows
   you to specify that you do *not* want your `publicPath` to
   automatically point at the dev-server URL. Also relaxed the
   requirements when using `dev-server` so that you *can* now
   specify a custom, fully-qualified `publicPath` URL - #96

 * Fixed bug where `@import` CSS wouldn't use postcss - #108

## 0.11.0

 * The `webpack` package was upgraded from version 2.2 to 3.1 #53. The
    `extract-text-webpack-plugin` package was also upgraded from
    2.1 to 3.0.

## 0.10.0

 * [BC BREAK] If you're using `enableSassLoader()` AND passing an options
   array, the options now need to be moved to the second argument:

   ```js
   // before
   .enableSassLoader({ resolve_url_loader: true });

   // after
   enableSassLoader(function(sassOptions) {}, {
       resolve_url_loader: true
   })
   ```

 * Allowing typescript options callback to be optional - #75

 * Allow the Encore singleton to be reset - #83

 * Fixing bug with vue-loader and sass - #89

## 0.9.1

 * Syntax error fix - #64

## 0.9.0

 * [BEHAVIOR CHANGE] When using `autoProvidejQuery()`, `window.jQuery` is now also
   included (and so will be re-written in the compiled files). If you're also exposing
   `jQuery` as a global variable, you'll need to update your code:

   ```js
   // Before: if you had this
   window.jQuery = require('jquery');

   // After: change to this
   global.jQuery = require('jquery');
   ```

  * Vue.js support! See #49

  * Typescript support! See #50

## 0.8.0

 * Windows support fixed #28

 * Added `Encore.addPlugin()` #19

 * Added `Encore.addLoader()` #11

 * `Encore.cleanupOutputBeforeBuild()` now empties the directory
   instead or removing it.

