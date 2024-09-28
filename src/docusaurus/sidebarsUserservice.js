/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'settingup-userservice',
      label: 'Setting up the User Service',
    },
    {
      type: 'doc',
      id: 'database-userservice',
      label: 'Database Design',
    },
    {
      type: 'category',
      label: 'Setting up Organizations',
      items: [
        {
          type: 'doc',
          id: 'aboutorganizations',
          label: 'About Organizations',
        },
        {
          type: 'category',
          label: 'API Reference',
          items: [
            {
              type: 'doc',
              id: 'api-overview', // document ID
              label: 'Overview', // sidebar label
            },
            {
              type: 'doc',
              id: 'api-setupsystemadministrator', // document ID
              label: 'Create a System Administrator Account', // sidebar label
            },
            {
              type: 'doc',
              id: 'api-setuporganizations', // document ID
              label: 'Create Organizations', // sidebar label
            },
            {
              type: 'doc',
              id: 'api-manageorganizations', // document ID
              label: 'Manage Organizations', // sidebar label
            },
          ]
        },
      ]
    },
  ],
};

module.exports = sidebars;