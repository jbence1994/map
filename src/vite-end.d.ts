/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INITIAL_LATITUDE: number;
  readonly VITE_INITIAL_LONGITUDE: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
