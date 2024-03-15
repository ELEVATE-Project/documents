import Admonition from '@theme/Admonition';

# Setting up MongoDB 4.1.4

1. Download the MongoDB 4.1.4 .tgz file to any directory using the following command:

	```
	$ wget -c "https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.1.4.tgz"
	```

2. Extract the contents of the file using the following command:

	```
	$ tar -zxvf mongodb-linux-x86_64-4.1.4.tgz
	```

3. Create an executable file named run_mongod and add the following content:

    ```
	#!/bin/bash
	/mongodb-linux-x86_64-4.1.4/bin/mongod --bind_ip 127.0.0.1,10.0.145.99
    ```

    <Admonition type="note">
    <ul>
    <li>In the command, specify the path to <b>mongod</b> executable in the extracted content.</li>
    <li>The second bind_ip (10.0.145.99) is the server's bind IP address, which is typically set in <b>mongod.conf</b> for the newer versions of MongoDB.</li>
    </ul>
    </Admonition>

4. To make the file executable, run the following command:

	```
	$ chmod 755 run_mongod
	```

5. To run MongoDB as a systemctl service, create a Unit file using the following command:

	```
	$ nano mongo-4.1.4.service
	```

6. Copy the following configurations into the mongo-4.1.4.service file:

    ```
	[Unit]
	Description=Mongo 4.1.4
	[Install]
	WantedBy=multi-user.target
	[Service]
	Type=simple
	ExecStart=/mongodb-linux-x86_64-4.1.4/bin/run_mongod
	WorkingDirectory=/mongodb-linux-x86_64-4.1.4/bin
	Restart=always
	RestartSec=5
	StandardOutput=syslog
	StandardError=syslog
	SyslogIdentifier=%n
    ```

    <Admonition type="note">
	<ul>
    <li>The <b>ExecStart</b> parameter should be set to the absolute path of the <b>mongod</b> executable file.</li>
	<li>The <b>WorkingDirectory</b> parameter should be set to the directory into which you have extracted the <b>mongod</b> executable file.</li>
	</ul>
    </Admonition>

7. Move the Unit file to ```/etc/systemd/system``` using the following command:

	```
	$ sudo mv mongo-4.1.4.service /etc/systemd/system
	```

8. To create the database directory with correct access rights for MongoDB, run the following commands from home directory:

	```
	$ sudo mkdir -p /data/db/
	$ sudo chown `id -u` /data/db
	```
 
9. Run the following commands in sequence to reload the systemd daemon, enable the MongoDB service, and start it:

	```
	$ sudo systemctl daemon-reload
	$ sudo systemctl enable mongo-4.1.4.service
	$ sudo systemctl start mongo-4.1.4.service
	$ sudo systemctl status mongo-4.1.4.service
	```
 
10. To create a database base dump, run the following command from the bin folder of extracted directory:

	```
	/mongodb-linux-x86_64-4.1.4/bin$ ./mongodump --out /output/path/here
	```

11. To restore the database from a dump, run the following command:

	```
	/mongodb-linux-x86_64-4.1.4/bin$ ./mongorestore --dir /path/to/dump/here
	```