export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d514c87098c52d32e364efc',
                  title: 'Sanity Studio',
                  name: 'avh-study-tour-blog-studio',
                  apiId: '3a2a86b7-619e-4c31-9476-d56fa5d6f637'
                },
                {
                  buildHookId: '5d514c87acfdaa5d482d65f6',
                  title: 'Blog Website',
                  name: 'avh-study-tour-blog',
                  apiId: '4685f994-e06b-434f-a27e-5d24d052576f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bootsa/avh-study-tour-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://avh-study-tour-blog.netlify.com', category: 'apps'}
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
