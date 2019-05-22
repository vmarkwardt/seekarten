export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'src/commons/AreaLink.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-commons-area-link" */ 'src/commons/AreaLink.mdx'
    ),
  'src/mapPage/Category.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-map-page-category" */ 'src/mapPage/Category.mdx'
    ),
  'src/mapPage/Skill.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-map-page-skill" */ 'src/mapPage/Skill.mdx'
    ),
  'src/mapPage/SkillList.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-map-page-skill-list" */ 'src/mapPage/SkillList.mdx'
    ),
}
