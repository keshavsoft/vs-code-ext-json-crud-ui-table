import * as vscode from 'vscode';
import fs from 'fs';
import path from 'path';

import { withHeader, headerOnly } from "json-crud-ui-table";

import { tableComp } from "json-crud-ui-comp";

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
        const userRootFolder =
            vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

        switch (message.action) {
            case "showAll":

                panel.webview.postMessage({
                    type: "status",
                    text: "⏳ Generating CRUD..."
                });

                await tableComp({
                    showLog: true,
                    isAnnounce: true,
                    toPath: uri.fsPath,
                    tableName: message.tableName,
                    configPath: path.join(userRootFolder, "Config", "Schemas")
                });

                panel.webview.postMessage({
                    type: "complete",
                    html: `
        <div class="font-semibold mb-2">
            ✅ Generation Complete
        </div>

        <div><b>Action:</b> With Header</div>
        <div><b>Table:</b> ${message.tableName}</div>
        <div><b>Output:</b> ${uri.fsPath}</div>
    `
                });

                break;

            case "withHeader":

                panel.webview.postMessage({
                    type: "status",
                    text: "⏳ Generating CRUD..."
                });

                await withHeader({
                    showLog: true,
                    isAnnounce: true,
                    toPath: uri.fsPath,
                    tableName: message.tableName,
                    configPath: path.join(userRootFolder, "Config", "Schemas")
                });

                panel.webview.postMessage({
                    type: "complete",
                    html: `
        <div class="font-semibold mb-2">
            ✅ Generation Complete
        </div>

        <div><b>Action:</b> With Header</div>
        <div><b>Table:</b> ${message.tableName}</div>
        <div><b>Output:</b> ${uri.fsPath}</div>
    `
                });

                break;

            case "headerOnly":

                panel.webview.postMessage({
                    type: "status",
                    text: "⏳ Generating CRUD..."
                });

                await headerOnly({
                    showLog: true,
                    isAnnounce: true,
                    toPath: uri.fsPath
                });

                panel.webview.postMessage({
                    type: "complete",
                    html: `
        <div class="font-semibold mb-2">
            ✅ Generation Complete
        </div>

        <div><b>Action:</b> With Header</div>
        <div><b>Table:</b> ${message.tableName}</div>
        <div><b>Output:</b> ${uri.fsPath}</div>
    `
                });

                break;

        };
    });
};

export default activateHtml;