import PartialExample from './_mentored.mdx';
import CodeBlock from '@theme/CodeBlock';

# Customizing the PWA

## Dependencies

| Requirement         | Description    |
|--------------|-----------|
| Ionic CLI|Version 7.1.1|
| Ionic Framework | <ul><li>@ionic/angular 6.7.5</li> <li>@angular-devkit/build-angular : 13.2.6 </li><li> @angular-devkit/schematics : 13.2.6 </li><li>@angular/cli : 13.2.6 </li><li> @ionic/angular-toolkit : 6.1.0 </li></ul>|
| Capacitor | <ul><li>Capacitor CLI : 5.5.1 </li><li>@capacitor/android : 5.5.1 </li><li>@capacitor/core : 5.5.1 </li><li>@capacitor/ios : 5.5.1 </li></ul>
| Utility | <ul><li>cordova-res : 0.15.4</li><li>native-run : 1.7.4 </li></ul>
| System | <ul><li>Node.js: v18.18.2 (/home/user/.nvm/versions/node/v18.18.2/bin/node)</li><li>npm: 10.2.0</li></ul>|

## Setting up the Command Line Interface (CLI)

1. Install the Ionic framework.
    ```
    npm install -g ionic
    ```

2. Install the Ionic framework.
    ```
    npm install -g @ionic/cli
    ```

3. Install the Capacitor Core.

    ```
    npm install @capacitor/core
    ```

4. Install the Capacitor runtime Client.

    ```
    npm install @capacitor/cli --save-dev 
    ```

## Setting up the Project

1. Clone the [repository](https://github.com/ELEVATE-Project/mentorED-Portal.git).

2. Checkout to the latest branch (**release-2.5.0**).

3. Create a file named **environment.ts** in the  `src/environments` folder and add the necessary variables.

4. Go to project folder and run `npm i`.

## Building the Application

1. To add the Capacitor plugin, run the following command:

    ```
    npx cap sync  

    ```

2. To run a development build, run the following command:

    ```
    ionic build

    ```

3. To perform an Ionic build and update any Capacitor plugins or dependencies, run the capacitor sync command.  

    ```
    ionic capacitor sync

    ```

4. Run the project on your local system using the following command:

    ```
    ionic capacitor sync

    ```

## Debugging the Application

1. Open Google Chrome and type the following command: 

    ```

    chrome://inspect

    ```

2. Select the application.

## Deploying the Application

To deploy the application, you need the following files:

* environment.ts
* server.js
* pm2.config.json

### Structure of environment.ts File

```jsx

    export const environment = {
        production: true/false,
        name: '<name>',
        staging: true/false,
        dev: true/false,
        baseUrl: '<base-url>',
        sqliteDBName: '<db-name>', (if you have)
        deepLinkUrl: '<deeplink-url>',
        privacyPolicyUrl: '<privacy-policy-url>',
        termsOfServiceUrl: '<term-of-service-url>'
    };

```

### Structure of pm2.config.json File

```json
{
    "apps": [
        {
            "name": "</APP_NAME>",
            "script": "server.js",
            "args": [],
            "instances": "1",
            "exec_mode": "cluster",
            "watch": false,
            "merge_logs": "cluster",
            "watch": false,
            "merge_logs": true,
            "env": {
                "NODE_ENV": "production",
                "PORT": <PORT_NO>,
            }
        }
    ]
}

```

### Structure of server.js File

```jsx

const express = require ('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7601;

app.use(express.static(path.join)(__dirname, 'www'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on ${Port}`);
});

```


