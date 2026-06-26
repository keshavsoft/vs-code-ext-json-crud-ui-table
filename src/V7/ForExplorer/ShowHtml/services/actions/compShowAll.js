import { showAll } from "json-crud-ui-comp-table";
import { executeGenerationTask } from "../generatorService.js";

export async function generateCompShowAll({ panel, tableName, toPath, schemasPath }) {
    await executeGenerationTask({
        panel,
        actionLabel: "Show All Components",
        tableName,
        toPath,
        configPath: schemasPath,
        generateFunc: showAll
    });
}
