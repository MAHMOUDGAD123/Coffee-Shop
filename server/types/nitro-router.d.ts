type NitroRouterParams = 'product_id' | (string & {});

declare module 'h3' {
  function getRouterParam(
    event: H3Event,
    name: NitroRouterParams,
    opts?: { decode?: boolean },
  ): string | undefined;
}

export {};
