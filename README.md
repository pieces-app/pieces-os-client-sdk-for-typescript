<h1 align="center">
    <b>
        <a href="https://pieces.app">
            <picture>
                <source srcset="./assets/Logo-light-theme.png" media="(prefers-color-scheme: light)">
                <source srcset="./assets/Logo-dark-theme.png" media="(prefers-color-scheme: dark)">
                <img src="./assets/Logo-dark-theme.png" height="125" width="600" />
            </picture>
        </a><br>
    </b>
</h1>

# <p align="center"> Pieces OS Client SDK For TypeScript
   <p align="center">
      <a href="https://github.com/pieces-app/pieces-os-client-sdk-for-typescript" alt="GitHub contributors">
         <img src="https://img.shields.io/github/contributors/pieces-app/pieces-os-client-sdk-for-typescript.svg" />
      <a>
      <a href="https://github.com/pieces-app/pieces-os-client-sdk-for-typescript" alt="GitHub issues by-label">
         <img src="https://img.shields.io/github/issues/pieces-app/pieces-os-client-sdk-for-typescript" />
      </a>
      <a href="https://discord.gg/getpieces" alt="Discord">
         <img src="https://img.shields.io/badge/Discord-@layer5.svg?color=7389D8&label&logo=discord&logoColor=ffffff" />
      </a>
      <a href="https://twitter.com/getpieces" alt="Twitter Follow">
         <img src="https://img.shields.io/twitter/follow/pieces.svg?label=Follow" />
      </a>
      <a href="https://github.com/pieces-app/pieces-os-client-sdk-for-typescript" alt="License">
         <img src="https://img.shields.io/github/license/pieces-app/pieces-os-client-sdk-for-typescript.svg" />
      </a>
      <a href="https://badge.fury.io/js/@pieces.app%2Fpieces-os-client" >
         <img src="https://badge.fury.io/js/@pieces.app%2Fpieces-os-client.svg" />
      </a>
      <a href="https://img.shields.io/npm/dm/@pieces.app/pieces-os-client.svg" >
         <img src="https://img.shields.io/npm/dm/@pieces.app/pieces-os-client.svg" />
      </a>
      <a href="https://img.shields.io/npm/dt/@pieces.app/pieces-os-client.svg" >
         <img src="https://img.shields.io/npm/dt/@pieces.app/pieces-os-client.svg" />
      </a>
   </p>
</p>


## Introduction
The Pieces SDK is a powerful code engine package designed for writing applications on top of [Pieces OS](/installation-getting-started/what-am-i-installing). It facilitates communication with a locally hosted server to enable features such as copilot chats, asset saving, and more.

## Requirements
The Pieces SDK has the following system requirements:

- [Pieces OS](/installation-getting-started/what-am-i-installing) running as a backend service.
- NodeJs environment with npm for installing the SDK package.

## Installation

To get started with the Pieces SDK, follow these steps:

### 1. Downloading Pieces OS

