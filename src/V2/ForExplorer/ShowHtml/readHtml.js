import * as vscode from 'vscode';
import fs from 'fs';
import path from 'path';
// import withHeaderCommand from '../WithHeader/start.js';
import { withHeader } from "json-crud-ui-table";

const activateHtml = (context, uri) => {
    const panel = vscode.window.createWebviewPanel(
        "showHtml",
        "Show Html",
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    panel.webview.html = fs.readFileSync(
        path.join(import.meta.dirname, "ui", "index.html"),
        "utf8"
    );
    panel.webview.onDidReceiveMessage(async (message) => {
        switch (message.action) {
            case "showAll":
                await showAllCommand(context);
                break;

            case "withHeader":
                const userRootFolder =
                    vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

                await withHeader({
                    showLog: true,
                    isAnnounce: true,
                    toPath: uri.fsPath,
                    tableName: message.tableName,
                    configPath: path.join(userRootFolder, "Config", "Schemas")
                });

                break;
        }
    });
};

export default activateHtml;