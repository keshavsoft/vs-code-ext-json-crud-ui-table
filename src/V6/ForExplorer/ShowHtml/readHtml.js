import * as vscode from 'vscode';
import fs from 'fs';
import path from 'path';

import { withHeader, headerOnly } from "json-crud-ui-table";

import { tableComp } from "json-crud-ui-comp";
import { showAll } from "json-crud-ui-comp-table";

const getSchemaFiles = (schemasPath) => {
    if (schemasPath === undefined || fs.existsSync(schemasPath) === false) {
        return [];
    };

    return fs.readdirSync(schemasPath, { withFileTypes: true })
        .filter((item) => item.isFile() && item.name.endsWith(".json"))
        .sort((first, second) => first.name.localeCompare(second.name))
        .map((item) => {
            const filePath = path.join(schemasPath, item.name);
            const fallbackTableName = path.basename(item.name, ".json");

            try {
                const schema = JSON.parse(fs.readFileSync(filePath, "utf8"));

                return {
                    name: item.name,
                    tableName: schema.tableName || fallbackTableName
                };
            } catch {
                return {
                    name: item.name,
                    tableName: fallbackTableName
                };
            };
        });
};

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
        const schemasPath = userRootFolder === undefined
            ? undefined
            : path.join(userRootFolder, "Config", "Schemas");

        switch (message.action) {
            case "loadSchemas":
                panel.webview.postMessage({
                    type: "schemas",
                    schemas: getSchemaFiles(schemasPath)
                });
                break;

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
                    configPath: schemasPath
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
                    configPath: schemasPath
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

            case "compShowAll":

                panel.webview.postMessage({
                    type: "status",
                    text: "⏳ Generating CRUD..."
                });

                await showAll({
                    showLog: true,
                    isAnnounce: true,
                    toPath: uri.fsPath,
                    tableName: message.tableName,
                    configPath: schemasPath
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
