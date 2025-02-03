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
        id: 'intro',
        label: 'Introduction',
      },
      {
        type: 'doc',
        id: 'reportarchitecture',
        label: 'Architecture',
      },
      {
        type: 'doc',
        id: 'keycapabilities',
       label: 'Key Capabilities',
      },

      {
        type: 'category',
        label: 'Using the Application',
        items: [
          {type: 'doc',
            id: 'aboutreports', // document ID
            label: 'About the Application', // sidebar label
            },
            {
              type: 'doc',
              id: 'gettingstarted', // document ID
              label: 'Getting Started with the application', // sidebar label
            },           
            {
              type: 'doc',
              id: 'signin', // document ID
              label: 'Signing in', // sidebar label
            },
            {
              type: 'doc',
              id: 'filter',
             label: 'Filtering the Reports',
            },      

            {
              type: 'doc',
              id: 'downloadreports',
             label: 'Download Reports',
            },      

            {
              type: 'doc',
              id: 'visualization',
             label: 'Visualization',
            },  
          ]   
        }, 


         ],
  };
  
  module.exports = sidebars;