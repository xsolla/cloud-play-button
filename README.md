# Xsolla Cloud Play button

- [What is Cloud Play button?](#what-is-pay-station-sdk)
- [Quick Start](#quick-start)

## What is Cloud Play button?

Cloud play button is a fully customizable button that allows you to add an Xsolla Cloud Play button on your webpage.

![Cloud play button screenshot](./screenshot-01.png "Cloud play button")

## Quick Start

Add the style snippet to the `<head>` tag of your HTML page

```html
<link rel="stylesheet" href="https://cdn.xsolla.net/cloud-gaming-bucket-prod/button/src/button.min.css" />
```

Or copy over `src` folder into the root of your webpage folder and then add the style snippet to the `<head>` tag of your HTML page

```html
<link rel="stylesheet" href="src/button.min.css" />
```

And then you can add the cloud play button anywhere on your website with this snippet (example)

```html
<a class="xcg-btn" target="_blank" href="https://cloud-play.xsolla.com/cgs/doomer">
  <b>Instant Play on Xsolla</b>
</a>
```

You could also use the "Build your own button" tool by running the `index.html` file in this folder too. After you finished your customized button selection, proceed to copy the generated snippet into your webpage.

![Generate your own button screenshot](./screenshot-02.png "Generate your own button")
