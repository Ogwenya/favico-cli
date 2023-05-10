![favico](./assets/title.png)

Favico is a cli tool to generate `favicon` image and other icons such as `apple-touch-icon` and `android-chrome` of various sizes.

Generated icons are stored in `Desktop/favico` directory.

## Installation

```bash
npm i -g favico
```

## commands

| Command                          | Description           |
| -------------------------------- | --------------------- |
| `favico --version`               | check current version |
| `favico g /path/to/image`        | generate a favicon    |
| `favico generate /path/to/image` | generate a favicon    |

### Examples

#### Generating an icon

```bash
favico generate ./logo.png
```

or

```bash
favico g ./logo.png
```

![favicon example](./assets/favicon_example.png)
