# UIUC Chapter Website

The new Hack4Impact UIUC Chapter Website.

## Motivation

This website builds upon our [previous website](https://github.com/hack4impact-uiuc/uiuc.hack4impact.org) with the following primary goals:

- Adhere to a more on-brand and consistent color scheme inspired by [Bridge](https://bridge-ui.vercel.app/)
- Target the website's content towards nonprofits and sponsors (stakeholders for which the website will likely be their first impression of us)
- Maintain content in a way that is both backward-compatible and future-proofed for the organization's evolving needs and perspectives over time

## Architecture

This website uses [SvelteKit](https://kit.svelte.dev/) as its frontend framework as well as [Contentful](https://www.contentful.com/) for content management.

### SvelteKit

When used correctly, Svelte results in lighter-weight and more performant websites than React, and is thus more suited for static websites such as this. By leveraging SvelteKit's [page options](https://kit.svelte.dev/docs/page-options), we are able to generate static assets for prerenderable pages as well as serve dynamic content hosted on Contentful.

### Contentful

Almost all website content likely to change over time is hosted on Contentful, as opposed to being hardcoded or stored in JSON objects (as in the prvious iteration of the website). This allows non-technical organization members to manage content and makes it easier to maintain for all members.

Additionally, Contentful's CDN allows for image resolution to be specified on the fly, allowing us to reuse assets across the site at their optimal resolutions to prevent network payloads from ballooning.

Most crucially, Contentful's rich text support is utilized in our project pages to give projects full creativity over their writeups. As the way we've written about our projects has changed significantly over he years, this allows for both backwards compatibility and a wider variety of content being possible for project writeups

## Development

### Setup

This website requires Node 16 in order to support SvelteKit.

#### Dependencies

All dependencies are installed through NPM.

```sh
npm install
```

#### Environment

Enter your Contentful space ID, Contentful content delivery key, Ackee server address, and Ackee domain ID into `.env`, as shown in `.env.example`:

```sh
CONTENTFUL_DELIVERY_KEY="your Contentful delivery key"
CONTENTFUL_SPACE_ID="your Contentful space ID"

# Prefix variables with CLIENT to allow their use in client side JS.
CLIENT_ACKEE_URL="your Ackee server address"
CLIENT_ACKEE_DOMAIN_ID="your Ackee domain ID"
```

### Usage

`npm run dev` - run the website using HMR in development mode.

`npm run build` - use `adapter-static` to export all pages as static HTML to the `build` directory

`npm run preview` - view the built website (requires `npm run build` to have been run prior)

### Tips

Hold (cmd|ctrl) + shift to enable the "Svelte inspector." Clicking any page element with this open will go to the element's source in VSCode.

---

[![Vercel logo](https://user-images.githubusercontent.com/18171421/159822577-d9886b8b-0c6b-488b-8676-ba850aba9d69.svg)](https://vercel.com/?utm_source=hack4impact1&utm_campaign=oss)
