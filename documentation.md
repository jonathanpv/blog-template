# Fumadocs Framework: Components
URL: /docs/ui/components
Source: https://raw.githubusercontent.com/fuma-nama/fumadocs/refs/heads/main/apps/docs/content/docs/ui/(ui)/components/index.mdx

Additional components to improve your docs
        
## Overview

Additional components that you can use:

<DocsCategory />

### MDX Components

The default MDX components include Cards, Callouts, Code Blocks and Headings.

```ts
import defaultMdxComponents from 'fumadocs-ui/mdx';
```

### Relative Link

<Callout type="warn">
  Server Component only.
</Callout>

To support links with relative file path in `href`, override the default `a` component with:

```tsx title="app/docs/[[...slug]]/page.tsx"
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';

const page = source.getPage(['...']);

return (
  <MdxContent
    components={getMDXComponents({
      // override the `a` tag
      a: createRelativeLink(source, page),
    })}
  />
);
```

```mdx
[My Link](./file.mdx)
```

Example: [`../../(integrations)/feedback.mdx`](../../\(integrations\)/feedback.mdx)

# Fumadocs MDX (the built-in content source): Collections
URL: /docs/mdx/collections
Source: https://raw.githubusercontent.com/fuma-nama/fumadocs/refs/heads/main/apps/docs/content/docs/mdx/collections.mdx

Collection of content data for your app
        
## Define Collections

Define a collection to parse a certain set of files.

```ts
import { defineCollections } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: './content/blog',
  schema: z.object({
    // schema
  }),
  // other options
});
```

### `type`

The accepted type of collection.

```ts
import { defineCollections } from 'fumadocs-mdx/config';

// only scan for json/yaml files
export const metaFiles = defineCollections({
  type: 'meta',
  // options
});
```

* `type: meta`

  Accept JSON/YAML files, available options:

  <TypeTable
    type={{
    "name": "MetaCollection",
    "description": "",
    "entries": [
      {
        "name": "type",
        "description": "",
        "tags": [],
        "type": "\"meta\"",
        "simplifiedType": "\"meta\"",
        "required": true,
        "deprecated": false
      },
      {
        "name": "schema",
        "description": "",
        "tags": [],
        "type": "CollectionSchema<Schema, { path: string; source: string; }> | undefined",
        "simplifiedType": "function | Schema",
        "required": false,
        "deprecated": false
      },
      {
        "name": "dir",
        "description": "Directories to scan",
        "tags": [],
        "type": "string | string[]",
        "simplifiedType": "array | string",
        "required": true,
        "deprecated": false
      },
      {
        "name": "files",
        "description": "what files to include/exclude (glob patterns)\n\nInclude all files if not specified",
        "tags": [],
        "type": "string[] | undefined",
        "simplifiedType": "array",
        "required": false,
        "deprecated": false
      }
    ]
  }}
  />

* `type: doc`

  Markdown/MDX documents, available options:

  <TypeTable
    type={{
    "name": "DocCollection",
    "description": "",
    "entries": [
      {
        "name": "type",
        "description": "",
        "tags": [],
        "type": "\"doc\"",
        "simplifiedType": "\"doc\"",
        "required": true,
        "deprecated": false
      },
      {
        "name": "postprocess",
        "description": "",
        "tags": [],
        "type": "Partial<PostprocessOptions> | undefined",
        "simplifiedType": "Partial<object>",
        "required": false,
        "deprecated": false
      },
      {
        "name": "mdxOptions",
        "description": "",
        "tags": [],
        "type": "ProcessorOptions | undefined",
        "simplifiedType": "ProcessorOptions",
        "required": false,
        "deprecated": false
      },
      {
        "name": "async",
        "description": "Load files with async",
        "tags": [],
        "type": "Async | undefined",
        "simplifiedType": "Async",
        "required": false,
        "deprecated": false
      },
      {
        "name": "schema",
        "description": "",
        "tags": [],
        "type": "CollectionSchema<Schema, { path: string; source: string; }> | undefined",
        "simplifiedType": "function | Schema",
        "required": false,
        "deprecated": false
      },
      {
        "name": "dir",
        "description": "Directories to scan",
        "tags": [],
        "type": "string | string[]",
        "simplifiedType": "array | string",
        "required": true,
        "deprecated": false
      },
      {
        "name": "files",
        "description": "what files to include/exclude (glob patterns)\n\nInclude all files if not specified",
        "tags": [],
        "type": "string[] | undefined",
        "simplifiedType": "array",
        "required": false,
        "deprecated": false
      }
    ]
  }}
  />

