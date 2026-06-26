import * as vscode from 'vscode';
import path from 'path';

import { getHtmlWithScripts } from "./utils/htmlLoader.js";
import { handleWebviewMessage } from "./services/messageRouter.js";

const activateHtml = (context, uri) => {
    const panel = vscode.window.createWebviewPanel(
        "showHtml",
        "Show Html",
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    panel.webview.html = getHtmlWithScripts();
    
    panel.webview.onDidReceiveMessage(async (message) => {
        const userRootFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
        const schemasPath = userRootFolder ? path.join(userRootFolder, "Config", "Schemas") : undefined;

        await handleWebviewMessage({
            message,
            panel,
            toPath: uri.fsPath,
            schemasPath
        });
    });
};

export default activateHtml;
