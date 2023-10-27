import PartialExample from './_mentored.mdx';
import Admonition from '@theme/Admonition';

# Customizing the Mentor Mobile Application

The <PartialExample mentored /> mobile application is developed using the Ionic framework along with the Capacitor runtime, which makes it easy to run applications across mobile and web platforms.  

## Key Components in the Development Environment 

- Ionic-Android Build Setup
- Command Line Interface (<b>CLI</b>) Setup
- Ionic Project Setup
- Production Binary: <b>Build apk </b>
- Test Binary: <b>Debug apk</b>

## Dependencies

| Requirement         | Description    |
|--------------|-----------|
| Ionic CLI |Version 7.1.1 (/usr/local/lib/node_modules/@ionic/cli)|
| Ionic Framework | <ul><li>@ionic/angular 6.7.5</li> <li>@angular-devkit/build-angular : 13.2.6 </li><li> @angular-devkit/schematics : 13.2.6 </li><li>@angular/cli : 13.2.6 </li><li> @ionic/angular-toolkit : 6.1.0 </li></ul> |
| Capacitor | <ul><li>Capacitor CLI : 5.4.1 </li><li>@capacitor/android : 5.4.1 </li><li>@capacitor/core : 5.4.1 </li><li>@capacitor/ios : 5.4.1 </li></ul>
| Utility | <ul><li>cordova-res : 0.15.4</li><li>native-run : 1.7.3 </li></ul>
| System | <ul><li>Android SDK Build-Tools: 34</li><li>Android SDK Platform-Tools: 34.0.4</li><li>Android SDK Command-Line Tools: Latest</li><li>Android Emulator: 32.1.5</li><li>Node.js: v18.18.2 (/home/user/.nvm/versions/node/v18.18.2/bin/node)</li><li>npm: 10.2.0 </li><li>OS: Linux 5.15</li></ul>

## Ionic-Android Build Setup

1. Install Java. 

    <Admonition type="tip">  
    <p>For detailed instructions, search for <i>Java downloads</i> and go to the JDK 17 section in <a href="https://www.oracle.com">Oracle Cloud applications and Cloud Platforms</a>.</p>
    </Admonition>

2. Install Gradle. 

    <Admonition type="tip">  
    <p>For detailed instructions, see <a href="https://gradle.org">Install Gradle</a>.</p>
    </Admonition>

3. Install Android Studio. 

    <Admonition type="tip">  
    <p>For detailed instructions, see <a href="https://developer.android.com">Android Studio</a>.</p>
    </Admonition>

4. To install Android SDK, do as follows:

    1. Open Android Studio. 
    2. Go to **Settings** > Select **Appearance and Behavior** > Select **System Settings** > Select **Android SDK**.
    3. Install the appropriate Android SDK platform package.

5. Add environment variables in ~/.bashrc or ~/.bash_profile as follows:

    ```
     export ANDROID_SDK_ROOT=path_to_sdk
     
     export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin

     export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

    ```

<Admonition type="tip">  
<p>For detailed information, search for <i>Android Development</i> in <a href="https://ionicframework.com">Ionic Framework</a>.</p>
</Admonition>

## Setting up the Command Line Interface (CLI)

1. Install the Ionic framework.
    ```
    npm install -g ionic
    ```
2. Install the Capacitor Core.

    ```
    npm install @capacitor/core
    ```
3. Install the Capacitor runtime Client.

    ```
    npm install @capacitor/cli --save-dev 
    ```
4. Initialize the Capacitor runtime.

    ```
    npx cap init
    ```

## Setting up the Project

1. Clone the [repository](https://github.com/ELEVATE-Project/mentoring-mobile-app.git).
2. Create a file named **environment.ts** in the  `src/environments` folder and add the necessary variables.
3. Go to project folder and run `npm i`.

## Building the APK

1. To check for attached devices, open a command-prompt and type the following command:  

    ```
    adb devices

    ```    
2. After making sure that you have attached an Android device, do any one of the following actions:

    * To run a development build, run the following command:

        ```
        ionic build

        ```
    
    * To run a production build, run the following command:

        ```
        ionic build --prod

        ```

3. To add the Capacitor plugin, run the following command:

    ```
    npx cap sync  

    ```

4. To perform an Ionic build and update any Capacitor plugins or dependencies, run the capacitor sync command.  

    ```
    ionic capacitor sync

    ```

5. Do one of the following actions:

    * To generate a development build APK and copy the web assets to the specified folder, run the following command:

        ```
        ionic capacitor build android

        ```

    * To generate a production build APK and copy the web assets to the specified folder, run the following command:

        ```
        ionic capacitor build android --prod
        
        ```

    You can find binary file (APK) at the following location: 

    ```
    project_folder/platforms/android/app/build/outputs/apk/debug/apk_name.apk

    ```

7. Run the APK in Android Emulator using the following command:

    ```
    ionic capacitor run android    

    ```

## Debugging the APK

1. Open Google Chrome and type the following command: 

    ```

    chrome://inspect

    ```

2. Select the application.