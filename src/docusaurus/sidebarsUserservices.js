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
          id: 'gettingstarted', // document ID
          label: 'Getting Started with User Services', // sidebar label
        },
        {
          type: 'doc',
          id: 'register', // document ID
          label: 'Registering New Users', // sidebar label
        },
        {
          type: 'doc',
          id: 'login', // document ID
          label: 'Logging in', // sidebar label
        },

        {
      type: 'doc',
      id: 'resetpwd',
      label: 'Resetting Your Password',
    },


    {
      type: 'doc',
      id: 'delete',
      label: 'Deleting the Account',
    },

        {
          type: 'doc',
          id: 'profile', // document ID
          label: 'Updating Your Profile', // sidebar label
        },
           ]
     },    

         

    {
      type: 'category',
      label: 'Tenant Management',
      items: [

{
      type: 'doc',
      id: 'abouttenants',
      label: 'About Tenants',
    },
{
      type: 'doc',
      id: 'configuretenants',
      label: 'Creating and Configuring Tenants',
    },
  ]
},

    
{
  type: 'category',
  label: 'Managing Users and Roles',
      items: [
          {type: 'doc',
            id: 'createuser', // document ID
            label: 'Creating a User', // sidebar label
            },

            {
              type: 'doc',
            id: 'deleteuser', // document ID
            label: 'Deleting a User', // sidebar label
            },
            
            {
              type: 'doc',
            id: 'userroles', // document ID
            label: 'Managing User Roles', // sidebar label
            },
            {
              type: 'doc',
            id: 'permissions', // document ID
            label: 'Permission Hierarchy', // sidebar label
            },

            {
              type: 'doc',
            id: 'apireference', // document ID
            label: 'API Reference', // sidebar label
            },

          ]            
      },
    
      {
      type: 'category',
      label: 'Core Features and Configuration',
      items: [
          
            {
      type: 'doc',
      id: 'bulkuserupload',
      label: 'Bulk User Upload',
    }, 
    
    {
      type: 'doc',
      id: 'tenantmgmt',
      label: 'Setting Up Multi-tenant Organizations',
    },  
    
    {
      type: 'doc',
      id: 'orgmgmt',
      label: 'Manage Organizations',
    }, 

    {type: 'doc',
            id: 'notification', // document ID
            label: 'Understanding Notification workflows', // sidebar label
            },
  ] 
      },


    ],
  };
  
  module.exports = sidebars;