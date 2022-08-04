// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elevate',
  tagline: 'Education Leadership Platform',
  url: 'https://dev.elevate-docs.shikshalokam.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
//  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Shikshalokam', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
/*        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
*/        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '766d56f13dd1e82f43253559b7c86636',
        apiKey: 'supabase',
        indexName: 'supabase',
        contextualSearch: false,
        searchParameters: {
          facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],
        },
      },
      navbar: {
 //       title: 'Elevate',
        logo: {
          alt: 'Elevate Logo',
          src: 'img/elevate-logo.png',
        },
        items: [

        {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'MentorED',
            logo: 'img/mentoring-logo.png',
        },
        {
          href: 'https://e.shikshalokam.navadhiti.com/contact-us/',
          label: 'Help',
          position: 'right',
        },


/*          
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
*/          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GET IN TOUCH',
            items: [
              {
                label: 'Join the ELEVATE Community',
                href: 'https://e.shikshalokam.navadhiti.com/community/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/shikshalokam/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/shikshalokam',
              },
            ],
          },

          {
            title: 'REACH US',
            items: [
              {
                label: 'No 733, 17th Cross, 24th Main, JP Nagar, 6th Phase, Bangalore, Karnataka 560078.',
                href: 'https://e.shikshalokam.navadhiti.com/'
              },
              {
                label: 'Email',
                href: 'mailto:info@shikshalokam.org',
              },
            ]
          },
          {
            title: 'QUICK LINKS',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC5UB0MoPBTPjImvN24uLEMg/featured',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ELEVATE-Project',
              },
              {
                label: 'Shikshalokam Wiki',
                href: 'https://wiki.shikshalokam.org/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Shikshalokam. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
    
};

module.exports = config;
