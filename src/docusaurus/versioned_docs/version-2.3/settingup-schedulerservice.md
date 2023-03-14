import PartialExample from './_elevate.mdx';
import Version from './_version.mdx';
import CodeBlock from '@theme/CodeBlock';

# Scheduler Service

You can set up the <PartialExample elevate /> Scheduler Service on a local system in one of the following ways:

* Using a [Docker Image](#using-a-docker-image).
* As a [dockerized service with local dependencies (Intermediate)](#setting-up-a-dockerized-service-with-local-dependencies)

* As a [local Service with local dependencies (Hardest)](#setting-up-a-local-service-with-local-dependencies)

## Using a Docker Image

**Objective**: Adding the service to your cloud environment by running the docker images.

**Prerequisite**: Docker is installed and is running.

>:::info
>See the [Docker website](http://www.docker.io/gettingstarted/#h_installation) for installation instructions.

1. Pull the docker image:

    <CodeBlock language="jsx">
    docker pull shikshalokamqa/elevate-scheduler:version
    </CodeBlock>
    
    For example:

    <CodeBlock language="jsx">
    docker pull shikshalokamqa/elevate-scheduler:version:<Version version />
    </CodeBlock>

2. Run the docker image:

    <CodeBlock language="jsx">
    docker run shikshalokamqa/elevate-scheduler:version
    </CodeBlock>

    To run the docker image with port number:

    <CodeBlock language="jsx">
    docker run -p 3000:3001 shikshalokamqa/elevate-scheduler:version
    </CodeBlock>

    You can pass the .env file as argument to the image.

    For example:

    <CodeBlock language="jsx">
    docker run --env-file="path of the env file" shikshalokamqa/elevate-scheduler:<Version version />
    </CodeBlock>

    >:::info
    >For more information about the elevate-scheduler env file, you can check the [sample env](https://github.com/ELEVATE-Project/scheduler/blob/master/src/.env.sample).

## Setting up a Dockerized Service With Local Dependencies

**Objective**: Run a single docker containerized service with existing local (in host) or remote dependencies.

### Setting up With Local Dependencies

1. Update dependency (such as Mongo and Kafka) IP addresses in **.env** with "**host.docker.internal**".

    For example:

    ```
     #MongoDb Connectivity URL
     MONGODB_URL = mongodb://host.docker.internal:27017/elevate-scheduler

     #Kafka Host Server URL
     KAFKA_URL = host.docker.external:9092
    ```

2. Find **host.docker.internal** IP address and add it to **mongod.conf** file in host.

    For example: If **host.docker.internal** is **172.17.0.1**,
    **mongod.conf** will be as follows:

    ```
    # network interfaces
    net:
        port: 27017
        bindIp: "127.0.0.1,172.17.0.1"
    ```

    > :::note
    > Steps to find **host.docker.internal** IP address and location of **mongod.conf** is operating system specific. Refer [this Stack Overflow discussion thread](https://stackoverflow.com/questions/22944631/how-to-get-the-ip-address-of-the-docker-host-from-inside-a-docker-container) for more information.

3. Build the docker image.
    ```
    /ELEVATE/scheduler$ docker build -t elevate/scheduler:1.0 .

    ```
4. Run the docker container.

    - For Mac and Windows with docker v18.03+:

        ```
        $ docker run --name user elevate/scheduler:1.0
        ```

    - For Linux:
        ```
        $ docker run --name user --add-host=host.docker.internal:host-gateway elevate/scheduler:1.0
        ```
        Refer this [Stack Overflow discussion thread](https://stackoverflow.com/a/24326540) for more information.

### Setting up With Remote Dependencies 

1. Update dependency (such as Mongo and Kafka) IP addresses in **.env** with respective remote server IPs.

    For example:

    ```
     #MongoDb Connectivity URL
     MONGODB_URL = mongodb://10.1.2.34:27017/elevate-scheduler

     #Kafka Host Server URL
     KAFKA_URL = 11.2.3.45:9092
    ```

2.  Follow the instructions given in [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-configure-remote-access-for-mongodb-on-ubuntu-20-04) to add Bind IP to **mongod.conf** in host.

    > :::note
    > Instructions might differ based on the MongoDB version and operating system.

3. Build the docker image.
    ```
    /ELEVATE/scheduler$ docker build -t elevate/scheduler:1.0 .
    
    ```
4. Run the docker container.

    ```
    $ docker run --name scheduler elevate/scheduler:1.0
    ```

## Setting up a Local Service With Local Dependencies

**Objective**: Run single service with existing local dependencies in host (**Non-Docker Implementation**).

1. Install the required tools and dependencies such as:

    * Any IDE (for example: Visual Studio Code)

    * [Nodejs](https://nodejs.org/en/download/)

    * [MongoDB](https://docs.mongodb.com/manual/installation/)
    
    * [Robo-3T](https://robomongo.org/)

2. Clone the **Scheduler service** repository.

    ```
    git clone https://github.com/ELEVATE-Project/scheduler.git
    ```

3. Add **.env** file to the project directory.

    Create a **.env** file in **src** directory of the project and copy the following environment variables into the file:

    ```
    #Scheduler Service Config

    #Application Base URL
    APPLICATION_BASE_URL = /scheduler/

    # Kafka hosted server URL
    KAFKA_URL = localhost:9092

    # Kafka topic to push notification data
    NOTIFICATION_KAFKA_TOPIC = 'notificationtopic'

    # MONGODB_URL
    MONGODB_URL = mongodb://localhost:27017/tl-cron-rest

    # App running port
    APPLICATION_PORT = 4000

    # Api doc URL
    API_DOC_URL = '/api-doc'
    ```

4. Start MongoDB locally.

    > :::note
    > This might vary based on your host operating system and the method used.

5. Install the npm packages.

    ```
    ELEVATE/scheduler/src$ npm install
    ```

6. Start the Scheduler server.

    ```
    ELEVATE/scheduler/src$ npm start
    ```

## API Documentation 

https://elevate-apis.shikshalokam.org/scheduler/api-doc

## Mentoring Services

https://github.com/ELEVATE-Project/mentoring.git

## User Services

https://github.com/ELEVATE-Project/user.git

## Notification Services

https://github.com/ELEVATE-Project/notification.git