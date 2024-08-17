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
  //  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
   tutorialSidebar: [
     {
       type: 'category',
       label: 'Tutorial',
       items: ['hello'],
     },
   ],
  */
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
      id: 'policyarchitecture', // document ID
      label: 'Multi-Tenant Architecture', // sidebar label
    },
    {
      type: 'category',
      label: 'Set up Organizations Using APIs',
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
          id: 'api-setpolicies', // document ID
          label: 'Set Policies for Organizations', // sidebar label
        },
        {
          type: 'doc',
          id: 'api-defaultrules', // document ID
          label: 'Set Default Rules for Organizations', // sidebar label
        },
        {
          type: 'doc',
          id: 'api-entitytype', // document ID
          label: 'Create Entity Types', // sidebar label
        },
        {
          type: 'doc',
          id: 'api-manageorganizations', // document ID
          label: 'Manage Organizations', // sidebar label
        }
      ]
    },
    {
      type: 'doc',
      id: 'settingup-overview', // document ID
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
        {
          type: 'doc',
          id: 'typesofsessions', // document ID
          label: 'Types of Sessions', // sidebar label
        },
        {
          type: 'doc',
          id: 'notifications', // document ID
          label: 'Notifications', // sidebar label
        },
        {
          type: 'category',
          label: 'Managing Users for an Organization',
          items: [
            {
              type: 'doc',
              id: 'aboutorganizationadministrator', // document ID
              label: 'Organization Administrator', // sidebar label
            },
            {
              type: 'doc',
              id: 'bulkupload', // document ID
              label: 'Uploading Users to the Application', // sidebar label
            },
            {
              type: 'doc',
              id: 'managementorrequests', // document ID
              label: 'Managing Requests to Become a Mentor', // sidebar label
            },
          ]
        },
        {
          type: 'category',
          label: 'Managing Sessions for an Organization',
          items: [
            {
              type: 'doc',
              id: 'aboutsessionmanager', // document ID
              label: 'Session Manager', // sidebar label
            },
            {
              type: 'doc',
              id: 'createsession-sessionmanager', // document ID
              label: 'Creating Sessions for an Organization', // sidebar label
            },
            {
              type: 'doc',
              id: 'manageassignedsession', // document ID
              label: 'Managing Sessions Assigned to Mentors', // sidebar label
            },
            {
              type: 'doc',
              id: 'joinassignedsession', // document ID
              label: 'Joining Sessions Assigned to Mentors', // sidebar label
            }
          ]
        },
        {
          type: 'category',
          label: 'How Mentors Can Use the Application',
          items: [

            {
              type: 'doc',
              id: 'signing-up-as-a-mentor', // document ID
              label: 'Signing up as a Mentor', // sidebar label
            },
            {
              type: 'doc',
              id: 'logging-in-mentor', // document ID
              label: 'Logging in', // sidebar label
            },
            {
              type: 'doc',
              id: 'creating-and-managing-mentor-profile', // document ID
              label: 'Creating a Profile', // sidebar label
            },
            {
              type: 'doc',
              id: 'setting-up-a-session', // document ID
              label: 'Setting up a Session', // sidebar label
            },
            {
              type: 'doc',
              id: 'inviting-mentorsandmentees-host', // document ID
              label: 'Promoting Your Public Sessions', // sidebar label
            },
            {
              type: 'doc',
              id: 'starting-a-session', // document ID
              label: 'Starting a Session', // sidebar label
            },
            {
              type: 'doc',
              id: 'dashboard-for-mentors', // document ID
              label: 'Dashboard', // sidebar label
            },
            {
              type: 'doc',
              id: 'feedbackformentors', // document ID
              label: 'Providing Feedback on a Session', // sidebar label
            },
            {
              type: 'doc',
              id: 'mentor-deleteaccountrequest', // document ID
              label: 'Deleting the Account', // sidebar label
            }
          ]
        },

        {
          type: 'category',
          label: 'How Mentees Can Use the Application',
          items: [

            {
              type: 'doc',
              id: 'signing-up-as-a-mentee', // document ID
              label: 'Signing up as a Mentee', // sidebar label
            },
            {
              type: 'doc',
              id: 'logging-in-mentee', // document ID
              label: 'Logging in', // sidebar label
            },
            {
              type: 'doc',
              id: 'creating-and-managing-mentee-profile', // document ID
              label: 'Creating a Profile', // sidebar label
            },
            {
              type: 'doc',
              id: 'request-beamentor', // document ID
              label: 'Requesting to Become a Mentor', // sidebar label
            },
            {
              type: 'doc',
              id: 'mentor-directory', // document ID
              label: 'Using the Mentor Directory', // sidebar label
            },
            {
              type: 'doc',
              id: 'viewmentorprofilelink', // document ID
              label: 'Using a Shared Link to View a Mentor Profile', // sidebar label
            },
            {
              type: 'doc',
              id: 'enrolling-for-a-session', // document ID
              label: 'Enrolling for a Session', // sidebar label
            },
            {
              type: 'doc',
              id: 'inviting-mentorsandmentees-participants', // document ID
              label: 'Promoting Public Sessions with Your Contacts', // sidebar label
            },
            {
              type: 'doc',
              id: 'joining-a-session', // document ID
              label: 'Joining a Session', // sidebar label
            },
            {
              type: 'doc',
              id: 'joining-sessions-using-a-shared-link', // document ID
              label: 'Using a Shared Link to Join a Session', // sidebar label
            },
            {
              type: 'doc',
              id: 'dashboard-for-mentees', // document ID
              label: 'Dashboard', // sidebar label
            },
            {
              type: 'doc',
              id: 'feedbackformentees', // document ID
              label: 'Providing Feedback on a Session', // sidebar label
            },
            {
              type: 'doc',
              id: 'mentee-deleteaccountrequest', // document ID
              label: 'Deleting the Account', // sidebar label
            }
          ]
        },
        {
          type: 'doc',
          id: 'change-language',
          label: 'Changing the Language Settings',
        },
        {
          type: 'category',
          label: 'Support',
          items: [
            {
              type: 'doc',
              id: 'report-signuporloginissue',
              label: 'Reporting Sign up and Log in Issues'
            },
            {
              type: 'doc',
              id: 'report-an-issue',
              label: 'Reporting an Issue'
            },
            {
              type: 'doc',
              id: 'using-faq',
              label: 'Using the FAQ Page'
            },
            {
              type: 'doc',
              id: 'view-helpvideos',
              label: 'Viewing the Help Videos'
            }
          ]
        },
        {
          type: 'category',
          label: 'Account Security',
          items: [
            {
              type: 'doc',
              id: 'accountloginactivity',
              label: 'Viewing the Account Login Activity'
            },
            {
              type: 'doc',
              id: 'changepassword',
              label: 'Changing the Account Password'
            },
          ]
        },
        {
          type: 'doc',
          id: 'faq', // document ID
          label: 'FAQs', // sidebar label
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            {
              type: 'doc',
              id: 'bulkupload-invalidsession',
              label: 'Invalid Sessions During Bulk Upload',
            },
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Additional Technical Resources',
      items: [
        {
          type: 'doc',
          id: 'apidocumentation', // document ID
          label: 'API Documentation', // sidebar label
        },
        {
          type: 'doc',
          id: 'databasedesign', // document ID
          label: 'Database Design', // sidebar label
        },
        {
          type: 'doc',
          id: 'repos', // document ID
          label: 'Source Code Repositories', // sidebar label
        },
      ]
    },
    {
      type: 'doc',
      id: 'discussions', // document ID
      label: 'Discussions', // sidebar label
    }
  ]
};
module.exports = sidebars;