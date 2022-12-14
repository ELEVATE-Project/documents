# Setting up the BigBlueButton Service

## Prerequisites

>:::info
>To learn more, see [BigBlueButton Installation Guide](https://docs.bigbluebutton.org/2.4/install.html).

## Installing the BigBlueButton Service

1. Install BigBlueButton 2.4 using the hostname ```prod.mentoring.shikshalokam.org``` and email address (for Let’s Encrypt) ```notice@example.com```. 

    >:::note
    >This command installs (or upgrades if it's run later) the latest version of BigBlueButton 2.4 using -v bionic-240. It also installs the API demos (-a) and a firewall (-w).

    ```
    wget -qO- https://ubuntu.bigbluebutton.org/bbb-install.sh | bash -s -- -v bionic-240 -s prod.mentoring.shikshalokam.org -e notice@example.com  -a -w
    ```

2. Check the status of your server.

    ``` 
    sudo bbb-conf --check
    ```

    >:::note
    >An output that followed ```Potential problems``` may be due to configuration or installation errors. You will receive recommendations to resolve the issue.

3. To check that all the BigBlueButton processes have started and are running:

    ``` 
    sudo bbb-conf --status
    ```
 
4. To get the secret key:

    ``` 
    sudo bbb-conf --secret
    ``` 
5. To restart the BigBlueButton Server:

    ```
    sudo bbb-conf --restart
    ```
6. To delete the demo meeting:

    ``` 
    sudo apt-get purge bbb-demo
    ```

>:::info
>* To learn more, see [BigBlueButton Installation Guide](https://docs.bigbluebutton.org/2.4/install.html).
>* To set up the auto deletion of the recording’s metadata after converting the raw recording to mp4 file and uploading to the cloud storage, see [ELEVATE-Project on GitHub](https://github.com/ELEVATE-Project/elevate-utils/tree/master/BBB-Recordings).

