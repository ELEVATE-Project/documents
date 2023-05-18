import Admonition from '@theme/Admonition';

# Setting up the BigBlueButton Service

1. Before installing, ensure that you meet all the [prerequisites](https://docs.bigbluebutton.org/administration/install) required to install BigBlueButton.

2. Install [BigBlueButton version 2.6](https://docs.bigbluebutton.org/administration/install) using the hostname and email address, which you want to use. 

3. After completing the installation, check the status of your server using the following command:

    ``` 
    sudo bbb-conf --check
    ```

    <Admonition type="note">
    <p>If you encounter any error which is flagged as <i>Potential problems</i>, check for installation or configuration errors on your server.</p>
    </Admonition>

4. Start the service using the following command:

    ```
    sudo bbb-conf --start
    ```

5. Check if the BigBlueButton service is running using the following command:

    ``` 
    sudo bbb-conf --status
    ``` 
6. Restart the BigBlueButton server using the following command:

    ```
    sudo bbb-conf --restart
    ```
## Obtaining the Secret Key

If you wish to generate a new secret key, use the following command:

``` 
sudo bbb-conf --secret
```
## Deleting the Demo Meeting

If you want to delete the demo meeting, use the following command:

``` 
sudo apt-get purge bbb-demo
```

<Admonition type="info">
<ul>
<li>To learn more, see <a href="https://docs.bigbluebutton.org/administration/install">BigBlueButton Installation Guide</a>.</li>
<li>To automatically delete the metadata of recordings which are converted to mp4 format and uploaded on the cloud storage, see <a href="https://github.com/ELEVATE-Project/elevate-utils/tree/master/BBB-Recordings">ELEVATE-Project on GitHub</a>.</li>
</ul>
</Admonition>