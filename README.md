# @pieces.app/pieces-os-client

[![npm version](https://badge.fury.io/js/@pieces.app%2Fpieces-os-client.svg)](https://badge.fury.io/js/@pieces.app%2Fpieces-os-client)


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

- [Operating System Support](#-operating-system-support)
- [Installing](#-installing)
    - [Pieces OS](#-pieces-os)
    - [Downloading NPM Package](#-downloading-npm-package)
    - [Starter Project](#starter-project)
- [Testing Usage](#testing-usage)
- [Examples](#examples)
    - [/connect](#connect)
    - [Asset + /assets](#creating-with-asset--assets)
    - [SeededAsset](#seededasset)
    - [/assets/create](#using-assetscreate)
    - [/assets/snapshot](#get-your-assets-snapshot)
    - [/asset/update](#update-your-assets-metadata-or-properties)
    - [/assets/delete](#deleting-an-asset)
- [Supported Versions](#supported-versions-)

## Operating System Support
Currently, Pieces OS is utilized as the primary backend service with [Pieces for Developers](https://docs.pieces.app/installation-getting-started/what-am-i-installing) that powers all of the features that can be used there. Both programs are designed for full support by all operating systems, although our [Linux Platform](https://docs.pieces.app/installation-getting-started/linux) is available, it leans towards a 'heavily supported beta' and may experience incremental issues on specific flavors of linux.

> if you have any issues on any Linux flavor be sure to check our list of supported distributions on the [linux documentation page](https://docs.pieces.app/installation-getting-started/linux).

## Installing
When developing on the Pieces platform, you need two primary things:

1. **Download the Pieces OS application**
2. **Install the npm package**

## Pieces OS
Pieces OS runs in the background of your computer and serves as a hub for all plugins and extensions developed by the team. In order to utilize your own Server locally and support all the functionality that powers things like [Global Search](https://docs.pieces.app/features/global-search), [Copilot Chats](https://docs.pieces.app/features/pieces-copilot), [Asset Saving](https://docs.pieces.app/features/managing-saved-materials), [context](https://docs.pieces.app/features/pieces-copilot#set-your-own-copilot-context), and more.

Select the right version to download Pieces OS for your operating system:
- [macOS](https://docs.pieces.app/installation-getting-started/macos) - [Compatible with macOS 11 Big Sur or higher]
- [Windows](https://docs.pieces.app/installation-getting-started/windows) - [Compatible with Windows 10 version 1809 or higher]
- [Linux](https://docs.pieces.app/installation-getting-started/linux) - [Compatible with Ubuntu 18 or Higher]

You can also visit our user facing documentation to learn more about different features that are available now to give you an idea of some of the things that you can potentially do.

## Downloading NPM Package

Using npm:

```bash
npm install @pieces.app/pieces-os-client
```

Using pnpm:

```bash
pnpm add @pieces.app/pieces-os-client
```

After you install the package, you  can import the library into your file(s) using `require`:

```js
const pieces = require('@pieces.app/pieces-os-client')
```

or you can import the package using `import` as well:

```js
import * as pieces from '@pieces.app/pieces-os-client'
```

## Starter Project
You can get started with this Node/React project that shows how to use the examples below, and provides a great base for creating Assets and viewing them in your browser.

You can get it here: [GitHub Repo](https://github.com/pieces-app/example-ts)

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
    ...
  },
  [Symbol(headers)]: _HeadersList {
    // removed for readablitiy ...
  }
}
6.3.0
```

You are now can confirm the installation of both Pieces OS and @pieces.app/pieces-os-client package inside your project.

## Examples
Here are a few examples of using some of the basic endpoints for getting up and running, along with creating an asset for the first time. 

We are working on created expanded documentation with examples, a developer documentation to outline all the ins and outs of our available endpoints soon.

### `/connect`
When developing and creating an application on top of Pieces OS, it is important that you authenticate with the application itself when performing requests.

To 'connect' your application (this js/ts project) to the server, you will need to create an asynchronous function and call it. Here is the initial connect function: 

```ts
async function connect(): Promise<JSON> {

    // the /connect endpoint being used here:
    const url: string = 'http://localhost:1000/connect';
    const options: {method: string, body: string} = {
        method: 'POST',
        body: JSON.stringify({ application: tracked_application}
        ),
    }

    try {
        const response: Response = await fetch(url, options);
        const data: Promise<JSON> = await response.json();
        console.log(data);
        
        return data;
    } catch (e) {
        console.error(e);
    }
}
```

Once you complete this step you will have the necessary data to construct the remainder of the endpoints request body requirements.

### Creating with `Asset` & `/Assets`
**Asset** is a very important model who's primary purpose is to manage the seeded data that comes in to the application, and is stored inside of Pieces OS. Each asset is identifiable as a piece of saved data, or pre-seeded data.

**/Assets** is equally important, but instead of containing a single asset with parameters storing data on it, Assets serves as the list of `type: Asset` objects that are stored there. Also, you will find the operations for adding, deleting, searching, and other functions that are related to referencing a number of different snippets to make a comparison.


### `SeededAsset`
SeededAsset is the **Format** needed by `/assets/create` in order to accept the snippet, create, and return the information you need. The structure (at bare minimum is as follows):

```ts
let seed: SeededAsset = {  
    application: app,  
    format: {  
        fragment: {  
            string: { raw: '<your text here>' }    
        }
    }
}
```

### Using `/assets/create`
With the SeededAsset created and application data acquired you can now create a new snippet by creating a function similar to `connect()` (we will call it `create()`).

Now if we pass in our new seed along with required data and add a little try catch:

```ts
async function create(_seed: SeededAsset): Promise<JSON> {  
    const _url: string = 'http://localhost:1000/assets/create';  
    const options: {method: string, body: string} = {  
        method: 'POST',  
        body: JSON.stringify({asset: _seed, type: 'SEEDED_ASSET'}),  
    }  
  
    try {  
        const response: Response = await fetch(_url, options);  
        const data: Promise<JSON> = await response.json();  
        return data;  
    } catch (e) {  
        console.error(e);  
    }}
```

Then create the actual asset here with this one-liner: 

```ts 
create(seed).then(__ => console.log('Asset Created! Here is it\'s data: ', __));
```

Once you check your console, you will have a fully seeded asset, or simply just of type Asset created and inside your Pieces OS server.

#### The Response 
The request comes back, you will see the entire Asset object in your console. You can view it here on this sharable link:

https://jwaf.pieces.cloud/?p=f0114f8b8e

### Get your Assets Snapshot
When working with your app implementation you will often need to call the entire asset snapshot in order to get the correct snippet from your storage in Pieces OS. You can use this asset snapshot along with your **asset's ID** to select a single item from the iterable list. Call your `.assetsSnapshot()` and pass an empty object for the `requestParameters` and then get the asset when it returns asynchronously: 

```ts
 new Pieces.AssetsApi().assetsSnapshot({}).then(_assetList => {
  for (let i = 0; i < _assetList.iterable.length; i++) {
    if (_assetList.iterable[i].id == _id) {

      let _asset = _assetList.iterable[i];
      
      console.log(_asset);
    }
  }
})
```

### Update your Asset's Metadata or Properties 
Individual assets can be manipulated with a number of different properties and metadata. You can add **titles**, **annotations**, **tags**, **links**, **anchors**, and much more all through this single endpoint. To use it properly first use the assetSnapshot to get your asset using its ID property, and store your asset in a variable in your `.then()`. You can then adjust any of the properties on this asset you have stored on `_asset`, then pass into `requestParameters` on the `assetUpdate` endpoint. Check out this code block: 

```ts
new Pieces.AssetsApi().assetsSnapshot({}).then(_assetList => {
        for (let i = 0; i < _assetList.iterable.length; i++) {
            if (_assetList.iterable[i].id == _id) {

                let _asset = _assetList.iterable[i];

                _asset.name = _name;
                
                new Pieces.AssetApi().assetUpdate({asset: _asset}).then(_updated => {
                    console.log("updated!");
                })
            }
        }
    })
```

### Deleting an Asset
Similar to the previous example, you need assetSnapshot in order to access the proper asset on your list of data. You can use this endpoint to completely delete a specific asset where ever it may be in the list of all of your assets.

Use this code-block here to get your asset, and then delete it: 

```ts
function deleteAsset(_id: String){

  new Pieces.AssetsApi().assetsSnapshot({}).then(_assetList => {
    for (let i = 0; i < _assetList.iterable.length; i++) {
      if (_assetList.iterable[i].id == _id) {
        new Pieces.AssetsApi().assetsDeleteAsset({asset: _assetList.iterable[i].id }).then(_ => console.log("delete confirmed!"))
      }
    }
  })
}
```

## Supported Versions 
**It is recommended to always stay up to date with the latest production release of Pieces OS.**

If you are limited on updating versions due to development progress or needing to remain on a specific version - try to remain on the same _minor version_ to avoid any issues. If you start to encounter issues, please update to the next available version when receiving errors.


