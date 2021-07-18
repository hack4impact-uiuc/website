# UIUC Chapter Website

The currently-WIP upcoming version of the Hack4Impact UIUC Chapter Website.

## Motivation

This website builds upon our [previous website](https://github.com/hack4impact-uiuc/uiuc.hack4impact.org) with the following primary goals:

- Adhere to a more on-brand and consistent color scheme inspired by [Bridge](https://bridge-ui.vercel.app/)
- Target the website's content towards nonprofits and sponsors (stakeholders for which the website will likely be their first impression of us)
- Maintain content in a way that is both backward-compatible and future-proofed for the organization's evolving needs and perspectives over time

## Architecture

This website uses [SvelteKit](https://kit.svelte.dev/) as its frontend framework as well as [Contentful](https://www.contentful.com/) for content management.

### SvelteKit

When used correctly, Svelte results in lighter-weight and more performant websites than React, and is thus more suited for static websites such as this. By leveraging SvelteKit's [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static), we are able to statically render both hard-coded pages as well as dynamic content hosted on Contentful.

### Contentful

Almost all website content likely to change over time is hosted on Contentful, as opposed to being hardcoded or stored in JSON objects (as in the prvious iteration of the website). This allows non-technical organization members to manage content and makes it easier to maintain for all members.

Additionally, Contentful's CDN allows for image resolution to be specified on the fly, allowing us to reuse assets across the site at their optimal resolutions to prevent network payloads from ballooning.

Most crucially, Contentful's rich text support is utilized in our project pages to give projects full creativity over their writeups. As the way we've written about our projects has changed significantly over he years, this allows for both backwards compatibility and a wider variety of content being possible for project writeups

## Development

### Setup

This website requires Node 14 in order to support SvelteKit.

#### Dependencies

All dependencies are installed through NPM.

```sh
npm install
```

#### Environment

Enter your Contentful space ID and content delivery key into `.env`, as shown in `.env.example`:

```sh
CONTENTFUL_DELIVERY_KEY="your Contentful delivery key"
CONTENTFUL_SPACE_ID="your Contentful space ID"
```

### Usage

`npm run dev` - run the website using HMR in development mode.

`npm run build` - use `adapter-static` to export all pages as static HTML to the `build` directory

`npm run preview` - view the built website (requires `npm run build` to have been run prior)
