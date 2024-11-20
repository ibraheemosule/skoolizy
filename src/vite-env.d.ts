/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_ENCRYPT_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
