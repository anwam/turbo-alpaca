/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly UNSPLASH_ACCESS_KEY: string;
  readonly UNSPLASH_SECRET_KEY: string;
  readonly PUBLIC_UNSPLASH_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
