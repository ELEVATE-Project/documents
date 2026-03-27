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
      id: 'settingupoverview', // document ID
      label: 'Hosting and Customizing Your Instance', // sidebar label
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
          id: 'gettingstarted', // document ID
          label: 'Getting Started with the Application', // sidebar label
        },      
        
        
           ]
     },   
            
       {
      type: 'category',
      label: 'Working with Discussion bot',
      items: [
        {
          type: 'doc',
          id: 'capturediscussion', // document ID
          label: 'Capture Discussions', // sidebar label
        },
        {
          type: 'doc',
          id: 'discussionreports', // document ID
          label: 'Download Discussion Reports', // sidebar label
        },      
                
           ]
     },   

     {
      type: 'category',
      label: 'Working with Story bot',
      items: [
        {
          type: 'doc',
          id: 'improvementstory', // document ID
          label: 'Improvement Story', // sidebar label
        },
        {
          type: 'doc',
          id: 'downloadimpstory', // document ID
          label: 'Download Improvement Story', // sidebar label
        },      
                
           ]
     },   
 {
      type: 'category',
      label: 'Additional Technical Resources',
      items: [
        {
          type: 'doc',
          id: 'repos', // document ID
          label: 'Source Code Repositories', // sidebar label
        },         
                
           ]
     },   

  ]
      
    };
  

module.exports = sidebars;
