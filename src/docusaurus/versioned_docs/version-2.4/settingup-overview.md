import PartialExample from './_mentored.mdx';
import PartialExample2 from './_elevate.mdx';
import Shiksha from './_shiksha.mdx';
import Admonition from '@theme/Admonition';

# Hosting and Customizing Mentor

The <PartialExample mentored /> capability is enabled by the <PartialExample mentored /> microservice which can be set up in any cloud environment or in an on-premise setup. 

In addition, you can also set up a reference implementation (portal) and customize the look and feel based on your needs. See [Customize the Web Portal](settingup-webportal) to learn more.

Other services such as user, notification, scheduler, and BigBlueButton are optional. The <PartialExample mentored /> service can work with one or more existing implementations of the same.

<Admonition type="info">
<p>To learn more, read the microservices sections for more information.</p>
</Admonition>

To host a customized instance of <PartialExample mentored />:

1. [Set up MongoDB](settingup-mongodb).
2. [Install Node.js on Ubuntu 20.04](https://serverspace.io) (Search for *Install node.js on Ubuntu 20.04* in the Tutorials section.).
3. [Set up <PartialExample mentored /> service](settingup-mentoringservice).
4. [Customize the <PartialExample mentored /> mobile application](settingup-mobileapplication).
5. [Customize the Web Portal](settingup-webportal).

Optionally, you can set up the following supporting services:

* [Install Apache Kafka on Ubuntu 20.04](https://www.digitalocean.com/community) (Search for *Install Apache Kafka on Ubuntu 20.04* in the Community serach box.).
* [Set up user service](settingup-userservice).
* [Set up notifications service](settingup-notificationsservice).
* [Set up scheduler service](settingup-schedulerservice).
* [Set up BigBlueButton service](settingup-bbb).

