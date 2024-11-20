/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_CRYPTOJS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
