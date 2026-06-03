# vs-code-ext-json-crud-ui-init 🚀

VS Code extension for instantly generating HTML UI structure with linked JavaScript files directly from the Explorer context menu.

---

# ✨ Overview

**vs-code-ext-json-crud-ui-init** is a Visual Studio Code extension developed by **KeshavSoft** to simplify frontend UI initialization for CRUD-based projects.

The extension helps developers quickly create UI starter files without manually setting up folders and file structure.

---

# 🎯 Main Purpose

This extension provides a fast way to generate:

* HTML UI files
* Relative JavaScript files
* Organized folder structure

directly from the **VS Code Explorer Right-Click Menu**.

---

# ⚡ Features

✅ Right-click Explorer integration
✅ Generate UI starter structure instantly
✅ Automatically creates HTML files
✅ Automatically creates linked JavaScript files
✅ Clean folder-based organization
✅ Faster frontend setup workflow
✅ Beginner-friendly development process

---

# 🖼️ Workflow

## UI Init

1. Right-click inside VS Code Explorer
2. Select:

```bash id="m6x9k2"
Ui Init
```

3. Enter folder name

Example:

```bash id="s2v7jp"
Customers
```

4. Extension automatically creates:

```bash id="r3y8da"
Customers/
│
├── index.html
└── StartFunc.js
```

---

# 🚀 Generated HTML Example

```html id="u7w2fa"
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KeshavSoft</title>

    <!-- Tailwind CDN -->
    <!-- <script src="https://cdn.tailwindcss.com"></script> -->
    <script src="./tailwindcss-3.4.17.css"></script>
    <!-- Heroicons (SVG inline, no extra CDN needed) -->

    <style>
        mark {
            background-color: yellow;
            color: black;
        }
    </style>
</head>

<body class="bg-gray-100 flex flex-col min-h-screen">

    <main class="flex-grow">

        <div id="header"></div>

        <section class="mx-auto px-3 py-6 
                max-w-3xl 
                lg:max-w-5xl 
                xl:max-w-6xl">

            <div id="kSTableContainer"></div>

        </section>

    </main>

    <footer class="bg-gray-200 text-gray-700 text-center py-4">
        <div class="max-w-6xl mx-auto px-4">
            © 2026 KeshavSoft • Contact
        </div>
    </footer>

    <script src="https://keshavsoft.github.io/tailwind-todo/Public/ksheader.js" type="module"></script>

    <script type="module" src="./Index/start.js"></script>
</body>

</html>
```

---

# 🚀 Generated JavaScript Example

```js id="y4m8tr"
const StartFunc = () => {
    console.log("UI Initialized");
};

StartFunc();
```

---

# 📁 Folder Structure

```bash id="z6f2lc"
vs-code-ext-json-crud-ui-init
│
├── .vscode
├── archive
├── Docs
├── node_modules
├── src
├── test
│
├── extension.js
├── package.json
├── README.md
└── CHANGELOG.md
```

---

# 🛠️ Command

| Command   | Description                                     |
| --------- | ----------------------------------------------- |
| `Ui Init` | Creates HTML UI structure with relative JS file |

---

# 💡 Why Use This Extension?

* Save frontend setup time
* Avoid repetitive file creation
* Quickly bootstrap CRUD UI pages
* Maintain clean project structure
* Improve development productivity

---

# 🧠 Built With

* JavaScript
* HTML5
* VS Code Extension API
* Node.js

---

# 📄 License

MIT License

---

# 👨‍💻 Author

Developed by **KeshavSoft**

---

# ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork the project
* 🚀 Share with developers
