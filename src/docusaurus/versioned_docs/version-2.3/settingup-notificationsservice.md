import PartialExample from './_elevate.mdx';
import Version from './_version.mdx';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

# Notifications Service

You can set up the <PartialExample elevate /> Notification Service on a local system in one of the following ways:

 - Using a [Docker Image](#using-a-docker-image).

 - As a [dockerized service with local dependencies(Intermediate)](#dockdep)

 - As a [local service with local dependencies(Hardest)](#localdep)

## Using a Docker Image

**Objective**: Adding the service to your cloud environment by running the docker images.

**Prerequisite**: Docker is installed and is running.

<Admonition type="info">
<p>See <a href="http://www.docker.io/gettingstarted/#h_installation">Docker website</a> for installation instructions.</p>
</Admonition>

1. Pull the docker image:

    <CodeBlock language="jsx">
    docker pull shikshalokamqa/elevate-notification:version
    </CodeBlock>
    
    For example:

    <CodeBlock language="jsx">
    docker pull shikshalokamqa/elevate-notification:version:<Version version />
    </CodeBlock>

2. Run the docker image:

    <CodeBlock language="jsx">
    docker run shikshalokamqa/elevate-notification:version
    </CodeBlock>

    To run the docker image with port number:

    <CodeBlock language="jsx">
    docker run -p 3000:3001 shikshalokamqa/elevate-notification:version
    </CodeBlock>

    You can pass the .env file as argument to the image.

    For example:

    <CodeBlock language="jsx">
    docker run --env-file="path of the env file" shikshalokamqa/elevate-notification:<Version version />
    </CodeBlock>

    <Admonition type="info">
    <p>For more information about the elevate-notification env file, you can check the <a href="https://github.com/ELEVATE-Project/notification/blob/master/src/.env.sample">sample env</a>.</p>
    </Admonition>

## Setting up a Dockerized Service With Local Dependencies
<a name="dockdep">&nbsp;</a>

**Objective**: Run a single docker containerized service with existing local (in host) or remote dependencies.

### Setting up With Local Dependencies


1. Update dependency (such as Kafka) IP addresses in **.env** with "**host.docker.internal**".

    For example:

    ```
     #Kafka Host Server URL
     KAFKA_URL = host.docker.external:9092
    ```

2. Build the docker image.
    ```
    /ELEVATE/notification$ docker build -t elevate/notification:1.0 .
    ```
3. Run the docker container.

    - For Mac and Windows with docker v18.03+:

        ```
        $ docker run --name notification elevate/notification:1.0
        ```

    - For Linux:
        ```
        $ docker run --name notification --add-host=host.docker.internal:host-gateway elevate/notification:1.0
        ```
        Refer [this Stack Overflow discussion](https://stackoverflow.com/a/24326540) for more information.

### Setting up With Remote Dependencies

1. Update dependency (such as Kafka) IP addresses in **.env** with respective remote server IPs.

    For example:

    ```
     #Kafka Host Server URL
     KAFKA_URL = 11.2.3.45:9092
    ```

2. Build the docker image.
    ```
    /ELEVATE/notification$ docker build -t elevate/notification:1.0 .

    ```
3. Run the docker container.

    ```
    $ docker run --name notification elevate/notification:1.0
    ```

## Setting up a Local Service With Local Dependencies
<a name="dockdep">&nbsp;</a>

**Objective**: Run a single service with existing local dependencies in host (**Non-Docker Implementation**).

1. Install required tools and dependencies such as:

    - Any IDE (such as Visual Studio Code)

    - [Nodejs](https://nodejs.org/en/download/)

2. Clone the **Notification service** repository.

    ```
    git clone https://github.com/ELEVATE-Project/notification.git
    ```

3. Add **.env** file to the project directory.

    Create a **.env** file in **src** directory of the project and copy the following environment variables into the file:

    ```
    # Notification Service Config

    #Port on which service runs
    APPLICATION_PORT = 3000

    #Application environment
    APPLICATION_ENV = development

    #Route after base URL
    APPLICATION_BASE_URL = /notification/

    #Kafka endpoint
    KAFKA_HOST = "localhost:9092"

    #kafka topic name
    KAFKA_TOPIC ="testTopic"

    #kafka consumer group id
    KAFKA_GROUP_ID = "notification"

    #sendgrid api key
    SENDGRID_API_KEY = "SG.sdssd.dsdsd.XVSDGFEBGEB.sddsd"

    #sendgrid sender email address
    SENDGRID_FROM_MAIL = "test@gmail.com"

    ```

4. Install the npm packages.

    ```
    ELEVATE/notification/src$ npm install
    ```

5. Start the Notification server.

    ```
    ELEVATE/notification/src$ npm start
    ```

## API Documentation 

https://elevate-apis.shikshalokam.org/notification/api-doc

## Mentoring Service

https://github.com/ELEVATE-Project/mentoring.git

## User Service

https://github.com/ELEVATE-Project/user.git

## Scheduler Service

https://github.com/ELEVATE-Project/scheduler.git