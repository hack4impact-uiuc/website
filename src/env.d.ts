/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly CLIENT_ACKEE_URL: string;
  readonly CLIENT_ACKEE_DOMAIN_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
