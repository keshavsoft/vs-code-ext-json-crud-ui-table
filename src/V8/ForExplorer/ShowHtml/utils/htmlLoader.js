import fs from 'fs';
import path from 'path';

export function getHtmlWithScripts() {
    const uiDir = path.join(import.meta.dirname, "..", "ui");
    let html = fs.readFileSync(path.join(uiDir, "index.html"), "utf8");

    const jsFiles = [
        "vscodeApi.js",
        "schemaManager.js",
        "actionDispatcher.js",
        "uiNotifier.js",
        "main.js"
    ];

    const scriptTags = jsFiles.map(file => {
        const content = fs.readFileSync(path.join(uiDir, "js", file), "utf8");
        return `<script>\n${content}\n</script>`;
    }).join("\n");

    if (html.includes("<!-- SCRIPTS -->")) {
        html = html.replace("<!-- SCRIPTS -->", scriptTags);
    } else {
        html = html.replace("</body>", `${scriptTags}\n</body>`);
    }

    return html;
}
