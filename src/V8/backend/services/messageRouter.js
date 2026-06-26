import { loadSchemas } from "./actions/loadSchemas.js";
import { showAll } from "./actions/showAll.js";
import { generateWithHeader } from "./actions/withHeader.js";
import { generateHeaderOnly } from "./actions/headerOnly.js";
import { generateCompShowAll } from "./actions/compShowAll.js";
import { generateCompSimple } from "./actions/compSimple.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath }) {
    switch (message.action) {
        case "loadSchemas":
            loadSchemas({ panel, schemasPath });
            break;

        case "showAll":
            await showAll({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "withHeader":
            await generateWithHeader({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "headerOnly":
            await generateHeaderOnly({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "compShowAll":
            await generateCompShowAll({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "compSimple":
            await generateCompSimple({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;
    }
}
