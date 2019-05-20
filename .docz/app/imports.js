export const imports = {
  'src/AreaLink.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-area-link" */ 'src/AreaLink.mdx'
    ),
}
