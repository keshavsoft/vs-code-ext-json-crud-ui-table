import * as vscode from 'vscode';

import showAllCommand from './ShowAll/start.js';
import withHeaderCommand from './WithHeader/start.js';

const registerAllCommands = (context) => {
    withHeaderFunc(context);
    showHtmlFunc(context);
};

const withHeaderFunc = (context) => {
    const commandToRegister = "extension.explorer.context.folder.ui.table.init.withHeader";

    const showAll = vscode.commands.registerCommand(commandToRegister, () => withHeaderCommand(context));

    context.subscriptions.push(showAll);
};

const showHtmlFunc = (context) => {
    const commandToRegister = "extension.showHtml";

    const showAll = vscode.commands.registerCommand(commandToRegister, (uri) => activateHtml(context, uri));

    context.subscriptions.push(showAll);
};

const activateHtml = (context, uri) => {
    const panel = vscode.window.createWebviewPanel(
        "showHtml",
        "Show Html",
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    panel.webview.html = `
<html>
<body>
    <button onclick="send('showAll')">ShowAll</button>
    <button onclick="send('showAllWithSerial')">ShowAllWithSerial</button>
    <button onclick="send('withHeader')">WithHeader</button>

    <script>
        const vscode = acquireVsCodeApi();

        function send(action){
            vscode.postMessage({ action });
        }
    </script>
</body>
</html>
`;

    panel.webview.onDidReceiveMessage(async (message) => {
        console.log("message.action : ", message.action);

        switch (message.action) {
            case "showAll":
                await showAllCommand(context);
                break;

            case "withHeader":
                await withHeaderCommand(context, uri);
                break;
        };
    });
};

export default registerAllCommands;