# Are you testing your Observability?

_Live Example: https://are-you-testing-your-observability.now.sh_

## Keyboard Shortcuts

| Key         | Description                                  |
| ----------- | -------------------------------------------- |
| Left Arrow, Page Up, Shift + Space  | Go to previous slide |
| Right Arrow, Page Down, Space | Go to next slide     |
| Option + P  | Toggle Presenter Mode     |
| Option + O  | Toggle Overview Mode       |
| Option + G  | Toggle Grid Mode |

## Development

```console
npm install # or yarn install
```

See tutorial on [How to create slides](https://github.com/pomber/code-surfer#how-to-use-code-surfer)

### Run locally

```console
npm start
```

### Export to PDF

To export a PDF from production deck, run:

```console
npm run pdf
```

To export PDF from local deck, run:

```console
npm start
```

and then in another terminal:

```console
npm run pdf-local
```

## Deploy

```console
npm i -g now # only needed for deployment
```

### Stage

```console
now
```

### Prod

```console
now --prod
```
