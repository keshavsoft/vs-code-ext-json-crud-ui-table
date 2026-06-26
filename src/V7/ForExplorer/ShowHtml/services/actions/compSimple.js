import { fromComponents } from "json-crud-ui-comp";
import { executeGenerationTask } from "../generatorService.js";

export async function generateCompSimple({ panel, tableName, toPath, schemasPath }) {
    await executeGenerationTask({
        panel,
        actionLabel: "Simple Show All Component",
        tableName,
        toPath,
        configPath: schemasPath,
        generateFunc: fromComponents
    });
}
