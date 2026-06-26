import { withHeader } from "json-crud-ui-table";
import { executeGenerationTask } from "../generatorService.js";

export async function generateWithHeader({ panel, tableName, toPath, schemasPath }) {
    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName,
        toPath,
        configPath: schemasPath,
        generateFunc: withHeader
    });
}
