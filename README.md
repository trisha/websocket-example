# Context
I created this proof-of-concept (POC) because all the examples I could find online weren't working. You need both a websocket-toggled client *and* a websocket-enabled server in order for it to work, and the sample websocket server that I was trying to use (https://echo.websocket.org/) was offline at the time.

# Running the websocket server
Run `npm install` to install dependencies

Run `npm start` to run the server (`index.js`), hosted at localhost:8080

You'll see an "Upgrade Required` message if you go to localhost:8080 in your browser, meaning your client has to request a websocket upgrade.

# Running the websocket interface
Confirm that the server address (wsUri) in `client.html` matches localhost:8080. Then copy the file path, and paste the file path into browser of your choice to run it locally. For me the file path is `/Users/trishapan/Documents/code/websocket-server/client.html`

Et voilà! Play around with having multiple Chrome profiles open, as well as Chrome Incognito tabs (cmd+shift+N) to send messages!

P.S. You will have to refresh your HTML file/browser ever time you make a change to the client OR the server, because the server automatically resets due to nodemon watching for changes.

<!-- Useful git notes: https://pow123.github.io/Getting-Started-Git/03-create/ -->
<!-- Use npm config notes: https://www.freecodecamp.org/news/full-stack-project-tutorial-create-a-notes-app-using-react-and-node-js/#part-2-create-the-backend -->

Client preview:
![screenshot of 3 browsers connected to the same socket](/client_preview.png)
