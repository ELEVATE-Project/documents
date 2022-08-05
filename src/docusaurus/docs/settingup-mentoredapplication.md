# Customizing the MentorED Mobile Application

This readme file summarizes the system requirements and dependencies for building and customizing the <b>MentorED Mobile Application</b>, which is one of the key components of the <b>MentorED Platform</b>.

The mobile application is written using the Ionic framework along with the Capacitor runtime, which makes it easy to run apps across mobile and Web platforms.  

## Key Components in the Development Environment 

- Ionic-Android Build Setup
- Command Line Interface (<b>CLI</b>) Setup
- Ionic Project Setup
- Production Binary: <b>Build apk </b>
- Test Binary: <b>Debug apk</b>

## Dependencies

| Requirement         | Description    |
|--------------|-----------|
| Ionic CLI | Version 6.19.1 (/usr/local/lib/node_modules/@ionic/cli) |
| Ionic Framework | <ul><li>@ionic/angular 6.1.7 </li> <li>@angular-devkit/build-angular : 13.2.6 </li><li> @angular-devkit/schematics : 13.2.6 </li><li>@angular/cli : 13.2.6 </li><li> @ionic/angular-toolkit : 6.1.0 </li></ul> |
| Capacitor | <ul><li>Capacitor CLI : 3.5.1 </li><li>@capacitor/android : 3.5.0 </li><li>@capacitor/core : 3.5.1 </li><li>@capacitor/ios : 3.5.0</li></ul>
| Cordova | <ul><li>Cordova CLI : 11.0.0</li><li>Cordova Platforms : none</li><li>Cordova Plugins : no whitelisted plugins (0 plugins total)</li></ul>
| Utility | <ul><li>cordova-res : 0.15.4</li><li>native-run : 1.6.0</li></ul>
| System | <ul><li>Android SDK Tools: 26.1.1 (/home/afnan/Android/Sdk) </li><li>NodeJS: v14.19.0 (/usr/local/bin/node) </li><li>npm: 6.14.16 </li><li>OS: Linux 5.13</li></ul>

## Ionic-Android Build Setup

1. Install Java 

   :::tip
   > For detailed instructions, see https://www.oracle.com/java/technologies/downloads/#java8

2. Install Gradle 

   :::tip
   > For detailed instructions, see https://gradle.org/install/

3. Install Android Studio 

   :::tip
   > For detailed instructions, see https://developer.android.com/studio 

4. Install Android SDK

    - Open Android studio 
    - Go to **Settings** > **Appearance and Behavior** > **System Settings** > **Android SDK**.
    - Install the appropriate Android SDK platform package.

5. Add environment variables in ~/.bashrc or ~/.bash_profile as follows:

    ```
     export ANDROID_SDK_ROOT=path_to_sdk export 

     PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin export 

     PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

    ```

> :::tip
> For detailed information, see: https://ionicframework.com/docs/installation/android

## Setting up the Command Line Interface (CLI)

```
 npm install -g ionic

 npm install @capacitor/core

 npm install @capacitor/cli --save-dev 

 npx cap init

```


## Setting up the Project

1. Use Git to clone the [repository](https://github.com/ELEVATE-Prjoect/mentoring-mobile-app.git)
2. Add environment files inside `src/environments`
3. Go to project folder and run `npm i`

## Build the APK

To build the apk file:

1. Open a command-prompt, and type the following command to check attached devices:  

    ```
    adb devices

    ```    
2. After making sure that you have attached an Android device, run the build command:

    ```
    ionic build

    ```

3. Run the capacitor sync command to perform an Ionic build and update any Capacitor or Cordova plugins or dependencies   

    ```
    ionic capacitor sync

    ```

4. Run the following command to build the app and copy the web assets to the specified folder.

    ```
    ionic capacitor build android

    ```

5. Run the following command to generate a production build of the Android application.

    ```
    ionic capacitor build android --prod
    
    ```

    You can find binary file (apk) at the following location: 

    ```
    project_folder/platforms/android/app/build/outputs/apk/debug/apk_name.apk

    ```

6. Open Google Chrome and type the following command: 

    ```

    chrome://inspect

    ```

7. Select the app.