import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ZAF Documentation',
  tagline: 'Premium Second Life Avatar Products & Advanced Animesh Technology',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'itzdabbzz', // Usually your GitHub org/user name.
  projectName: 'ZAF', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ZAF_Header.jpg',
    navbar: {
      title: 'ZAF',
      logo: {
        alt: 'ZAF Logo',
        src: 'img/zaf.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/zaf-animesh-bits',
          label: 'Animesh Bits',
          position: 'left',
        },
        {
          href: 'https://marketplace.secondlife.com/stores/66141',
          label: 'Second Life Store',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'ZAF Animesh Bits',
              to: '/docs/zaf-animesh-bits',
            },
            {
              label: 'Commands Reference',
              to: '/docs/zaf-animesh-bits/commands-reference',
            },
          ],
        },
        {
          title: 'Second Life',
          items: [
            {
              label: 'ZAF Store',
              href: 'https://marketplace.secondlife.com/stores/66141',
            },
            {
              label: 'Johan Bizet Profile',
              href: 'https://my.secondlife.com/johan.bizet',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'SaberCat Avatar',
              href: 'https://marketplace.secondlife.com/s/ZAFSabercatAvatar/18632656',
            },
            {
              label: 'Felidae Avatar',
              href: 'https://marketplace.secondlife.com/s/ZAFFelidaeAvatar-Box/14751071',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZAF by Johan Bizet. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
