import { simple } from "json-crud-ui-comp-table";
import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, schemasPath }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "Simple Show All Component",
        tableName,
        toPath,
        configPath: schemasPath,
        generateFunc: simple
    });
};

export default startFunc;