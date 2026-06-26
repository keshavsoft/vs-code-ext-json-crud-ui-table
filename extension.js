import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getLatestVersionFolder() {
	const basePath = path.join(__dirname, "src");

	const versions = fs.readdirSync(basePath)
		.filter(name => /^V\d+$/.test(name))
		.sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

	return versions.at(-1);
};

export async function activate(context) {
	const latest = getLatestVersionFolder();

	const backendPath = path.join(__dirname, "src", latest, "backend", "registerCommands.js");
	const importPath = fs.existsSync(backendPath)
		? `./src/${latest}/backend/registerCommands.js`
		: `./src/${latest}/registerCommands.js`;

	const mod = await import(importPath);

	mod.registerAllCommands(context);
};

export function deactivate() { };