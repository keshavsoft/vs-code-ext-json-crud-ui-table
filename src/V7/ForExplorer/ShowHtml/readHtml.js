import * as vscode from 'vscode';
import path from 'path';

import { withHeader, headerOnly } from "json-crud-ui-table";
import { tableComp, fromComponents } from "json-crud-ui-comp";
import { showAll } from "json-crud-ui-comp-table";

import { getSchemaFiles } from "./services/schemaService.js";
import { executeGenerationTask } from "./services/generatorService.js";
import { getHtmlWithScripts } from "./utils/htmlLoader.js";

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

        switch (message.action) {
            case "loadSchemas":
                panel.webview.postMessage({
                    type: "schemas",
                    schemas: getSchemaFiles(schemasPath)
                });
                break;

            case "showAll":
                await executeGenerationTask({
                    panel,
                    actionLabel: "Show All (Complete CRUD)",
                    tableName: message.tableName,
                    toPath: uri.fsPath,
                    configPath: schemasPath,
                    generateFunc: tableComp
                });
                break;

            case "withHeader":
                await executeGenerationTask({
                    panel,
                    actionLabel: "With Header",
                    tableName: message.tableName,
                    toPath: uri.fsPath,
                    configPath: schemasPath,
                    generateFunc: withHeader
                });
                break;

            case "headerOnly":
                await executeGenerationTask({
                    panel,
                    actionLabel: "Header Only",
                    tableName: message.tableName,
                    toPath: uri.fsPath,
                    configPath: schemasPath,
                    generateFunc: headerOnly
                });
                break;

            case "compShowAll":
                await executeGenerationTask({
                    panel,
                    actionLabel: "Show All Components",
                    tableName: message.tableName,
                    toPath: uri.fsPath,
                    configPath: schemasPath,
                    generateFunc: showAll
                });
                break;

            case "compSimple":
                await executeGenerationTask({
                    panel,
                    actionLabel: "Simple Show All Component",
                    tableName: message.tableName,
                    toPath: uri.fsPath,
                    configPath: schemasPath,
                    generateFunc: fromComponents
                });
                break;
        }
    });
};

export default activateHtml;
