# Development Guide

This document explains the internal architecture and development workflow of `vs-code-ext-json-crud-ui-init`.

---

# Overview

`vs-code-ext-json-crud-ui-init` is a Visual Studio Code extension used to rapidly generate JSON-driven CRUD UI applications.

The extension works together with:

- json-crud-ui-init
- Node.js
- Express.js
- Tailwind CSS
- Vite

GitHub:
https://github.com/keshavsoft/json-crud-ui-init

---

# Architecture

```text
VS Code Extension
        ↓
Template Generator
        ↓
JSON CRUD Engine
        ↓
Dynamic UI Rendering
        ↓
API Integration