Pieces OS runs in the background of your computer and serves as a hub for all plugins and extensions developed by the team. In order to utilize your own Server locally and support all the functionality that powers things like [Global Search](https://docs.pieces.app/features/global-search), [Copilot Chats](https://docs.pieces.app/features/pieces-copilot), [Asset Saving](https://docs.pieces.app/features/managing-saved-materials), [context](https://docs.pieces.app/features/pieces-copilot#set-your-own-copilot-context), and more.

Select the right version to download Pieces OS for your operating system:

- [macOS](https://docs.pieces.app/installation-getting-started/macos)
- [Windows](https://docs.pieces.app/installation-getting-started/windows)
- [Linux](https://docs.pieces.app/installation-getting-started/linux) 

### 2. Downloading NPM Package

Using npm:

```bash
npm install @pieces.app/pieces-os-client
```
Using pnpm:

```bash
pnpm add @pieces.app/pieces-os-client
```

Using yarn:

```bash
yarn add @pieces.app/pieces-os-client
```

## Usage
After you install the package, you can import the library into your file(s) using require:

```javascript
const pieces = require('@pieces.app/pieces-os-client')
```

or you can import the package using import as well:

```javascript
import * as pieces from '@pieces.app/pieces-os-client'
```

> **Recommendation**
> The order that npm packages are saved and added to your dependencies is important and will affect your installation flow. 
>
> **If you are having issues with your installation, it is likely due to a conflict in Typescript versions - `npm uninstall typescript` - then go back and perform all other npm installations before reinstalling typescript again**.

You can get it here: [GitHub Repo](https://github.com/pieces-app/example-typescript)

For detailed usage instructions and examples, refer to the [documentation](https://docs.pieces.app/build).

## Features
The Pieces SDK offers the following key features:

1. Copilot Chats: Communicate seamlessly with copilot chats functionality.
2. Asset Management: Save and manage assets and formats efficiently.
3. Local Server Interaction: Interact with a locally hosted server for various functionalities.
4. Multi LLMs support: Use any Pieces supported LLMs to power apps.

## Getting Started
> It's important to note that the localhost port for Pieces OS is different based on the operating system.
>
> For Linux, you should use `localhost:5323`.
> 
> For macOS and Windows, you should use `localhost:1000`.

Create a `main.ts` file and add the following code:

```typescript
import * as Pieces from '@pieces.app/pieces-os-client'
import os from 'os';

const platform = os.platform();
let port = 1000;

// Defining the port based on the operating system. For Linux, the port is 5323, and for macOS/Windows, the port is 1000.
if (platform === 'linux') {
  port = 5323;
} else {
  port = 1000;
}

// The `basePath` defaults to http://localhost:1000, however we need to change it to the correct port based on the operating system.
const configuration = Pieces.Configuration({
  basePath: `http://localhost:${port}`
})
// Create an instance of the WellKnownApi class
const apiInstance = new Pieces.WellKnownApi(configuration)

apiInstance.getWellKnownHealth().then((data: string) => {
  console.log(data) // ok
}).catch((error: unknown) => console.error(error))
```

Run the following command to execute the script:

```shell
ts-node main.ts
```

## Examples
Here are a few examples of using some of the basic endpoints for getting up and running, along with creating an asset for the first time. 




<details>
<summary>Create New Assets</summary>

Now before continuing forward, we will need to prepare the `create()` function to connect to the proper creation endpoint. Create differs from connect, since previously our json object did not require any preprocessing. In this case **we will need to include the application data that was returned back from our initial call to `connect()`.**

The `createAsset()` function needs to accomplish:

1. Create our raw `data` var for seeding the asset.
2. Creating a new asset using our simple `Pieces.SeededAsset` configuration
3. Send request via `Pieces.AssetsApi().assetsCreateNewAsset()`
4. Return the created asset back after it is validated and created

Here is what the `createAsset()` function looks like in its entirety:

```tsx
// importing the package into this file.
import * as pieces from '@pieces.app/pieces-os-client'

// @var code data as a string.
var data = "<h1>Hello world</h1>";

// @var title for your snippet creation.
var name = "My First Snippet";

// the create asset function where we create our seeded asset.
// @var applicationData | look back at connect() to see where this came from
function createAsset() {
  let _seededAsset: Pieces.SeededAsset = {
    application: applicationData,
    format: {
      fragment: {
        string: {raw: data},
      },
    },
    metadata: {
      name: name
    }
  }

  // create your seed
  let _seed: Pieces.Seed = {
    asset: _seededAsset,
    type: SeedTypeEnum.Asset
  }

  // make your api call.
  new Pieces.AssetsApi().assetsCreateNewAsset({seed: _seed}).then(newAsset => {
    console.log(`New Asset Created --> ${newAsset}`);
  });
}
```

The response back will look similar to the following: [https://jwaf.pieces.cloud/?p=24e242a85e](https://jwaf.pieces.cloud/?p=24e242a85e)

</details>


<details>
<summary>Get your Assets Snapshot</summary>

When reading along, if you would like to view your data incrementally through the full browser window, you can navigate to `http://localhost:1000/assets` to view a full list of snippets that have been saved in your browser. Otherwise, you can access the snapshot with these steps:

```tsx
new Pieces.AssetsApi().assetsSnapshot({}).then(_assetList => {
    for (let i = 0; i < _assetList.iterable.length; i++) {
        // will log each asset.
       console.log(_assetsList[i]);
    }
})
```
</details>

A developer documentation that outlines all the ins and outs of our available endpoints can be found [here](https://docs.pieces.app/build/reference/typescript/).

## Learn More 
Explore more about Pieces SDK and get help from the following resources:

- 🚀 [Getting Started Tutorial](https://docs.pieces.app/installation-getting-started/what-am-i-installing)
- 📜 [Pieces Docs](https://docs.pieces.app/)
- 💬 [Discord Community](https://discord.gg/getpieces)

## License

This repository is available under the [MIT License](./LICENSE).
