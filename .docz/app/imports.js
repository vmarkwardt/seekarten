export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'src/commons/AreaLink.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-commons-area-link" */ 'src/commons/AreaLink.mdx'
    ),
  'src/categoryPage/Category.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-category-page-category" */ 'src/categoryPage/Category.mdx'
    ),
  'src/categoryPage/Skill.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-category-page-skill" */ 'src/categoryPage/Skill.mdx'
    ),
}
