// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Edwinsito',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/posts/**/*.md',
        typeName: 'BlogPost',
        route: '/posts/:slug'
      }
    }
    // {
    //   use: '@gridsome/source-wordpress',
    //   options: {
    //     baseUrl: 'http://antociano.net/blog', // required
    //     apiBase: 'wp-json',
    //     typeName: 'WordPress',
    //     perPage: 100,
    //     concurrent: 10,
    //     routes: {
    //       post: '/:year/:month/:day/:slug',
    //       post_tag: '/tag/:slug'
    //     }
    //   }
    // }
  ],
  transformers:{
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  }
}
