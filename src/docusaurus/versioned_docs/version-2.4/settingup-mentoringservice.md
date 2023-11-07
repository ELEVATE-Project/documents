import PartialExample from './_mentored.mdx';
import Version from './_version.mdx';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';

# Setting up the Mentor Service

You can set up the <PartialExample mentored /> Service on a local system in one of the following ways:

* Using a [Docker Image](#using-a-docker-image)
* As a [Docker-Compose File (Easiest)](#dockcompose)
* As a [Dockerized service with local dependencies (Intermediate)](#docklocal)
* As a [Local Service with local dependencies (Hardest)](#localservice)

## Using a Docker Image

**Objective**: Adding the service to your cloud environment by running the docker images.

**Prerequisite**: Docker is installed and is running.

<Admonition type="info">
<p>See the <a href="http://www.docker.io">Get Started section in Docker</a> for installation instructions.</p>
</Admonition>

1. Pull the docker image:

    <CodeBlock language="jsx">
    docker pull shikshalokamqa/elevate-mentoring:version
    </CodeBlock>
    
    For example:

    <CodeBlock language="jsx">
    docker pull shikshalokamqa/elevate-mentoring:version:<Version version />
    </CodeBlock>

2. Run the docker image:

    <CodeBlock language="jsx">
    docker run shikshalokamqa/elevate-mentoring:version
    </CodeBlock>

    To run the docker image with port number:

    <CodeBlock language="jsx">
    docker run -p 3000:3001 shikshalokamqa/elevate-mentoring:version
    </CodeBlock>

    You can pass the .env file as argument to the image.

    For example:

    <CodeBlock language="jsx">
    docker run --env-file="path of the env file" shikshalokamqa/elevate-mentoring:<Version version />
    </CodeBlock>

    <Admonition type="info">
    <p>See the <a href="https://github.com/ELEVATE-Project/mentoring/blob/master/src/.env.sample">sample env</a> for installation instructions.</p>
    </Admonition>

## Docker-Compose
<a name="dockcompose"></a>

**Objective**: Run all services at the same time with a common **Docker-Compose** file.

<Admonition type="caution">
<p>Do not use docker-compose in production.</p>
</Admonition>

To run all services using a docker-compose file:

1.  Install **Docker** and **Docker-Compose**.
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

    <Admonition type="note">
    <p>It is not always necessary to run <b>down</b> command. Existing containers and networks can be stopped gracefully by using <b>Ctrl + C</b> key combination.</p>
    </Admonition>

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

2. Find **host.docker.internal** IP address and use it as the bind IP. See [Setting up MongoDB 4.1.4](settingup-mongodb.md) to learn more.

    <Admonition type="note">
    <p>Steps to find <b>host.docker.internal</b> IP address is operating system specific. Refer <a href="https://stackoverflow.com/questions/22944631/how-to-get-the-ip-address-of-the-docker-host-from-inside-a-docker-container">this Stack Overflow discussion</a> for more information.</p>
    </Admonition>

3. Build the docker image.
    ```
    /ELEVATE/mentoring$ docker build -t elevate/mentoring:1.0 .
    ```
4. Run the docker container.

    - For Mac and Windows with docker v18.03+:

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

2. Set the bind IP using the steps given in [Setting up MongoDB 4.1.4](settingup-mongodb.md). For more information, search for *Configure Remote Access for MongoDB on Ubuntu 20.04* in [DigitalOcean Community](https://www.digitalocean.com/community).

    <Admonition type="note">
    <p>Instructions might differ based on MongoDB version and operating system.</p>
    </Admonition>

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

    - [Nodejs](https://nodejs.org) (Install Nodejs from the Download section.)

    - [MongoDB](settingup-mongodb.md)

2. Clone the **Mentoring service** repository.

    ```
    git clone https://github.com/ELEVATE-Project/mentoring.git
    ```

3. Add **.env** file to the project directory.

    Create a **.env** file in **src** directory of the project and copy the following environment variables into the file:

    ```
    # Mentoring Service Config

    # Application Configuration
    APPLICATION_PORT=3000
    APPLICATION_ENV=development
    APPLICATION_BASE_URL=/mentoring/
    ENABLE_LOG=true
    API_DOC_URL=/mentoring/api-doc
    INTERNAL_CACHE_EXP_TIME=86400

    # Database Configuration
    MONGODB_URL=mongodb://localhost:27017/elevate-mentoring

    # Access Tokens Configuration
    ACCESS_TOKEN_SECRET=sasadfdsdffas6a0asd9fs7asdfd6f0a9s86dfa9s08df
    INTERNAL_ACCESS_TOKEN=internal_access_token

    # Kafka Configuration
    KAFKA_URL=localhost:9092
    KAFKA_GROUP_ID=mentoring
    NOTIFICATION_KAFKA_TOPIC=develop.notifications
    KAFKA_MENTORING_TOPIC=mentoringtopic
    SESSION_KAFKA_TOPIC=session
    KAFKA_RECORDING_TOPIC=recordingtopic
    RATING_KAFKA_TOPIC=dev.rate

    # Cloud Storage Configuration
    CLOUD_STORAGE=AWS
    MENTOR_SESSION_RESCHEDULE_EMAIL_TEMPLATE=mentor_session_reschedule

    # GCP Configuration
    GCP_PATH=gcp.json
    DEFAULT_GCP_BUCKET_NAME=gcp-bucket-storage-name
    GCP_PROJECT_ID=project-id

    # AWS Configuration
    AWS_ACCESS_KEY_ID=aws-access-key-id
    AWS_SECRET_ACCESS_KEY=aws-secret-access-key
    AWS_BUCKET_REGION=ap-south-1
    AWS_BUCKET_ENDPOINT=s3.ap-south-1.amazonaws.com
    DEFAULT_AWS_BUCKET_NAME=aws-bucket-storage-name

    # Azure Configuration
    AZURE_ACCOUNT_NAME=account-name
    AZURE_ACCOUNT_KEY=azure-account-key
    DEFAULT_AZURE_CONTAINER_NAME=azure-container-storage-name

    # User Service Configuration
    USER_SERIVCE_HOST=http://localhost:3001
    USER_SERIVCE_BASE_URL=/user/

    # BigBlueButton Configuration
    BIG_BLUE_BUTTON_URL=https://dev.mentoring.org-domain.org
    BIB_BLUE_BUTTON_BASE_URL=/bigbluebutton/
    MEETING_END_CALLBACK_EVENTS=https%3A%2F%2Fdev.apis.org_domain.org%2Fmentoring%2Fv1%2Fsessions%2Fcompleted
    BIG_BLUE_BUTTON_SECRET_KEY=wsfsadfasdfr3tfg
    RECORDING_READY_CALLBACK_URL=http%3A%2F%2Flocalhost%3A3000%2F%3FmeetingID%3Dmeet123

    # Redis Configuration
    REDIS_HOST=redis://localhost:6379

    # Kafka Internal Communication
    CLEAR_INTERNAL_CACHE=mentoringInternal

    # Enable Email for Reported Issue Configuration
    ENABLE_EMAIL_FOR_REPORT_ISSUE=true

    # Support Email Configuration
    SUPPORT_EMAIL_ID=support@xyz.com,team@xyz.com

    # Email Template Code for Reported Issue Configuration
    REPORT_ISSUE_EMAIL_TEMPLATE_CODE=user_issue_reported

    # Enrollment Limit Configuration
    SESSION_MENTEE_LIMIT=5 or 25

    # BigBlueButton Session Configuration
    BIG_BLUE_BUTTON_SESSION_END_URL=https%3A%2F%2Fdev.mentoring.org-domain.org%2F

    # Disable BigBlueButton
    DEFAULT_MEETING_SERVICE=OFF

    # Additional Configuration
    SCHEDULER_SERVICE_ERROR_REPORTING_EMAIL_ID=report@scheduler.com
    SCHEDULER_SERVICE_URL=http://localhost:4000/jobs/scheduleJob
    ERROR_LOG_LEVEL=silly
    DISABLE_LOG=false
    DEFAULT_MEETING_SERVICE=BBB
    SESSION_EDIT_WINDOW_MINUTES=0
    SESSION_MENTEE_LIMIT=5
    MENTOR_SESSION_DELETE_EMAIL_TEMPLATE=mentor_session_delete
    ```

4. Start MongoDB locally. See [Setting up MongoDB 4.1.4](settingup-mongodb.md) to learn more.

    <Admonition type="note">
    <p>This might vary based on your host operating system and the method used.</p>
    </Admonition>

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

## Additional Resources

|To learn more| See the following links|
|--------------|-----------|
|API Documentation|https://elevate-apis.shikshalokam.org/mentoring/api-doc|
|Supporting Service: User Service|https://github.com/ELEVATE-Project/user.git|
|Supporting Service: Notifications Service|https://github.com/ELEVATE-Project/notification.git|
|Supporting Service: Scheduler Service|https://github.com/ELEVATE-Project/scheduler.git|
