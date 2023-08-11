// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
 
const DefaultLocale = 'zh';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "torchpipe",
  


  tagline: "torchpipe wants to bridge the gap between deep learning training and ensemble pipeline deployment.",
  url: "https://torchpipe.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // favicon: "images/favicon.ico",
  favicon: "images/logo_double.svg",
  organizationName: "torchpipe",
  projectName: "torchpipe.github.io",
  deploymentBranch: "master",
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: DefaultLocale,
    locales: ['zh','en'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    }
  },
  
  // plugins: [],




  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs', // 把文档放在网站根部
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://g.hz.netease.com/deploy/torchpipe-docs/-/tree/master/website/",
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
                  // Link to Crowdin for French docs
                  if (locale == 'en') { 
                    return `https://github.com/torchpipe/torchpipe.github.io/edit/main/docs/${docPath}`;
                  }
                  // Link to GitHub for English docs

                  return `https://github.com/torchpipe/torchpipe.github.io/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/${docPath}`;
                },
          sidebarCollapsed: true,
          showLastUpdateTime:true,
          showLastUpdateAuthor:true
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css"), require.resolve("./src/css/helpers.css"), require.resolve("./src/css/auto-number-title.css")],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        gtag: {
          trackingID: "G-1LKTTC3R7Q",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      metadata: [
        { name: "keywords", content: "deploy, pytorch, serving, pipeline parallelism, torchpipe" },
        {
          name: "description",
          content:
            "serving Inside Pytorch with Multiple Threads.",
        },
        { name: "og:image", content: "__.png" },
      ],
      navbar: {
        title: "torchpipe",
        logo: {
          alt: "torchpipe Logo",
          src: "images/logo.svg",
          srcDark: "images/logo.svg",
        },
        // style: 'dark', //primary dark
        items: [
          {
            type: "doc",
            docId: "welcome",
            position: "left",
            label: "Docs",
            // routeBasePath: "/"
          },
          {
            type: "docSidebar",
            sidebarId: 'api',
            position: "left",
            label: "API",
            // routeBasePath: "/"
          },
          {
            type: "doc",
            // sidebarId: 'showcase',
            position: "left",
            label: "Showcase",
            docId: "showcase/showcase",
            // hide
            // routeBasePath: "/"
          },
          // {
          //   // sidebarId: 'showcase',
          //   position: "left",
          //   label: "Showcase",
          //   to: 'members',
          //   // hide
          //   // routeBasePath: "/"
          // },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          
          // {
          //   type: "doc",
          //   docId: "getting-started",
          //   position: "left",
          //   label: "Get Started",
          // },
          // { to: "/upgrade", label: "Upgrade", position: "left" },
          // {
          //   href: "https://nx.dev",
          //   className: "header-nxdev-link",
          //   "aria-label": "Nx documentation",
          //   position: "right",
          //   title: "Check Nx",
          //   label: "Nx",
          // },
          // {
          //   href: "https://nx.app",
          //   className: "header-nxdev-link",
          //   "aria-label": "Nx Cloud",
          //   position: "right",
          //   title: "Check Nx Cloud",
          //   label: "Nx Cloud",
          // },
          // {
          //   href: "https://nrwl.io",
          //   className: "header-nrwlio-link",
          //   "aria-label": "Nrwl consulting",
          //   position: "right",
          //   title: "Check Nrwl",
          //   label: "Nrwl",
          // },
          {
            href: "https://g.hz.netease.com/deploy/torchpipe/-/tree/develop",
            className: "header-gitlab-link",
            "aria-label": "GitLab repository",
            position: "right",
            title: "torchpipe on Gitlab",
          },
        ],
        hideOnScroll: true,
        
      },
      footer: {
        // links: [
        //   {
        //     title: "Resources",
        //     items: [
        //       {
        //         label: "Release",
        //         href: "https://g.hz.netease.com/deploy/torchpipe/-/releases",
        //       }
        //     ],
        //   },
        //   {
        //     title: "Help",
        //     items: [
        //       {
        //         label: "Troubleshooting",
        //         to: "/docs/troubleshooting",
        //       },
        //       {
        //         label: "Report Issues",
        //         href: "https://g.hz.netease.com/deploy/torchpipe/-/issues",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "GitLab",
        //         href: "https://g.hz.netease.com/deploy/torchpipe",
        //       }
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       // {
        //       //   label: "Content security",
        //       //   href: "https://dun.163.com/product/picture-detection",
        //       // },
        //     ],
        //   },
        // ],
        // Released under the MIT License.
        copyright: `&copy; ${new Date().getFullYear()} nisp. All rights reserved <br /> this page is modified from <a href='https://lerna.js.org/'>lerna</a> and built with <a href='https://docusaurus.io/'>docusaurus</a>. `,
        // copyright: `All rights reserved <br />  Copyright &copy; ${new Date().getFullYear()}, nisp.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['toml', 'ini'],
      },
    }),
        // ... Your other configurations.
  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 12,
        searchBarPosition : "auto"
      }),
    ],
    '@docusaurus/theme-mermaid',
  ],

  markdown: {
    mermaid: true,

  },
  // plugins: [
  //   [
  //     require.resolve("@cmfcmf/docusaurus-search-local"),
  //     {
  //       // Options here
  //       language :["en",'zh'],
  //       style:"none"
  //     },
  //   ],
  // ],
};

module.exports = config;
