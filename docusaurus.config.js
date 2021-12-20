// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PAD+',
  tagline: 'Welcome to our technical documentation!',
  url: 'https://e-PSHAD.github.io',
  baseUrl: '/pad-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'e-PSHAD',
  projectName: 'pad-doc',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/e-PSHAD/pad-doc/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PAD+ Documentation technique',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // If you want to have a new tab in the navigation bar uncomment line below
          // {to: '/docs/introduction/local-setup', label: 'Documentation', position: 'left'},
          {
            href: 'https://github.com/e-PSHAD/pad-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sources',
            items: [
              {
                label: 'GitHub Pad-doc',
                href: 'https://github.com/e-PSHAD/pad-doc',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial Docusaurus',
                to: '/tutorial-docusaurus/intro',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Stack Overflow Docusaurus',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} e-PSHAD. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
