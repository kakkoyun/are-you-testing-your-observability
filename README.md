# Are you testing your Observability?

_Live Example: https://are-you-testing-your-observability.now.sh_

## Events

### [GoDays Berlin 2020](https://www.godays.io/conferenceday1)
  * [Recording](https://youtu.be/LU6D5cNeHks)
  
### [FOSDEM 2020](https://fosdem.org/2020/schedule/event/testing_observability/)
  * https://archive.fosdem.org/2020/schedule/event/testing_observability/
  * [Recording](https://video.fosdem.org/2020/UD2.120/testing_observability.mp4)

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
