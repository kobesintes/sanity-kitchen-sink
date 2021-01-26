export default {
  widgets: [
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
                  buildHookId: '60102d6fec973b31997c1a21',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gr86ptba',
                  apiId: '7733a270-a691-4ce8-b049-841275127dd1'
                },
                {
                  buildHookId: '60102d6fc129883eb208cb6f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qovyam97',
                  apiId: '88092e78-2df9-4d66-b061-0d30d153cbc1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kobesintes/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qovyam97.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
