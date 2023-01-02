import PartialExample from './_elevate.mdx';

# Mentoring Service

You can set up the <PartialExample elevate /> Mentoring Service on a local system in one of the following ways:

* As a [Docker-Compose File (Easiest)](#dockcompose).
* As a [Dockerized service with local dependencies(Intermediate)](#docklocal).
* As a [Local Service with local dependencies(Hardest)](#localservice).

## Docker-Compose
<a name="dockcompose"></a>

**Objective**: Run all services at the same time with a common **Docker-Compose** file.

>:::caution
>Do not use docker-compose in production.

To run all services using a docker-compose file:

1.  Install **Docker** & **Docker-Compose**.
2.  Clone all elevate services into a common directory.

    ```
    ./ELEVATE/
    ├── mentoring
    ├── notification
    ├── scheduler
    └── user
    ```
3.  Create or start all containers:

    ```
    ELEVATE/mentoring$ docker-compose up
    ```

4.  Remove all containers and networks:

    ```
    ELEVATE/mentoring$ docker-compose down
    ```

    Refer **Docker-Compose README** for more information.

    :::note
    It is not always necessary to run **down** command. Existing containers and networks can be stopped gracefully by using **Ctrl + C** key combination.


## Setting up a Dockerized Service With Local Dependencies
<a name="docklocal"></a>

**Objective**: Run a single docker containerized service with existing local (in host) or remote dependencies.

### Setting up With Local Dependencies 

To set up a docker service with local dependencies:

1. Update dependency (such as Mongo, Kafka) IP addresses in **.env** with "**host.docker.internal**".

    For example:

    ```
     #MongoDb Connectivity URL
     MONGODB_URL = mongodb://host.docker.internal:27017/elevate-mentoring

     #Kafka Host Server URL
     KAFKA_URL = host.docker.external:9092
    ```

2. Find **host.docker.internal** IP address and add it to **mongod.conf** file in host.

    For example, if **host.docker.internal** is **172.17.0.1**,
    **mongod.conf** file will be as follows:

    ```
    # network interfaces
    net:
        port: 27017
        bindIp: "127.0.0.1,172.17.0.1"
    ```
    :::note
    Steps to find **host.docker.internal** IP address and location of **mongod.conf** is operating system specific. Refer [this Stack Overflow discussion](https://stackoverflow.com/questions/22944631/how-to-get-the-ip-address-of-the-docker-host-from-inside-a-docker-container) for more information.

3. Build the docker image.
    ```
    /ELEVATE/mentoring$ docker build -t elevate/mentoring:1.0 .
    ```
4. Run the docker container.

    - For Mac & Windows with docker v18.03+:

        ```
        $ docker run --name mentoring elevate/mentoring:1.0
        ```

    - For Linux:
        ```
        $ docker run --name mentoring --add-host=host.docker.internal:host-gateway elevate/mentoring:1.0
        ```
        Refer [this Stack Overflow discussion](https://stackoverflow.com/a/24326540) for more information.

### Setting up With Remote Dependencies 

To set up a docker service with remote dependencies:

1. Update dependency (such as Mongo and Kafka) IP addresses in **.env** with respective remote server IPs.

    For example:

    ```
     #MongoDb Connectivity URL
     MONGODB_URL = mongodb://10.1.2.34:27017/elevate-mentoring

     #Kafka Host Server URL
     KAFKA_URL = 11.2.3.45:9092
    ```

2. Follow the instructions given in [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-configure-remote-access-for-mongodb-on-ubuntu-20-04) to add Bind IP to **mongod.conf** in host.

    :::note
    Instructions might differ based on MongoDB version and operating system.

3. Build the docker image.
    ```
    /ELEVATE/mentoring$ docker build -t elevate/mentoring:1.0 .
    
    ```
4. Run the docker container.

    ```
    $ docker run --name mentoring elevate/mentoring:1.0
    ```

## Setting up a Local Service With Local Dependencies
<a name="localservice"></a>

**Objective**: Run a single service with existing local dependencies in host (**Non-Docker Implementation**).

1. Install required tools and dependencies such as:

    - Any IDE (such as Visual Studio Code)

    - [Nodejs](https://nodejs.org/en/download/)

    - [MongoDB](https://docs.mongodb.com/manual/installation/)

    - [Robo-3T](https://robomongo.org/)

2. Clone the **Mentoring service** repository.

    ```
    git clone https://github.com/ELEVATE-Project/mentoring.git
    ```

3. Add **.env** file to the project directory.

    Create a **.env** file in **src** directory of the project and copy the following environment variables into the file:

    ```
    # Mentoring Service Config

    # Port on which service runs
    APPLICATION_PORT = 3000

    # Service environment
    APPLICATION_ENV = development

    # Route after base URL
    APPLICATION_BASE_URL = /mentoring/

    # Mongo db connectivity URL
    MONGODB_URL = mongodb://localhost:27017/elevate-mentoring

    # Token secret to verify the access token
    ACCESS_TOKEN_SECRET = 'bsj82AHBxahusub12yexlashsbxAXADHBlaj'

    # Kafka hosted server URL
    KAFKA_URL = localhost:9092

    # Kafka group to which consumer belongs
    KAFKA_GROUP_ID = userservice

    # Kafka topic to push notification data
    NOTIFICATION_KAFKA_TOPIC = notificationtopic

    # Kafka topic name to consume from mentoring topic
    KAFKA_MENTORING_TOPIC ="mentoringtopic"

    # Kafka topic to push recording data
    KAFKA_RECORDING_TOPIC ="recordingtopic"

    # Any one of three features available for cloud storage
    CLOUD_STORAGE = 'GCP/AWS/AZURE'

    # Gcp json config file path
    GCP_PATH = 'gcp.json'

    # Gcp bucket name which stores files
    DEFAULT_GCP_BUCKET_NAME = 'gcp-bucket-storage-name'

    # Gcp project id
    GCP_PROJECT_ID = 'project-id'

    # Aws access key id
    AWS_ACCESS_KEY_ID = 'aws-access-key-id'

    # Aws secret access key
    AWS_SECRET_ACCESS_KEY = 'aws-secret-access-key'

    # Aws region where bucket will be located
    AWS_BUCKET_REGION = 'ap-south-1'

    # Aws end point
    AWS_BUCKET_ENDPOINT = 's3.ap-south-1.amazonaws.com'

    # Aws bucket name which stores files
    DEFAULT_AWS_BUCKET_NAME = 'aws-bucket-storage-name'

    # Azure storage account name
    AZURE_ACCOUNT_NAME = 'account-name'

    # Azure storage account key
    AZURE_ACCOUNT_KEY = 'azure-account-key'

    # Azure storage container which stores files
    DEFAULT_AZURE_CONTAINER_NAME = 'azure-container-storage-name'

    # user serice host
    USER_SERIVCE_HOST = 'http://localhost:3001'

    # user serice base URL
    USER_SERIVCE_BASE_URL = '/user/'

    # Big blue button URL
    BIG_BLUE_BUTTON_URL = https://dev.mentoring.shikshalokam.org

    # Big blue button base URL
    BIB_BLUE_BUTTON_BASE_URL = /bigbluebutton/

    # Meeting end callback events end point
    MEETING_END_CALLBACK_EVENTS = https%3A%2F%2Fdev.elevate-apis.shikshalokam.org%2Fmentoring%2Fv1%2Fsessions%2Fcompleted

    # Big blue button secret key
    BIG_BLUE_BUTTON_SECRET_KEY = n

    # Big blue button recording ready callback URL
    RECORDING_READY_CALLBACK_URL = http%3A%2F%2Flocalhost%3A3000%2F%3FmeetingID%3Dmeet123

    # Enable logging of network request
    ENABLE_LOG = true
    ```

4. Start MongoDB locally.

    > :::note
    > This might vary based on your host operating system and the method used.

5. Install the npm packages.

    ```
    ELEVATE/mentoring/src$ npm install
    ```

6. Start the Mentoring server.

    ```
    ELEVATE/mentoring/src$ npm start
    ```

7. Set the Scheduler service job by running the **schedulerScript** file located in the scripts directory:

    ```
    ELEVATE/mentoring/src/scripts$ node schedulerScript.js
    ```


## API Documentation 

https://elevate-apis.shikshalokam.org/mentoring/api-doc

## User Service

https://github.com/ELEVATE-Project/user.git

## Notification Service

https://github.com/ELEVATE-Project/notification.git 

## Scheduler Service

https://github.com/ELEVATE-Project/scheduler.git