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
        {
          type: 'category',
          label: 'Administrator Dashboard',
          items:
           [

            {
              type: 'doc',
              id: 'aboutadmindashboard',
              label: 'About Admin Dashboard',
            },
            
            {type: 'doc',
              id: 'adimprovementprojectreport', // document ID
              label: 'Improvement Project Report', // sidebar label
              },

              {
                type: 'doc',
                id: 'adimprovementconsumptionreport', // document ID
                label: 'Improvement Consumption Report', // sidebar label
              },

            {type: 'doc',
              id: 'aduniqueuserimprovement', // document ID
              label: 'Unique User Improvement Project Report', // sidebar label
              }, 
                     
            ]
          },
          {
            type: 'category',
            label: 'Program Dashboard',
            items:
             [

              {
                type: 'doc',
                id: 'aboutprogramdashboard',
                label: 'About Program Dashboard',
              },
              
                {
                  type: 'doc',
                  id: 'pmstatusreport', // document ID
                  label: 'Status Report', // sidebar label
                },
                {
                  type: 'doc',
                  id: 'pmtaskreport', // document ID
                  label: 'Task Report', // sidebar label
                },
                {
                  type: 'doc',
                  id: 'pmimpprojectstatusoverview', // document ID
                  label: 'Improvement Projects Status Overview', // sidebar label
                },
              ]
            },
               {
                type: 'category',
                label: 'State Dashboard',
                items:
                [
    
                {
                      type: 'doc',
                      id: 'aboutstatedashboard',                                          
                      label: 'About State Dashboard',
                    },
                    {type: 'doc',
                      id: 'stconsumption', // document ID
                      label: 'Improvement Consumption Overview', // sidebar label
                      },
                      {
                        type: 'doc',
                        id: 'stimprovement', // document ID
                       
                        label: 'Improvement Project Report [Karnataka]', // sidebar label
                      }, 
                      {
                        type: 'doc',
                        id: 'stuniqueuser', // document ID
                        label: 'Unique User Improvement', // sidebar label
                      }, 
                    ]
                  },
                  {
                    type: 'category',
                    label: 'District Dashboard',
                    items:
                     [
      
                      {
                        type: 'doc',
                        id: 'aboutdistrictdashboard',
                        label: 'About District Dashboard',
                      }, 
                      
                      {
                        type: 'doc',
                        id: 'dtimprovementreport',
                        label: 'Improvement Project Report',
                        },
                        {
                          type: 'doc',
                          id: 'dtimpconsumption',
                          label: 'Improvement Consumption Report',
                          },

                          {
                            type: 'doc',
                            id: 'dtuniqueuser',
                            label: 'Unique User Improvement Project Report',
                            },          
                         
                
              ]
            },                  


         ],
  };
  
  module.exports = sidebars;