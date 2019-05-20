export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'src/AreaLink.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-area-link" */ 'src/AreaLink.mdx'
    ),
}
