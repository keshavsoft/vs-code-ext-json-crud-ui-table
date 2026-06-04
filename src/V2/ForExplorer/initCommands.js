import * as vscode from 'vscode';

import showAllCommand from './ShowAll/start.js';
import withHeaderCommand from './WithHeader/start.js';

const registerAllCommands = (context) => {
    const commandToRegister = "extension.explorer.context.folder.ui.table.init.showAll";

    const showAll = vscode.commands.registerCommand(commandToRegister, showAllCommand(context));

    context.subscriptions.push(showAll);

    withHeaderFunc(context);
};

const withHeaderFunc = (context) => {
    const commandToRegister = "extension.explorer.context.folder.ui.table.init.withHeader";

    const showAll = vscode.commands.registerCommand(commandToRegister, withHeaderCommand(context));

    context.subscriptions.push(showAll);
};

export default registerAllCommands;