# Develop Plugins

We provide a highly flexible plugin development approach, with cross-platform support - [Visit GitHub Plugin Center](https://github.com/leaferjs/leafer-x).

You can quickly create a plugin using the [create-leafer CLI tool](../create/leafer.md#quickly-create-leaferx-plugin-template).

##

Simply import `@leafer-ui/core` (cross-platform core package) and `@leafer-ui/interface` (interfaces) as external dependencies (not bundled into the plugin, only referenced) to freely develop and export plugin capabilities.

```ts
import { Group } from '@leafer-ui/core'

export class Selector extends Group {}
```

## Plugin Naming Convention

NPM package name: leafer-x-pluginName

Global variable: LeaferX.pluginName

Take the selector plugin as an example:

```sh
leafer-x-selector  # npm package name: read as leafer multiplied by selector (plugin)

LeaferX.selector # global variable
```

## Quick Start

To help everyone get started quickly, we have prepared a plugin development template that includes running, testing, and packaging features.

We also provide the [create-leafer CLI tool](../create/leafer.md#quickly-create-leaferx-plugin-template) to quickly create plugins and avoid manual content replacement.

## Plugin Development Template

[Typescript](https://ts.nodejs.cn/) + [Rollup.js](https://www.rollupjs.com/) + [Vite](https://cn.vitejs.dev/guide/) + [Vitest](https://cn.vitest.dev/guide/) [Download template here](https://github.com/leaferjs/leafer-x/archive/refs/heads/main.zip)

```sh
git clone https://github.com/leaferjs/leafer-x
```

Make sure to keep the same version number as the main version. It will be turned into a scaffolding tool later.

### Directory Structure

```sh
main.ts # Debug demo entry used during plugin development, can import leafer-ui for development and debugging
src # Main directory for plugin code, can only import @leafer-ui/core and @leafer-ui/interface

package.json  # Modify plugin name, entry file and other information, supports web and node environments
tsconfig.json # typescript configuration file
rollup.config.js # Need to modify the exported global variable name, rollup build script configuration file

.gitignore # Files and directories to ignore when committing to git
.eslintrc.js # Code linting configuration
.prettierrc # Code formatting configuration

__tests__ # Unit test directory

README.md # Plugin introduction, modify to your own content
LICENSE # License file, modify to your own name

# Automatically created
dev # Development directory, stores demo build code using main.ts as entry
dist # Build directory, stores bundled code using src/index.ts as entry
types # Stores the plugin's d.ts type declaration files
```

### Run

:::danger Notes

It is recommended to use npm to install and run. Using other package managers may cause issues.

:::

```sh
npm run start # Start the project
npm run build # Build plugin code, also generates types
npm run test # Automated testing
```

### Code Style

Use @typescript-eslint, prefer single quotes, no semicolons at the end of statements. You can configure your editor to auto-format on save.

It is recommended to keep a consistent code style, making it easier to review code and submit PRs.

## Using Plugins

::: code-group

```ts [web]
import { Leafer, Rect } from 'leafer-ui'
import { Selector, SelectEvent } from 'leafer-x-selector' // Must be imported after leafer-ui

// Specific logic
const selector = new Selector()
```

```html
<script src="https://unpkg.com/leafer-ui"></script>
<script src="https://unpkg.com/leafer-x-selector"></script>
<script>
  const { Leafer, Rect } = LeaferUI
  const { Selector, SelectEvent } = LeaferX.selector

  // Specific logic
  const selector = new Selector()
</script>
```

```ts [node]
import { Leafer, Rect } from '@leafer-ui/node'
import { Selector, SelectEvent } from 'leafer-x-selector' // Must be imported after leafer-ui

// Specific logic
const selector = new Selector()
```

```ts [miniapp]
import { Leafer, Rect } from '@leafer-ui/miniapp'
import { Selector, SelectEvent } from 'leafer-x-selector' // Must be imported after leafer-ui

// Specific logic
const selector = new Selector()
```

:::

## Plugin Examples

### [Graphic Editor Plugin](./in/editor/index.md)
