# Setting up the BigBlueButton Service

1. Before installing, ensure that you meet all the [prerequisites](https://docs.bigbluebutton.org/2.4/install.html) required for you to install BigBlueButton.

2. Install [BigBlueButton version 2.4](https://docs.bigbluebutton.org/2.4/install.html) using the hostname ```prod.mentoring.shikshalokam.org``` and email address (for Let’s Encrypt) ```notice@example.com```. 

3. After the ```bbb-install.sh``` script finishes, check the status of your server.

    ``` 
    sudo bbb-conf --check
    ```

    >:::note
    >An output that followed ```Potential problems``` may be due to configuration or installation errors. You will receive recommendations to resolve the issue.

4. To start the service:

    ```
    sudo bbb-conf --start
    ```

5. To check that all the BigBlueButton processes have started and are running:

    ``` 
    sudo bbb-conf --status
    ```
    
6. To get the secret key:

    ``` 
    sudo bbb-conf --secret
    ``` 
7. To restart the BigBlueButton Server:

    ```
    sudo bbb-conf --restart
    ```
8. To delete the demo meeting:

    ``` 
    sudo apt-get purge bbb-demo
    ```

>:::info
>* To learn more, see [BigBlueButton Installation Guide](https://docs.bigbluebutton.org/2.4/install.html).
>* To set up the auto deletion of the recording’s metadata after converting the raw recording to mp4 file and uploading to the cloud storage, see [ELEVATE-Project on GitHub](https://github.com/ELEVATE-Project/elevate-utils/tree/master/BBB-Recordings).

