export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'src/commons/AreaLink.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-commons-area-link" */ 'src/commons/AreaLink.mdx'
    ),
}
