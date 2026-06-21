import * as vscode from 'vscode';

import { showAll } from "json-crud-ui-table";

export async function runFeatureOrchestration({ context }) {
    const inContext = context;
    const endpoint = await getEndpoint();

    await showAll({
        showLog: true,
        isAnnounce: true,
        folderName: endpoint,
        toPath: inContext.rightClickPath
    });

    return { endpoint };
}
// update only this
async function getEndpoint() {
    const value = await vscode.window.showInputBox({ prompt: 'Enter endpoint name (e.g. users)' });
    if (!value) return null;

    const clean = value.trim().replace(/[^a-zA-Z0-9-_]/g, '');
    if (!clean) return null;

    return clean;
};
