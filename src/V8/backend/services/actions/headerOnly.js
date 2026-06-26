import { headerOnly } from "json-crud-ui-table";
import { executeGenerationTask } from "../generatorService.js";

export async function generateHeaderOnly({ panel, tableName, toPath, schemasPath }) {
    await executeGenerationTask({
        panel,
        actionLabel: "Header Only",
        tableName,
        toPath,
        configPath: schemasPath,
        generateFunc: headerOnly
    });
}
