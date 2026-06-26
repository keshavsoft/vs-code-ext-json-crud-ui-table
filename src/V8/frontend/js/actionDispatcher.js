function getTableName() {
    return document.getElementById("tableName").value;
}

function sendWithHeader() {
    sendAction("withHeader", { tableName: getTableName() });
}

function showAll() {
    sendAction("showAll", { tableName: getTableName() });
}

function sendHeaderOnly() {
    sendAction("headerOnly", { tableName: getTableName() });
}

function sendCompShowAll() {
    sendAction("compShowAll", { tableName: getTableName() });
}

function sendCompSimple() {
    sendAction("compSimple", { tableName: getTableName() });
};

function quotation() {
    sendAction("quotation", { tableName: getTableName() });
};

function send(action) {
    sendAction(action);
}
