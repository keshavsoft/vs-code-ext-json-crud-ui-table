window.addEventListener("message", ({ data }) => {
    if (data.type === "schemas") {
        renderSchemas(data.schemas);
    }
    if (data.type === "status") {
        showStatus(data.text);
    }
    if (data.type === "summary") {
        showSummary(data.html);
    }
    if (data.type === "complete") {
        completeStatus(data.html);
    }
});

// Load schemas on initialization
sendAction("loadSchemas");
