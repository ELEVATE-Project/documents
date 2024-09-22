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
        type: 'category',
        label: 'Getting Started',
        items: [
          {
            type: 'doc',
            id: 'intro', // document ID
            label: 'Introduction', // sidebar label
          },
          {
            type: 'doc',
            id: 'technicalarchitecture', // document ID
            label: 'Architecture', // sidebar label
          },
          {
            type: 'doc',
            id: 'key-capabilities', // document ID
            label: 'Key Capabilities', // sidebar label
          },
        ]
      }, 
      {
        type: 'doc',
        id: 'settingup-overview',
        label: 'Hosting and Customizing Your Instance',
      },
      {
        type: 'category',
        label: 'Using the Application',
        items: [
          {
            type: 'doc',
            id: 'using-the-application', // document ID
            label: 'About the Application', // sidebar label
          },
          {
            type: 'doc',
            id: 'accesssurvey', // document ID
            label: 'Accessing Surveys', // sidebar label
          },
          {
            type: 'doc',
            id: 'startsurvey', // document ID
            label: 'Adding Responses to Surveys', // sidebar label
          },
        ]
      },
      {
        type: 'doc',
        id: 'repos', // document ID
        label: 'Source Code Repositories', // sidebar label
      },
    ],
  };
  
  module.exports = sidebars;