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
        id: 'settingup-templates',
        label: 'Introduction',
      },

      {
        type: 'doc',
        id: 'download-upload templates',
        label: 'Creating Solutions',
    },
    {
      type: 'doc',
      id: 'view-solutions',
      label: 'View Solutions',
  },
  {
    type: 'doc',
    id: 'hosting-solutionuploadportal',
    label: 'Hosting and Customizing Your Instance',
    }  
     
    ],
  };
  
  module.exports = sidebars;