### `schema`

The schema to validate file data (frontmatter on `doc` type, content on `meta` type).

```ts
import { defineCollections } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: './content/blog',
  schema: z.object({
    name: z.string(),
  }),
});
```

> [Standard Schema](https://standardschema.dev) compatible libraries, including Zod, are supported.

Note that the validation is done at build time, hence the output must be serializable.
You can also pass a function that receives the transform context.

```ts
import { defineCollections } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: './content/blog',
  schema: (ctx) => {
    return z.object({
      name: z.string(),
      testPath: z.string().default(
        // original file path
        ctx.path,
      ),
    });
  },
});
```

### `mdxOptions`

Customise MDX options at the collection level.

> This API is only available on `doc` type.

```ts title="source.config.ts"
import { defineCollections, getDefaultMDXOptions } from 'fumadocs-mdx/config';

export const blog = defineCollections({
  type: 'doc',
  mdxOptions: {
    // mdx options
  },
});
```

By design, this will remove all default settings applied by your global config and Fumadocs MDX.
You have full control over MDX options.

You can use [`getDefaultMDXOptions`](/docs/mdx/mdx) to apply the default MDX preset.

```ts title="source.config.ts"
import { defineCollections, getDefaultMDXOptions } from 'fumadocs-mdx/config';

export const blog = defineCollections({
  type: 'doc',
  mdxOptions: getDefaultMDXOptions({
    // extend the preset
  }),
});
```

### `postprocess`

> This API is only available on `doc` type.

See [Postprocess](/docs/mdx/postprocess).

## Define Docs

Define a collection for Fumadocs.

```ts
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: '/my/content/dir',
  docs: {
    // optional, options of `doc` collection
  },
  meta: {
    // optional, options of `meta` collection
  },
});
```

### `dir`

Instead of per collection, you should customise content directory from `defineDocs`:

```ts
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/guides',
});
```

### `schema`

You can extend the default Zod 4 schema of `docs` and `meta`.

```ts
import { frontmatterSchema, metaSchema, defineDocs } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      index: z.boolean().default(false),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      // other props
    }),
  },
});
```

# Fumadocs Framework: Themes
URL: /docs/ui/theme
Source: https://raw.githubusercontent.com/fuma-nama/fumadocs/refs/heads/main/apps/docs/content/docs/ui/(ui)/theme.mdx

Add Theme to Fumadocs UI
        
















import { WidthTrigger } from './theme.client';

## Overview

Fumadocs UI adds its own colors, animations, and utilities with Tailwind CSS preset.

### Setup

Only Tailwind CSS v4 is supported, the preset will also include source to Fumadocs UI itself:

```css title="Tailwind CSS"
@import 'tailwindcss';
@import 'fumadocs-ui/css/neutral.css';
@import 'fumadocs-ui/css/preset.css';
```

For Shadcn UI, you can use the `shadcn` preset to let Fumadocs UI to adopt your Shadcn UI theme.

```css
@import 'tailwindcss';
@import 'fumadocs-ui/css/shadcn.css';
@import 'fumadocs-ui/css/preset.css';
```

### Preflight Changes

By using the Tailwind CSS plugin, or the pre-built stylesheet, your default border, text and background
colors will be changed.

### Light/Dark Modes

Fumadocs supports light/dark modes with [`next-themes`](https://github.com/pacocoursey/next-themes), it is included in Root Provider.

See [Root Provider](/docs/ui/layouts/root-provider#theme-provider) to learn more.

### RTL Layout

RTL (Right-to-left) layout is supported.

To enable RTL, set the `dir` prop to `rtl` in body and root provider (required for Radix UI).

```tsx
import { RootProvider } from 'fumadocs-ui/provider/<framework>';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body dir="rtl">
        <RootProvider dir="rtl">{children}</RootProvider>
      </body>
    </html>
  );
}
```

### Layout Width

Customise the max width of docs layout with CSS Variables.

```css
:root {
  --fd-layout-width: 1400px;
}
```

<WidthTrigger />

### Colors

It comes with many themes out-of-the-box, you can pick one you prefer.

```css
@import 'fumadocs-ui/css/<theme>.css';
@import 'fumadocs-ui/css/preset.css';
```

<Tabs items={['neutral', 'black', 'vitepress', 'dusk', 'catppuccin', 'ocean', 'purple', 'solar']}>
  <Tab value="neutral">
        <img alt="Neutral" src={__img0} placeholder="blur" />
  </Tab>

  <Tab value="black">
        <img alt="Black" src={__img1} placeholder="blur" />
  </Tab>

  <Tab value="vitepress">
        <img alt="Vitepress" src={__img2} placeholder="blur" />
  </Tab>

  <Tab value="dusk">
        <img alt="Dusk" src={__img3} placeholder="blur" />
  </Tab>

  <Tab value="Catppuccin">
        <img alt="Catppuccin" src={__img4} placeholder="blur" />
  </Tab>

  <Tab value="ocean">
        <img alt="Ocean" src={__img5} placeholder="blur" />
  </Tab>

  <Tab value="purple">
        <img alt="Purple" src={__img6} placeholder="blur" />
  </Tab>

  <Tab value="solar">
        <img alt="Solar" src={__img7} placeholder="blur" />
  </Tab>
</Tabs>

The design system was inspired by [Shadcn UI](https://ui.shadcn.com), you can also customize the colors using CSS variables.

```css title="global.css"
@theme {
  --color-fd-background: hsl(0, 0%, 96%);
  --color-fd-foreground: hsl(0, 0%, 3.9%);
  --color-fd-muted: hsl(0, 0%, 96.1%);
  --color-fd-muted-foreground: hsl(0, 0%, 45.1%);
  --color-fd-popover: hsl(0, 0%, 98%);
  --color-fd-popover-foreground: hsl(0, 0%, 15.1%);
  --color-fd-card: hsl(0, 0%, 94.7%);
  --color-fd-card-foreground: hsl(0, 0%, 3.9%);
  --color-fd-border: hsla(0, 0%, 80%, 50%);
  --color-fd-primary: hsl(0, 0%, 9%);
  --color-fd-primary-foreground: hsl(0, 0%, 98%);
  --color-fd-secondary: hsl(0, 0%, 93.1%);
  --color-fd-secondary-foreground: hsl(0, 0%, 9%);
  --color-fd-accent: hsla(0, 0%, 82%, 50%);
  --color-fd-accent-foreground: hsl(0, 0%, 9%);
  --color-fd-ring: hsl(0, 0%, 63.9%);
}

.dark {
  --color-fd-background: hsl(0, 0%, 7.04%);
  --color-fd-foreground: hsl(0, 0%, 92%);
  --color-fd-muted: hsl(0, 0%, 12.9%);
  --color-fd-muted-foreground: hsla(0, 0%, 70%, 0.8);
  --color-fd-popover: hsl(0, 0%, 11.6%);
  --color-fd-popover-foreground: hsl(0, 0%, 86.9%);
  --color-fd-card: hsl(0, 0%, 9.8%);
  --color-fd-card-foreground: hsl(0, 0%, 98%);
  --color-fd-border: hsla(0, 0%, 40%, 20%);
  --color-fd-primary: hsl(0, 0%, 98%);
  --color-fd-primary-foreground: hsl(0, 0%, 9%);
  --color-fd-secondary: hsl(0, 0%, 12.9%);
  --color-fd-secondary-foreground: hsl(0, 0%, 92%);
  --color-fd-accent: hsla(0, 0%, 40.9%, 30%);
  --color-fd-accent-foreground: hsl(0, 0%, 90%);
  --color-fd-ring: hsl(0, 0%, 54.9%);
}
```

### Typography

We have a built-in plugin forked from [Tailwind CSS Typography](https://tailwindcss.com/docs/typography-plugin).

The plugin adds a `prose` class and variants to customise it.

```tsx
<div className="prose">
  <h1>Good Heading</h1>
</div>
```

> The plugin works with and only with Fumadocs UI's MDX components, it may conflict with `@tailwindcss/typography`.
> If you need to use `@tailwindcss/typography` over the default plugin, [set a class name option](https://github.com/tailwindlabs/tailwindcss-typography/blob/main/README.md#changing-the-default-class-name) to avoid conflicts.

# Fumadocs Core (core library of framework): Loader API
URL: /docs/headless/source-api
Source: https://raw.githubusercontent.com/fuma-nama/fumadocs/refs/heads/main/apps/docs/content/docs/headless/source-api/index.mdx

Turn a content source into a unified interface
        
## What it does?

`loader()` provides an interface for Fumadocs to integrate with file-system based content sources.

* Generate [page slugs and page tree](/docs/headless/page-conventions).
* Assign URL to each page.
* Output useful utilities to interact with content.

It doesn't rely on the real file system (zero `node:fs` usage), a virtual storage is also allowed.

## Usage

You can use it with built-in content sources like Fumadocs MDX.

```ts
import { loader } from 'fumadocs-core/source';
import { docs } from '@/.source';

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: '/docs',
});
```

### URL

You can override the base URL, or specify a function to generate URL for each page.

```ts
import { loader } from 'fumadocs-core/source';

loader({
  baseUrl: '/docs',
  // or you can customise it with function
  url(slugs, locale) {
    if (locale) return '/' + [locale, 'docs', ...slugs].join('/');
    return '/' + ['docs', ...slugs].join('/');
  },
});
```

### Icons

Load the [icon](/docs/headless/page-conventions#icons) property specified by pages and meta files.

```ts
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

loader({
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
```

### I18n

Pass the `i18n` config to loader.

```ts title="lib/source.ts"
import { i18n } from '@/lib/i18n';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  i18n, // [!code highlight]
});
```

With i18n enabled, loader will generate a page tree for every locale.

If translations are missing for a page, it fallbacks to [`fallbackLanguage`](/docs/headless/internationalization#fallback-language).

## Output

The loader outputs a source object.

### Get Page

Get page with slugs.

```ts
import { source } from '@/lib/source';

source.getPage(['slug', 'of', 'page']);

// with i18n
source.getPage(['slug', 'of', 'page'], 'locale');
```

### Get Pages

Get a list of page available for locale.

```ts
import { source } from '@/lib/source';

// from any locale
source.getPages();

// for a specific locale
source.getPages('locale');
```

### Page Tree

```ts
import { source } from '@/lib/source';

// without i18n
source.pageTree;

// with i18n
source.pageTree['locale'];
```

### Get from Node

The page tree nodes contain references to their original file path.
You can find their original page or meta file from the tree nodes.

```ts
import { source } from '@/lib/source';

source.getNodePage(pageNode);
source.getNodeMeta(folderNode);
```

### Params

A function to generate output for Next.js `generateStaticParams`.
The generated parameter names will be `slug: string[]` and `lang: string` (i18n only).

```ts title="app/[[...slug]]/page.tsx"
import { source } from '@/lib/source';

export function generateStaticParams() {
  return source.generateParams();
}
```

### Language Entries

Get available languages and its pages.

```ts
import { source } from '@/lib/source';

// language -> pages
const entries = source.getLanguages();
```
