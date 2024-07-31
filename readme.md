# Anime Gifs

Anime Gifs is a simple npm package created by [Dymidless](https://github.com/dymidless). It allows you to fetch anime gifs and reactions for various purposes.

## List of Reactions

Here is the list of available reactions:

| Reaction |
| -------- |
| airkiss |
| angrystare |
| bite |
| bleh |
| blush |
| brofist |
| celebrate |
| cheers |
| clap |
| confused |
| cool |
| cry |
| cuddle |
| dance |
| drool |
| evillaugh |
| facepalm |
| handhold |
| happy |
| headbang |
| hug |
| kiss |
| laugh |
| lick |
| love |
| mad |
| nervous |
| no |
| nom |
| nosebleed |
| nuzzle |
| nyah |
| pat |
| peek |
| pinch |
| poke |
| pout |
| punch |
| roll |
| run |
| sad |
| scared |
| shout |
| shrug |
| shy |
| sigh |
| sip |
| slap |
| sleep |
| slowclap |
| smack |
| smile |
| smug |
| sneeze |
| sorry |
| stare |
| stop |
| surprised |
| sweat |
| thumbsup |
| tickle |
| tired |
| wave |
| wink |
| woah |
| yawn |
| yay |
| yes |

## Installation

First, install the package using npm:

```bash
npm install anime-gifs
```

## Usage

The package provides two main functions: `getAnimeGif` and `listReactions`.

### getAnimeGif(reaction: string, format: string = 'GIF'): Promise<string>

This function fetches a gif based on the reaction provided. The `reaction` parameter is required. The `format` parameter is optional and defaults to 'GIF'.

Example usage:

```javascript
const { getAnimeGif } = require('anime-gifs');

getAnimeGif('happy')
    .then(url => {
        // Use the gif url as needed
    })
    .catch(error => console.error(error));
```

### listReactions(): Promise<string[]>

This function fetches all available reactions.

Example usage:

```javascript
const { listReactions } = require('anime-gifs');

listReactions()
    .then(reactions => {
        // Use the reactions as needed
    })
    .catch(error => console.error(error));
```

## Error Handling

Both functions will throw an error if there is a problem fetching the data. Make sure to handle these errors appropriately in your application.

## Repository

You can find the source code for this package on [GitHub](https://github.com/dymidless/anime-gifs).

## Author

This package was created by [Dymidless](https://github.com/dymidless). Feel free to reach out if you have any questions or suggestions. ❤️
