import * as vscode from 'vscode';

import readHtml from './readHtml.js';

const registerAllCommands = (context) => {
    showHtmlFunc(context);
};

const showHtmlFunc = (context) => {
    const commandToRegister = "extension.ks.ui.showHtml";

    const showAll = vscode.commands.registerCommand(commandToRegister, (uri) => readHtml(context, uri));

    context.subscriptions.push(showAll);
};

export default registerAllCommands;
