import PartialExample from './_mentored.mdx';
import PartialExample2 from './_elevate.mdx';
import Shiksha from './_shiksha.mdx';

# Hosting and Customizing MentorED

<PartialExample mentored /> consists of a collection of microservices which can be set up in a local server or in a cloud environment. You can choose to customize only the look and feel of the mobile application and use the microservices hosted by <Shiksha shiksha />.

>:::note
>To learn more, read the microservices sections for more information.

To host a customized instance of <PartialExample mentored />:

1. [Set up Apache Kafka](https://www.digitalocean.com/community/tutorials/how-to-install-apache-kafka-on-ubuntu-20-04).
2. [Set up MongoDB](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04).
3. [Set up Node.js](https://serverspace.io/support/help/how-to-install-node-js-on-ubuntu-20-04/).
4. [Set up Robo 3T](https://robomongo.org/).
5. [Set up the <PartialExample2 elevate /> user service](settingup-userservice).
6. [Set up the <PartialExample2 elevate /> mentoring service](settingup-mentoringservice).
7. [Set up the <PartialExample2 elevate /> notification service](settingup-notificationsservice).
8. [Set up the BigBlueButton service](https://docs.bigbluebutton.org/2.4/install.html#before-you-install).
9. [Customize the <PartialExample mentored /> mobile application](settingup-mentoredapplication).
