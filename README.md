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
- [Supported Versions](#supported-versions-)

## Operating System Support
Currently, Pieces OS is utilized as the primary backend service with [Pieces for Developers](https://docs.pieces.app/installation-getting-started/what-am-i-installing) that powers all of the features that can be used there. Both programs are designed for full support by all operating systems, although our [Linux Platform](https://docs.pieces.app/installation-getting-started/linux) is available, it leans towards a 'heavily supported beta' and may experience incremental issues on specific flavors of linux.

> if you have any issues on any Linux flavor be sure to check our list of supported distributions on the [linux documentation page](https://docs.pieces.app/installation-getting-started/linux).

## Installing
When developing on the Pieces platform, you need two primary things:

1. **Download the Pieces OS application**
2. **Install the npm package**

## Pieces OS
Pieces OS runs in the background of your computer and serves as a hub for all plugins and extensions developed by the team. In order to utilize your own Server locally and support all the functionality that powers things like [Global Search](), [Copilot Chats](), Asset Saving, context, and more.

Select the right version to download Pieces OS for your operating system:
- [macOS](https://docs.pieces.app/installation-getting-started/macos) - [Compatible with macOS 11 Big Sur or higher]
- [Windows](https://docs.pieces.app/installation-getting-started/windows) - [Compatible with Windows 10 version 1809 or higher]
- [Linux](https://docs.pieces.app/installation-getting-started/linux) - [Compatible with Ubuntu 18 or Higher]

You can also visit our user facing documentation to learn more about different features that are available now to give you an idea of some of the things that you can potentially do.

## Downloading NPM Package

Using npm:

```bash
npm install @pieces.app/client
```

Using pnpm:

```bash
pnpm add @pieces.app/client
```

After you install the package, you  can import the library into your file(s) using `require`:

```js
const pieces = require('@pieces.app/client')
```

or you can import the package using `import` as well:

```js
import * as pieces from '@pieces.app/client'
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

You are now can confirm the installation of both Pieces OS and @pieces.app/client package inside your project.

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

### The Response 
The request comes back, you will see the entire Asset object in your console. It should look similar to this: 

```txt
{
    "id": "34a2a447-0c7c-4171-903a-755712e43a9f",
    "name": "Text Snippet",
    "creator": "",
    "created": {
        "value": "2023-10-26T15:30:01.617743Z",
        "readable": "Just now..."
    },
    "updated": {
        "value": "2023-10-26T15:30:01.618784Z",
        "readable": "Just now..."
    },
    "synced": {
        "value": "2023-10-26T15:30:01.617743Z",
        "readable": "Just now..."
    },
    "deleted": {
        "value": "2023-10-26T15:30:01.617743Z",
        "readable": "Just now..."
    },
    "formats": {
        "iterable": [
            {
                "id": "15a216ed-d790-4690-a422-d03e5738d363",
                "creator": "",
                "classification": {
                    "generic": "TEXT",
                    "specific": "text"
                },
                "role": "BOTH",
                "application": {
                    "schema": {
                        "migration": 0,
                        "semantic": "MAJOR_0_MINOR_0_PATCH_1"
                    },
                    "id": "55f4576b-8be6-4508-bf89-e85f263a083b",
                    "name": "BRAVE",
                    "version": "0.0.1",
                    "platform": "MACOS",
                    "onboarded": false,
                    "privacy": "OPEN",
                    "capabilities": "BLENDED",
                    "mechanism": "MANUAL",
                    "automaticUnload": false
                },
                "asset": {
                    "id": "34a2a447-0c7c-4171-903a-755712e43a9f",
                    "name": "Text Snippet",
                    "creator": "",
                    "created": {
                        "value": "2023-10-26T15:30:01.617743Z",
                        "readable": "Just now..."
                    },
                    "updated": {
                        "value": "2023-10-26T15:30:01.617743Z",
                        "readable": "Just now..."
                    },
                    "synced": {
                        "value": "2023-10-26T15:30:01.617743Z",
                        "readable": "Just now..."
                    },
                    "deleted": {
                        "value": "2023-10-26T15:30:01.617743Z",
                        "readable": "Just now..."
                    },
                    "formats": {
                        "iterable": [
                            {
                                "id": "15a216ed-d790-4690-a422-d03e5738d363"
                            }
                        ]
                    },
                    "preview": {
                        "base": "15a216ed-d790-4690-a422-d03e5738d363"
                    },
                    "original": "15a216ed-d790-4690-a422-d03e5738d363",
                    "mechanism": "MANUAL"
                },
                "bytes": {
                    "value": 24,
                    "readable": "24 B"
                },
                "created": {
                    "value": "2023-10-26T15:30:01.617743Z",
                    "readable": "Just now..."
                },
                "updated": {
                    "value": "2023-10-26T15:30:01.618788Z",
                    "readable": "Just now..."
                },
                "deleted": {
                    "value": "2023-10-26T15:30:01.617743Z",
                    "readable": "Just now..."
                },
                "synced": {
                    "value": "2023-10-26T15:30:01.617743Z",
                    "readable": "Just now..."
                },
                "fragment": {
                    "string": {
                        "raw": "Testing the string param"
                    },
                    "bytes": {
                        "raw": [
                            84,
                            101,
                            115,
                            116,
                            105,
                            110,
                            103,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            116,
                            114,
                            105,
                            110,
                            103,
                            32,
                            112,
                            97,
                            114,
                            97,
                            109
                        ],
                        "base64": [],
                        "base64_url": [],
                        "data_url": []
                    }
                },
                "analysis": {
                    "code": {
                        "schema": {
                            "migration": 0,
                            "semantic": "MAJOR_0_MINOR_0_PATCH_1"
                        },
                        "tokenized": [],
                        "type": "TEXT",
                        "prediction": {},
                        "similarity": {},
                        "top5Colors": [],
                        "top5Sorted": [],
                        "id": "8db688f9-fb54-4d5a-888d-db3b17328bc7",
                        "analysis": "1d8ae90e-2f46-4085-afe8-209658e07040",
                        "model": {
                            "schema": {
                                "migration": 0,
                                "semantic": "MAJOR_0_MINOR_0_PATCH_1"
                            },
                            "id": "48d2a32b-aa93-455c-a6b6-e52dfce4118e",
                            "version": "t02-v02-i03",
                            "created": {
                                "value": "2022-02-17T05:00:00.000Z",
                                "readable": "about a year ago"
                            },
                            "name": "Text vs. Code Model",
                            "cloud": false,
                            "type": "SPEED",
                            "usage": "TEXT_VS_CODE",
                            "cpu": true
                        }
                    },
                    "id": "1d8ae90e-2f46-4085-afe8-209658e07040",
                    "format": "15a216ed-d790-4690-a422-d03e5738d363"
                }
            }
        ],
        "asset": {
            "id": "34a2a447-0c7c-4171-903a-755712e43a9f",
            "name": "Text Snippet",
            "creator": "",
            "created": {
                "value": "2023-10-26T15:30:01.617743Z",
                "readable": "Just now..."
            },
            "updated": {
                "value": "2023-10-26T15:30:01.617743Z",
                "readable": "Just now..."
            },
            "synced": {
                "value": "2023-10-26T15:30:01.617743Z",
                "readable": "Just now..."
            },
            "deleted": {
                "value": "2023-10-26T15:30:01.617743Z",
                "readable": "Just now..."
            },
            "formats": {
                "iterable": [
                    {
                        "id": "15a216ed-d790-4690-a422-d03e5738d363"
                    }
                ]
            },
            "preview": {
                "base": "15a216ed-d790-4690-a422-d03e5738d363"
            },
            "original": "15a216ed-d790-4690-a422-d03e5738d363",
            "mechanism": "MANUAL"
        }
    },
    "preview": {
        "base": {
            "id": "15a216ed-d790-4690-a422-d03e5738d363",
            "reference": {
                "id": "15a216ed-d790-4690-a422-d03e5738d363",
                "creator": "",
                "classification": {
                    "generic": "TEXT",
                    "specific": "text"
                },
                "role": "BOTH",
                "application": {
                    "schema": {
                        "migration": 0,
                        "semantic": "MAJOR_0_MINOR_0_PATCH_1"
                    },
                    "id": "55f4576b-8be6-4508-bf89-e85f263a083b",
                    "name": "BRAVE",
                    "version": "0.0.1",
                    "platform": "MACOS",
                    "onboarded": false,
                    "privacy": "OPEN",
                    "capabilities": "BLENDED",
                    "mechanism": "MANUAL",
                    "automaticUnload": false
                },
                "asset": "34a2a447-0c7c-4171-903a-755712e43a9f",
                "bytes": {
                    "value": 24,
                    "readable": "24 B"
                },
                "created": {
                    "value": "2023-10-26T15:30:01.617743Z",
                    "readable": "Just now..."
                },
                "updated": {
                    "value": "2023-10-26T15:30:01.617743Z",
                    "readable": "Just now..."
                },
                "deleted": {
                    "value": "2023-10-26T15:30:01.617743Z",
                    "readable": "Just now..."
                },
                "synced": {
                    "value": "2023-10-26T15:30:01.617743Z",
                    "readable": "Just now..."
                },
                "fragment": {
                    "string": {
                        "raw": "Testing the string param"
                    },
                    "bytes": {
                        "raw": [
                            84,
                            101,
                            115,
                            116,
                            105,
                            110,
                            103,
                            32,
                            116,
                            104,
                            101,
                            32,
                            115,
                            116,
                            114,
                            105,
                            110,
                            103,
                            32,
                            112,
                            97,
                            114,
                            97,
                            109
                        ],
                        "base64": [],
                        "base64_url": [],
                        "data_url": []
                    }
                },
                "analysis": {
                    "code": {
                        "schema": {
                            "migration": 0,
                            "semantic": "MAJOR_0_MINOR_0_PATCH_1"
                        },
                        "tokenized": [],
                        "type": "TEXT",
                        "prediction": {},
                        "similarity": {},
                        "top5Colors": [],
                        "top5Sorted": [],
                        "id": "8db688f9-fb54-4d5a-888d-db3b17328bc7",
                        "analysis": "1d8ae90e-2f46-4085-afe8-209658e07040",
                        "model": {
                            "schema": {
                                "migration": 0,
                                "semantic": "MAJOR_0_MINOR_0_PATCH_1"
                            },
                            "id": "48d2a32b-aa93-455c-a6b6-e52dfce4118e",
                            "version": "t02-v02-i03",
                            "created": {
                                "value": "2022-02-17T05:00:00.000Z",
                                "readable": "about a year ago"
                            },
                            "name": "Text vs. Code Model",
                            "cloud": false,
                            "type": "SPEED",
                            "usage": "TEXT_VS_CODE",
                            "cpu": true
                        }
                    },
                    "id": "1d8ae90e-2f46-4085-afe8-209658e07040",
                    "format": "15a216ed-d790-4690-a422-d03e5738d363"
                }
            }
        }
    },
    "original": {
        "id": "15a216ed-d790-4690-a422-d03e5738d363",
        "reference": {
            "id": "15a216ed-d790-4690-a422-d03e5738d363",
            "creator": "",
            "classification": {
                "generic": "TEXT",
                "specific": "text"
            },
            "role": "BOTH",
            "application": {
                "schema": {
                    "migration": 0,
                    "semantic": "MAJOR_0_MINOR_0_PATCH_1"
                },
                "id": "55f4576b-8be6-4508-bf89-e85f263a083b",
                "name": "BRAVE",
                "version": "0.0.1",
                "platform": "MACOS",
                "onboarded": false,
                "privacy": "OPEN",
                "capabilities": "BLENDED",
                "mechanism": "MANUAL",
                "automaticUnload": false
            },
            "asset": "34a2a447-0c7c-4171-903a-755712e43a9f",
            "bytes": {
                "value": 24,
                "readable": "24 B"
            },
            "created": {
                "value": "2023-10-26T15:30:01.617743Z",
                "readable": "Just now..."
            },
            "updated": {
                "value": "2023-10-26T15:30:01.617743Z",
                "readable": "Just now..."
            },
            "deleted": {
                "value": "2023-10-26T15:30:01.617743Z",
                "readable": "Just now..."
            },
            "synced": {
                "value": "2023-10-26T15:30:01.617743Z",
                "readable": "Just now..."
            },
            "fragment": {
                "string": {
                    "raw": "Testing the string param"
                },
                "bytes": {
                    "raw": [
                        84,
                        101,
                        115,
                        116,
                        105,
                        110,
                        103,
                        32,
                        116,
                        104,
                        101,
                        32,
                        115,
                        116,
                        114,
                        105,
                        110,
                        103,
                        32,
                        112,
                        97,
                        114,
                        97,
                        109
                    ],
                    "base64": [],
                    "base64_url": [],
                    "data_url": []
                }
            },
            "analysis": {
                "code": {
                    "schema": {
                        "migration": 0,
                        "semantic": "MAJOR_0_MINOR_0_PATCH_1"
                    },
                    "tokenized": [],
                    "type": "TEXT",
                    "prediction": {},
                    "similarity": {},
                    "top5Colors": [],
                    "top5Sorted": [],
                    "id": "8db688f9-fb54-4d5a-888d-db3b17328bc7",
                    "analysis": "1d8ae90e-2f46-4085-afe8-209658e07040",
                    "model": {
                        "schema": {
                            "migration": 0,
                            "semantic": "MAJOR_0_MINOR_0_PATCH_1"
                        },
                        "id": "48d2a32b-aa93-455c-a6b6-e52dfce4118e",
                        "version": "t02-v02-i03",
                        "created": {
                            "value": "2022-02-17T05:00:00.000Z",
                            "readable": "about a year ago"
                        },
                        "name": "Text vs. Code Model",
                        "cloud": false,
                        "type": "SPEED",
                        "usage": "TEXT_VS_CODE",
                        "cpu": true
                    }
                },
                "id": "1d8ae90e-2f46-4085-afe8-209658e07040",
                "format": "15a216ed-d790-4690-a422-d03e5738d363"
            }
        }
    },
    "mechanism": "MANUAL",
    "websites": {
        "iterable": [],
        "indices": {}
    },
    "tags": {
        "iterable": [],
        "indices": {}
    },
    "sensitives": {
        "iterable": []
    },
    "persons": {
        "iterable": [],
        "indices": {}
    },
    "discovered": false,
    "score": {
        "manual": 0,
        "automatic": 0
    },
    "pseudo": false,
    "annotations": {
        "iterable": [],
        "indices": {}
    },
    "hints": {
        "iterable": [],
        "indices": {}
    },
    "anchors": {
        "iterable": [],
        "indices": {}
    }
}
```

## Supported Versions 
**It is recommended to always stay up to date with the latest production release of Pieces OS.**

If you are limited on updating versions due to development progress or needing to remain on a specific version - try to remain on the same _minor version_ to avoid any issues. If you start to encounter issues, please update to the next available version when receiving errors.


