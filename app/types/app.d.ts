declare module '#app' {
  interface PageMeta {}

  export interface NuxtError<DataT = unknown> {
    data: {
      overwriteStatusMessage: string;
    };
  }
}

export {};
