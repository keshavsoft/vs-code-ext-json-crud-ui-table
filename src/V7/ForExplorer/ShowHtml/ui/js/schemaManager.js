let schemaFiles = [];

function getSelectedSchema() {
    const schemaFileSelect = document.getElementById("schemaFile");
    return schemaFiles.find((item) => item.name === schemaFileSelect.value);
}

function selectSchema() {
    const tableNameInput = document.getElementById("tableName");
    const schema = getSelectedSchema();

    if (schema !== undefined) {
        tableNameInput.value = schema.tableName;
    }
}

function renderSchemas(schemas) {
    const schemaFileSelect = document.getElementById("schemaFile");
    schemaFiles = Array.isArray(schemas) ? schemas : [];
    schemaFileSelect.innerHTML = "";

    if (schemaFiles.length === 0) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "No schema files found";
        schemaFileSelect.appendChild(option);
        schemaFileSelect.disabled = true;
        return;
    }

    schemaFileSelect.disabled = false;

    schemaFiles.forEach((schema) => {
        const option = document.createElement("option");
        option.value = schema.name;
        option.textContent = schema.name;
        schemaFileSelect.appendChild(option);
    });

    schemaFileSelect.value = schemaFiles[0].name;
    selectSchema();
}
