# Running the websocket server
Run `npm install` to install dependencies

Run `npm start` to run the server, hosted at localhost:8080

You'll get an "Upgrade Required` message, meaning your client has to request a websocket upgrade.

# Running the websocket interface
Confirm that the server address (wsUri) in client.html matches localhost:8080. Then copy the file path, and paste the file path into browser of your choice to run it locally. For me the file path is `/Users/trishapan/Documents/code/websocket-server/client.html`

Et voilà! Play around with having multiple Chrome profiles open, as well as Chrome Incognito tabs (cmd+shift+N) to send messages!

<!-- Notes I used to `git init` because I forgot how to do that: https://pow123.github.io/Getting-Started-Git/03-create/ -->
<!-- Notes I used to configure npm for my server: https://www.freecodecamp.org/news/full-stack-project-tutorial-create-a-notes-app-using-react-and-node-js/#part-2-create-the-backend -->
