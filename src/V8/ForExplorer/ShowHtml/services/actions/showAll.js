import { tableComp } from "json-crud-ui-comp";
import { executeGenerationTask } from "../generatorService.js";

export async function showAll({ panel, tableName, toPath, schemasPath }) {
    await executeGenerationTask({
        panel,
        actionLabel: "Show All (Complete CRUD)",
        tableName,
        toPath,
        configPath: schemasPath,
        generateFunc: tableComp
    });
}
