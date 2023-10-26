# @pieces.app/client

<h1 align="center">
   <b>
        <a href="https://pieces.app"><img src="https://storage.googleapis.com/pieces_static_resources/pfd_wiki/PIECES_MAIN_LOGO_WIKI.png" /></a><br>
    </b>
</h1>

<p align="center">Powerful code engine package for writing applications on top of Pieces OS and communicated with the locally hosted server to create copilot chats, to save assets + formats and more.</p>

<p align="center">
	<a href="https://pieces.app"><b>Website</b></a> •
	<a href="https://docs.pieces.app"><b>Documentation</b></a>
</p>

## Table of Contents

- [Operating System Support](#operating-system-support)
- [Installing](#installing)
    - [Pieces OS](#pieces-os)
    - [Downloading NPM Package](#download-package)
- [Testing Usage](#testing-usage)
- [Supported Versions](#supported-versions)

## Operating System Support
---
Currently, Pieces OS is utilized as the primary backend service with [Pieces for Developers](https://docs.pieces.app/installation-getting-started/what-am-i-installing) that powers all of the features that can be used there. Both programs are designed for full support by all operating systems, although our [Linux Platform](https://docs.pieces.app/installation-getting-started/linux) is available, it leans towards a 'heavily supported beta' and may experience incremental issues on specific flavors of linux.

> if you have any issues on any Linux flavor be sure to check our list of supported distributions on the [linux documentation page](https://docs.pieces.app/installation-getting-started/linux).

## Installing
---
When developing on the Pieces platform, you need two primary things:

1. **Download the Pieces OS application**
2. **Install the npm package**

## Pieces OS
---
Pieces OS runs in the background of your computer and serves as a hub for all plugins and extensions developed by the team. In order to utilize your own Server locally and support all the functionality that powers things like [Global Search](), [Copilot Chats](), Asset Saving, context, and more.

Select the right version to download Pieces OS for your operating system:
- [macOS](https://docs.pieces.app/installation-getting-started/macos) - [Compatible with macOS 11 Big Sur or higher]
- [Windows](https://docs.pieces.app/installation-getting-started/windows) - [Compatible with Windows 10 version 1809 or higher]
- [Linux](https://docs.pieces.app/installation-getting-started/linux) - [Compatible with Ubuntu 18 or Higher]

You can also visit our user facing documentation to learn more about different features that are available now to give you an idea of some of the things that you can potentially do.

## Downloading NPM Package
---

Using npm:

```bash
npm install @pieces-app/client
```

Using pnpm:

```bash
pnpm add @pieces-app/client
```

After you install the package, you  can import the library into your file(s) using `require`:

```js
const pieces = require('@pieces-app/client')
```

or you can import the package using `import` as well:

```js
import * as pieces from '@pieces-app/client'
```

## Testing Usage
Following the initial download and light configuration, you can perform a simple test to ensure that both **Pieces OS** is running and that **you also have correctly installed the NPM package**.

Use this simple one-liner and add it into your index.js file, then run your project to get data back from your first endpoint - `wellKnownVersionAPI` (note that this is using the `require` from above):

```js
new pieces.WellKnownApi().getWellKnownVersion().then(console.log);
```

Your output in your console should look similar to this, depending on your version. The version will be tucked underneath the response and in this case is `6.3.0`:

```
[AsyncFunction: fetch]
_Response [Response] {
  [Symbol(realm)]: null,
  [Symbol(state)]: {
    aborted: false,
    rangeRequested: false,
    timingAllowPassed: true,
    requestIncludesCredentials: true,
    type: 'default',
    status: 200,
    timingInfo: {
      startTime: 80.49791699647903,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: 80.49791699647903,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 0,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null
    },
    cacheState: '',
    statusText: 'OK',
    headersList: _HeadersList {
      cookies: null,
      [Symbol(headers map)]: [Map],
      [Symbol(headers map sorted)]: null
    },
    urlList: [ URL {} ],
    body: { stream: undefined }
  },
  [Symbol(headers)]: _HeadersList {
    cookies: null,
    [Symbol(headers map)]: Map(10) {
      'x-powered-by' => [Object],
      'access-control-allow-headers' => [Object],
      'date' => [Object],
      'x-hacker' => [Object],
      'access-control-allow-origin' => [Object],
      'content-length' => [Object],
      'x-frame-options' => [Object],
      'content-type' => [Object],
      'x-xss-protection' => [Object],
      'x-content-type-options' => [Object]
    },
    [Symbol(headers map sorted)]: null
  }
}
6.3.0
```

You are now can confirm the installation of both Pieces OS and @pieces-app/client package inside your project. We are working on created expanded documentation with examples, a developer documentation to outline all the ins and outs of our available endpoints soon. 

## Supported Versions 
**It is recommended to always stay up to date with the latest production release of Pieces OS.**

If you are limited on updating versions due to development progress or needing to remain on a specific version - try to remain on the same _minor version_ to avoid any issues. If you start to encounter issues, please update to the next available version when receiving errors.


