export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4464173334b538494489c4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-edhk52s2',
                  apiId: '3876d876-0c24-4255-9b2a-3d5070655e24'
                },
                {
                  buildHookId: '5d446417f21354af8b3f6df1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fora8abv',
                  apiId: 'd7555e50-f815-4cfe-988f-b3661f6cb3f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paulobras/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fora8abv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
