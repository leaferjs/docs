# FAQ

### Error after updating versions

`leafer-ui` and official plugin packages must be updated together.

如出现旧版本缓存冲突导致的报错，需要删除 lock 文件重新安装一下。

Learn how to [quickly update versions](../update.md).

### Creator.editor is not a function

The graphic editor plugin is not installed, or its version is inconsistent with the main package version (please update the version number and delete the lock file before reinstalling).

### Newly added plugins not working or errors occur

Check whether the newly added plugin version matches the main package version. This issue is usually caused by version mismatch. Please unify versions and delete the lock file before reinstalling.

### Page layout lag or some methods not working

Check whether `leafer` or element instances are bound to a frontend framework’s reactive system. This can cause heavy data proxying, method overrides, and slow down layout performance.

### Mini program build npm fails at runtime

Simply switch to another base library version and recompile.

### Server-side rendering framework build issues

When using SSR frameworks like Nuxt.js or Next.js, you need to load `leafer-ui` asynchronously to make the build succeed. Synchronous loading may fail because Canvas-related environment variables cannot be found.

[https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-external-libraries](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-external-libraries)

### Canvas continuously expands causing lag

During auto layout, if a parent container has width or height set to 100%, and also has padding or border, it may cause the canvas to continuously resize and expand.

### PNG uploaded via WeChat JS-SDK becomes JPG

Please use the native HTML5 `<input>` element for uploading.

### Mini program interaction events occasionally fail

During the `onLoad` event in mini programs, the canvas size and `clientRect` may not be finalized yet, which can lead to incorrect interaction regions. Use `setTimeout` to delay Leafer initialization to fix this.

### Node.js rendering output is empty

The latest version of `skia-canvas` has compatibility issues. Currently, only version 2.x is supported.
