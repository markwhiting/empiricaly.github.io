/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: "/img/docusaurus.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Empirica", // Title for your website.
  tagline:
    // "Open-source JavaScript framework for running multiplayer interactive experiments and games in the browser. It was created to make it easy to develop and iterate on sophisticated designs in a statistically sound manner, and offers a unique combination of power, flexibility, and speed.",
    "Easy Multiplayer Interactive Experiments in the Browser",
  url: "https://empirica.ly", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "empiricaly.github.io",
  organizationName: "empiricaly",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "quick-start", label: "Docs" },
    { doc: "api", label: "API" },
    { page: "help", label: "Help" }
    // { blog: true, label: "Blog" }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/logo-black.png",
  footerIcon: "img/logo-white.png",
  favicon: "img/logo-transparent.png",

  /* Colors for website */
  colors: {
    primaryColor: "#20232a",
    secondaryColor: "#111214"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Empirica`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "github"
  },

  usePrism: ["js", "javascript", "typescript"],

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js"
  ],
  stylesheets: ["/css/code-block-buttons.css"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/logo-white.png",
  twitterImage: "img/logo-white.png",

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/empiricaly/meteor-empirica-core"
};

module.exports = siteConfig;
