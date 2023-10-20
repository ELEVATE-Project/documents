import PartialExample from './_elevate.mdx';
import Version from './_version.mdx';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

# Setting up the User Service

You can set up the User Service on a local system in one of the following ways:

- Using a [Docker Image](#using-a-docker-image)
- As a [dockerized service with local dependencies (Intermediate)](#sectiona)
- As a [local service with local dependencies (Hardest)](#sectionb)

<a name="sectiona"> </a>

## Using a Docker Image

**Objective**: Adding the service to your cloud environment by running the docker images.

**Prerequisite**: Docker is installed and is running.

<Admonition type="info">
<p>See <a href="http://www.docker.io">Get Started section in Docker</a> for installation instructions.</p>
</Admonition>

1. Pull the docker image:

    <CodeBlock language="jsx">
    docker pull shikshalokamqa/elevate-user:version
    </CodeBlock>
    
    For example:

    <CodeBlock language="jsx">
    docker pull shikshalokamqa/elevate-user:version:<Version version />
    </CodeBlock>

2. Run the docker image:

    <CodeBlock language="jsx">
    docker run shikshalokamqa/elevate-user:version
    </CodeBlock>

    To run the docker image with port number:

    <CodeBlock language="jsx">
    docker run -p 3000:3001 shikshalokamqa/elevate-user:version
    </CodeBlock>

    You can pass the .env file as argument to the image.

    For example:

    <CodeBlock language="jsx">
    docker run --env-file="path of the env file" shikshalokamqa/elevate-user:<Version version />
    </CodeBlock>

    <Admonition type="info">
    <p>For more information about the elevate-notification env file, you can check the <a href="https://github.com/ELEVATE-Project/user/blob/master/src/.env.sample">sample env</a>.</p>
    </Admonition>

## Setting up a Dockerized Service With Local Dependencies

**Objective**: Run a single docker containerized service with existing local (in host) or remote dependencies.

### Setting up With Local Dependencies

1. Update dependency (such as Mongo and Kafka) IP addresses in **.env** with "**host.docker.internal**".

    For example:

    ```
    #MongoDb Connectivity URL
    MONGODB_URL = mongodb://host.docker.internal:27017/elevate-mentoring

    #Kafka Host Server URL
    KAFKA_URL = host.docker.external:9092
    ```

2. Find **host.docker.internal** IP address and use it as the bind IP. See [Setting up MongoDB 4.1.4](settingup-mongodb.md) to learn more.

    <Admonition type="note">
    <p>Steps to find <b>host.docker.internal</b> IP address and location of <b>mongod.conf</b> is operating system specific. Refer <a href="https://stackoverflow.com/questions/22944631/how-to-get-the-ip-address-of-the-docker-host-from-inside-a-docker-container">this Stack Overflow discussion thread</a> for more information.</p>
    </Admonition>

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
        $ docker run --name user --add-host=host.docker.internal:host-gateway elevate/user:1.0
        ```
        Refer [this Stack Overflow discussion thread](https://stackoverflow.com/a/24326540) for more information.

### Setting up With Remote Dependencies

1. Update dependency (such as Mongo and Kafka) IP addresses in **.env** with respective remote server IPs.

    For example:

    ```
     #MongoDb Connectivity URL
     MONGODB_URL = mongodb://10.1.2.34:27017/elevate-mentoring

     #Kafka Host Server URL
     KAFKA_URL = 11.2.3.45:9092
    ```

2. Set the bind IP using the steps given in [Setting up MongoDB 4.1.4](settingup-mongodb.md). For more information, search for *Configure Remote Access for MongoDB on Ubuntu 20.04* in [Digital Ocean Community](https://www.digitalocean.com/community).

    <Admonition type="note">
    <p>Instructions might differ based on the MongoDB version and operating system.</p>
    </Admonition>

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

1. Install the required tools and dependencies such as:

    - Any IDE (for example: Visual Studio Code)

    - [Nodejs](https://nodejs.org) (Install Nodejs from the Downloads section.)

    - [MongoDB](settingup-mongodb.md)

    - [Robo-3T](https://robomongo.org/)

2. Clone the **User service** repository.

    ```
    git clone https://github.com/ELEVATE-Project/user.git
    ```

3. Add **.env** file to the project directory.

    Create a **.env** file in **src** directory of the project and copy the folowing environment variables into the file:

    ```
    # User Service Config

    # Application Configuration
    APPLICATION_PORT=3001
    APPLICATION_ENV=development
    APPLICATION_BASE_URL=/user/
    ENABLE_LOG=true
    API_DOC_URL=/user/api-doc
    INTERNAL_CACHE_EXP_TIME=86400

    # Database Configuration
    MONGODB_URL=mongodb://localhost:27017/elevate-users

    # Access Tokens Configuration
    ACCESS_TOKEN_SECRET=w4asdf3aasdfwe5t6ergw4uyh56y
    INTERNAL_ACCESS_TOKEN=internal_access_token

    # Kafka Configuration
    KAFKA_URL=localhost:9095
    KAFKA_GROUP_ID=mentoring
    KAFKA_TOPIC=kakfatopic
    NOTIFICATION_KAFKA_TOPIC=dev.notifications
    KAFKA_MENTORING_TOPIC=mentoringtopic
    SESSION_KAFKA_TOPIC=session
    KAFKA_RECORDING_TOPIC=recordingtopic
    RATING_KAFKA_TOPIC=dev.mentor_rating

    # Email Configuration
    REGISTRATION_EMAIL_TEMPLATE_CODE=registration
    OTP_EMAIL_TEMPLATE_CODE=emailotp
    KEY=E/m3RD/SGASDFS+W45TYGshsfWASAsadfSasdDF45Y=
    IV=W45YW45TSGDF4AGASDFWH/Q==
    REGISTRATION_OTP_EMAIL_TEMPLATE_CODE=registrationotp
    REGISTRATION_EMAIL_TEMPLATE_CODE=registration
    REGISTRATION_OTP_EMAIL_TEMPLATE_CODE=registrationotp
    CLEAR_INTERNAL_CACHE=userinternal

    # Security Configuration
    SALT_ROUNDS=10
    ACCESS_TOKEN_EXPIRY=1
    REFRESH_TOKEN_EXPIRY=183
    MENTOR_SECRET_CODE=1234
    ADMIN_SECRET_CODE=asdSADFfasdfargasdf

    # Kafka Topics Configuration
    KAFKA_TOPIC=kakfatopic
    NOTIFICATION_KAFKA_TOPIC=dev.notifications

    # Cloud Storage Configuration
    CLOUD_STORAGE=AWS
    GCP_PATH=gcp.json
    DEFAULT_GCP_BUCKET_NAME=mentoring-dev-storage
    GCP_PROJECT_ID=sl-dev-project
    AWS_ACCESS_KEY_ID=E5SDG6ASDFYHE546YE56Y
    AWS_SECRET_ACCESS_KEY=WSADFAAHFHSF45YHW4T
    AWS_BUCKET_REGION=ap-south-1
    AWS_BUCKET_ENDPOINT=s3.ap-south-1.amazonaws.com
    DEFAULT_AWS_BUCKET_NAME=mentoring-dev-storage
    AZURE_ACCOUNT_NAME=mentoring
    AZURE_ACCOUNT_KEY=W4SDSFGAH45HYW45
    DEFAULT_AZURE_CONTAINER_NAME=mentoring-images

    # Redis Configuration
    REDIS_HOST=redis://redis:6379

    # OCI Configuration
    OCI_ACCESS_KEY_ID=asdfhgs54tfawsdf
    OCI_SECRET_ACCESS_KEY=ah45gyh5df/5ygsdf=
    OCI_BUCKET_REGION=ap-hyderabad-1
    OCI_BUCKET_ENDPOINT=https://yseh456y.compat.objectstorage.ap-hyderabad-1.oraclecloud.com
    DEFAULT_OCI_BUCKET_NAME=dev-mentoring

    # Logging Configuration
    ERROR_LOG_LEVEL=silly
    DISABLE_LOG=false
    DEFAULT_ORGANISATION_CODE=defaultOrganization

    REFRESH_TOKEN_SECRET=as987d6f0a9s876df0897as6d
    APP_NAME=MentorED

    ```

4. Start MongoDB locally. See [Setting up MongoDB 4.1.4](settingup-mongodb.md) to learn more.

    <Admonition type="note">
    <p>This might vary based on your host operating system and the method used.</p>
    </Admonition>

5. Install the npm packages.

    ```
    ELEVATE/user/src$ npm install
    ```

6. Start the User server.

    ```
    ELEVATE/user/src$ npm start
    ```

## API Documentation 

https://elevate-apis.shikshalokam.org/user/api-doc

## Mentoring Service

https://github.com/ELEVATE-Project/mentoring.git

## Supporting Services

## Notifications Service

https://github.com/ELEVATE-Project/notification.git

## Scheduler Service

https://github.com/ELEVATE-Project/scheduler.git