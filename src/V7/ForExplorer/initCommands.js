import * as vscode from 'vscode';

import withHeaderCommand from './WithHeader/start.js';
import readHtml from './ShowHtml/readHtml.js';

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
    const commandToRegister = "extension.ks.ui.showHtml";

    const showAll = vscode.commands.registerCommand(commandToRegister, (uri) => readHtml(context, uri));

    context.subscriptions.push(showAll);
};

export default registerAllCommands;