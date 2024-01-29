Run `npm start` to run the server, hosted at localhost:8080

You'll get an `upgrade required` message, meaning your client has to request a websocket upgrade.

Confirm that the wsUri in `client.html` matches localhost:8080. Then copy the file path, and paste the file path into browser of your choice to run it locally. 

Et voilà! Play around with having multiple Chrome profiles open, as well as Chrome Incognito tabs (cmd+shift+N) to send messages!