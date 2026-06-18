// src/V3/AddEndpoint/utils/context.js
import path from 'path';

export function resolveContext(uri) {
    const appJsPath = uri.fsPath;
    const targetPath = path.dirname(appJsPath);
    const rightClickPath = uri.fsPath;

    return {
        targetPath,
        appJsPath,
        rightClickPath
    };
};