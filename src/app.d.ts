/// <reference types="@sveltejs/kit" />
/// <reference types="vite/client" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

interface ImportMetaEnv {
  readonly CLIENT_ACKEE_URL: string;
  readonly CLIENT_ACKEE_DOMAIN_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
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
