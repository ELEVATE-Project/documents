import PartialExample from './_elevate.mdx';

# Setting up the User Service

<PartialExample elevate /> user services can be setup in local in one of the following ways:

- As a [dockerized service with local dependencies (Intermediate)](#sectiona).
- As a [local service with local dependencies (Hardest)](#sectionb).

<a name="sectiona"> </a>

## Setting up a Dockerized Service With Local Dependencies

**Objective**: Run single docker containerized service with existing local (in host) or remote dependencies.

### Local Dependencies Steps

1. Update dependency (such as Mongo, Kafka) IP addresses in **.env** with "**host.docker.internal**".

    For example:

    ```
    #MongoDb Connectivity Url
    MONGODB_URL = mongodb://host.docker.internal:27017/elevate-mentoring

    #Kafka Host Server URL
    KAFKA_URL = host.docker.external:9092
    ```

2. Find **host.docker.internal** IP address and added it to **mongod.conf** file in host.

    For example, if **host.docker.internal** is **172.17.0.1**,
     **mongod.conf:**

    ```
    # network interfaces
    net:
        port: 27017
        bindIp: "127.0.0.1,172.17.0.1"
    ```
    :::note
    Steps to find **host.docker.internal** IP address and location of **mongod.conf** is operating system specific. Refer [this Stack Overflow discussion thread](https://stackoverflow.com/questions/22944631/how-to-get-the-ip-address-of-the-docker-host-from-inside-a-docker-container) for more information.

3. Build the docker image.
    ```
    /ELEVATE/user$ docker build -t elevate/user:1.0 .
    ```
4. Run the docker container.

    - For Mac and Windows with docker v18.03+:

        ```
        $ docker run --name user elevate/user:1.0
        ```

    - For Linux:
        ```
        $ docker run --name user --add-host=host.docker.internal:host-gateway elevate/user:1.0`
        ```
        Refer [this Stack Overflow discussion thread](https://stackoverflow.com/a/24326540) for more information.

### Remote Dependencies Steps

1. Update dependency (such as Mongo, Kafka) IP addresses in **.env** with respective remote server IPs.

    For example:

    ```
     #MongoDb Connectivity Url
     MONGODB_URL = mongodb://10.1.2.34:27017/elevate-mentoring

     #Kafka Host Server URL
     KAFKA_URL = 11.2.3.45:9092
    ```

2. Add Bind IP to **mongod.conf** in host:

    Follow instructions given [here.](https://www.digitalocean.com/community/tutorials/how-to-configure-remote-access-for-mongodb-on-ubuntu-20-04)

    :::note
    Instructions might differ based on MongoDB version and operating system.

3. Build the docker image.
    ```
    /ELEVATE/user$ docker build -t elevate/user:1.0 .
    ```
4. Run the docker container.

    ```
    $ docker run --name user elevate/user:1.0
    ```

<a name="sectionb"> </a>

## Setting up a Local Service With Local Dependencies

**Objective**: Run a single service with existing local dependencies in host (**Non-Docker Implementation**).

### Steps

1. Install the required tools and dependencies such as:

    - Install any IDE (for example: Visual Studio Code)

    - [Install Nodejs](https://nodejs.org/en/download/)

    - [Install MongoDB](https://docs.mongodb.com/manual/installation/)

    - [Install Robo-3T](https://robomongo.org/)

2. Clone the **User service** repository.

    ```
    git clone https://github.com/ELEVATE-Project/user.git
    ```

3. Add **.env** file to the project directory

    Create a **.env** file in **src** directory of the project and copy these environment variables into it.

    ```
    #User Service Config

    # Port on which service runs
    APPLICATION_PORT = 3000

    # Service environment
    APPLICATION_ENV = development

    # Database connectivity url
    MONGODB_URL = mongodb://localhost:27017/db-name

    # Number of rounds for encryption
    SALT_ROUNDS = 10

    # Token secret to generate access token
    ACCESS_TOKEN_SECRET = 'access-token-secret'

    # Token secret to generate refresh token
    REFRESH_TOKEN_SECRET = 'refresh-token-secret'

    # Kafka hosted server url
    KAFKA_URL = localhost:9092

    # Kafka group to which consumer belongs
    KAFKA_GROUP_ID = userservice

    # Kafka topic to consume data from
    KAFKA_TOPIC = 'topic'

    # Kafka topic to push notification data
    NOTIFICATION_KAFKA_TOPIC = notificationtopic

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

    # Internal access token for communicationcation between services via network call
    INTERNAL_ACCESS_TOKEN = 'internal-access-token'

    # Mentor screct code for registering
    MENTOR_SECRET_CODE = 'secret-code'

    #Enable logging of network request
    ENABLE_LOG = true

    # JWT Access Token expiry In Days
    ACCESS_TOKEN_EXPIRY = '1'

    # JWT Refresh Token expiry In Days
    REFRESH_TOKEN_EXPIRY = '183'

    # Redis Host connectivity url
    REDIS_HOST = 'redis://localhost:6379'

    # Otp expiration time for forgetpassword or registration process
    OTP_EXP_TIME = 86400

    # Enable email based otp verification for registration process
    ENABLE_EMAIL_OTP_VERIFICATION = true

    # Api doc url
    API_DOC_URL = '/api-doc'
    ```

4. Start MongoDB locally

    Based on your host operating system and method used, start MongoDB.

5. Install Npm packages

    ```
    ELEVATE/user/src$ npm install
    ```

6. Start User server

    ```
    ELEVATE/user/src$ npm start
    ```

## API Documentation 

https://dev.elevate-apis.shikshalokam.org/user/api-doc

## Mentoring Services

https://github.com/ELEVATE-Project/mentoring.git

## Notification Services

https://github.com/ELEVATE-Project/notification.git