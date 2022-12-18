/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Error {}
  interface PageData {
    // This page data value is used as the start of the page title by the root layout
    title?: string;
  }
  // interface Platform {}
}

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onenterViewport?: () => void;
  }
}

declare module "*.gif" {
  const value: string;
  export = value;
}

declare module "*.jpg" {
  const value: string;
  export = value;
}

declare module "*.jpeg" {
  const value: string;
  export = value;
}

declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.svg" {
  const value: string;
  export = value;
}

declare module "*.webp" {
  const value: string;
  export = value;
}
