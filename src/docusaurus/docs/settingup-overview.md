import PartialExample from './_mentored.mdx';
import PartialExample2 from './_elevate.mdx';
import Shiksha from './_shiksha.mdx';
import Admonition from '@theme/Admonition';

# Hosting and Customizing Mentor

The <PartialExample mentored /> capability is enabled by the <PartialExample mentored /> microservice which can be set up in any cloud environment or in an on-premise setup. 

In addition, system administrators can also set up a reference implementation (PWA) and customize the look and feel based on the needs. See [Customize the PWA](https://github.com/ELEVATE-Project/mentoring-mobile-app/blob/main/README.md) to learn more.

Other services such as User, Notification, Scheduler, and BigBlueButton are optional. The <PartialExample mentored /> service can work with one or more existing implementations of the same.

To host a customized instance of <PartialExample mentored />:

1. Set up PostgreSQL.
2. [Install Node.js® on Ubuntu 20.04](https://serverspace.io) (Search for *Install Node.js on Ubuntu 20.04* in the Tutorials section.).
3. [Set up <PartialExample mentored /> service](https://github.com/ELEVATE-Project/mentoring/blob/master/README.md).
4. [Set up Interface service](https://github.com/ELEVATE-Project/interface/blob/master/README.md).
5. [Customize the PWA](https://github.com/ELEVATE-Project/mentoring-mobile-app/blob/main/README.md).

Optionally, to set up supporting services do as follows:

* [Install  Apache Kafka® on Ubuntu 20.04](https://www.digitalocean.com/community) (Search for *Install Apache Kafka on Ubuntu 20.04* in the **Community** search box.).
* <a href="/userservice/settingup-userservice" target="_self">Set up User Service</a>.
* <a href="/notificationservice/settingup-notificationservice" target="_self">Set up Notification Service</a>.
* <a href="/schedulerservice/settingup-schedulerservice" target="_self">Set up Scheduler Service</a>.
* [Set up BigBlueButton Service](https://github.com/ELEVATE-Project/mentoring/blob/master/README.md).

