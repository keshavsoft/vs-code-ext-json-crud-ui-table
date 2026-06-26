import { getSchemaFiles } from "../schemaService.js";

export function loadSchemas({ panel, schemasPath }) {
    panel.webview.postMessage({
        type: "schemas",
        schemas: getSchemaFiles(schemasPath)
    });
}
