import * as vscode from 'vscode';

import showAllCommand from './ShowAll/start.js';

const registerAllCommands = (context) => {
    const commandToRegister = "extension.explorer.context.folder.ui.table.init.showAll";

    const showAll = vscode.commands.registerCommand(commandToRegister, showAllCommand(context));

    context.subscriptions.push(showAll);
};

export default registerAllCommands;