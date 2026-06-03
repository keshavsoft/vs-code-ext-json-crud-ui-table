# EndPointGen VS Code Extension

## Overview

**EndPointGen** is a Visual Studio Code extension developed by **KeshavSoft** focused on rapid **Node.js + Express.js API development**.

The extension helps developers generate:

- Express API structure
- CRUD endpoints
- Route registration
- Modular sub-routes
- Backend scaffolding

directly from the **VS Code Explorer context menu**.

---

## Demo

![Demo](Docs/Information/demo.gif)

---

# Installation

## From VS Code Marketplace

1. Open VS Code
2. Open Extensions
3. Search:

```text
EndPointGen
```

4. Click Install

---

# Features

- Generate Express.js API structure instantly
- Create endpoint registration inside `app.js`
- Add modular sub-route support
- Inject endpoint handlers into `.js` files
- Context-aware Explorer menu actions
- AI-assisted backend scaffolding
- Modular orchestration architecture
- Fast CRUD-oriented development workflow

---

# Commands

| Command | Title | Description |
|---|---|---|
| `extension.initJs` | Initiate Node API | Initializes Express server structure |
| `extension.createEndpoint` | CreateEndpoint | Creates route registration in `app.js` |
| `extension.addSubRoute` | AddSubRoute | Registers sub-route modules in `routes.js` |
| `extension.addEndPoint` | AddEndPoint | Injects endpoint logic into selected `.js` file |

---

# Usage

## Initialize API Structure

Right click on project folder.

Select:

```text
Initiate Node API
```

This generates:

```text
app.js
routes.js
Config/
Api/
```

---

## Create Endpoint

Right click on API folder.

Select:

```text
CreateEndpoint
```

Example generated structure:

```text
Api/V1/Customers
Api/V1/Orders
Api/V1/Bills
```

---

## Add Sub Route

Registers modular routes into:

```text
routes.js
```

Example:

```js
router.use("/Bills", BillsRouter);
```

---

## Add Endpoint Logic

Injects endpoint handler into selected file.

Example:

```js
router.get("/ShowAll", async (req, res) => {
    res.json([]);
});
```

---

# Related Packages

## json-crud-ui-init

Core runtime engine used together with this extension for JSON-driven CRUD UI generation.

GitHub:

https://github.com/keshavsoft/json-crud-ui-init

NPM:

https://www.npmjs.com/package/json-crud-ui-init

---

# json-crud-ui-init Features

- Dynamic CRUD UI generation
- JSON-driven rendering
- Create / Show / Table modules
- Tailwind CSS powered UI
- API-driven workflows
- Modular architecture
- Runtime configuration support

---

# Architecture

```text
VS Code Extension
        ↓
Template Generator
        ↓
json-crud-ui-init
        ↓
Dynamic CRUD UI
        ↓
Express.js APIs
```

---

# Core Philosophy

The extension follows a:

```text
Configuration Driven Architecture
```

where APIs, routes, and UI structures are generated dynamically instead of manually writing repetitive code.

Example JSON configuration:

```json
{
  "tableName": "Bills",
  "columns": [],
  "endPoints": {}
}
```